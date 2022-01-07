/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const dayjs = require('dayjs');

const events = require('./src/data/events/events');
const highlightedEvents = require('./src/data/events/highlights');

// convert windows to linux path
const postDirectory = path.join(__dirname, 'posts').replace(/\\/g, '/');

function getQuarterEvents(allEvents, tag = null) {
	const quarterEvents = new Map();
	for (const event of allEvents) {
		const { quarter, tags, workshops } = event.parent.childYaml;
		if (!quarterEvents.has(quarter)) {
			quarterEvents.set(quarter, []);
		}
		/*
			If we don't want to filter by tags,
			or if the event tags includes that tag,
			push the entire event.
			Else, it means that we only want specific
			workshops inside the event.
		*/
		if (tag === null || tags.includes(tag)) {
			quarterEvents.get(quarter).push(event.parent.childYaml);
		} else if (tag !== null && !tags.includes(tag)) {
			const filteredEvent = {
				directors: event.parent.childYaml.directors,
				name: event.parent.childYaml.name,
				mainLink: event.parent.childYaml.mainLink,
				quarter: event.parent.childYaml.quarter,
				tags: event.parent.childYaml.tags,
				workshops: []
			};
			if (workshops) {
				for (const workshop of workshops) {
					if (workshop.tags.includes(tag)) {
						filteredEvent.workshops.push(workshop);
					}
				}
			}
			if (filteredEvent.workshops.length > 0) {
				quarterEvents.get(quarter).push(filteredEvent);
			}
		}
	}
	return quarterEvents;
}

// Add all workshop and event tags into an allTags array
function getAllTags(allEvents) {
	const allTags = [];
	for (const event of allEvents) {
		const { tags, workshops } = event.parent.childYaml;
		if (workshops) {
			workshops.forEach(workshop => {
				workshop.tags.forEach(tagName => {
					const slugTag = tagName.replace(' ', '-');
					if (!allTags.some(tag => tag.displayName === tagName)) {
						allTags.push({
							displayName: tagName,
							slugURL: slugTag
						});
					}
				});
			});
		}
		for (const tagName of tags) {
			const slugTag = tagName.replace(' ', '-');
			if (!allTags.some(tag => tag.displayName === tagName)) {
				allTags.push({
					displayName: tagName,
					slugURL: slugTag
				});
			}
		}
	}
	return allTags;
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
	/**
	 *
	 * Inject all markdown pages. It looks up all the post with GraphQL.
	 * Then uses `createPage` to create individual pages.
	 *
	 */
	const PostTemplate = path.resolve('src/components/Post/PostTemplate.js');
	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				filter: {
					fields: {
						slug: {
							regex: "/\\\\/posts\\\\/(?:fall|winter|spring)[0-9]{4}/"
						}
					}
				}
				limit: 1000
			) {
				nodes {
					fields {
						slug
					}
				}
			}
		}
	`);
	for (const node of result.data.allMarkdownRemark.nodes) {
		const { slug } = node.fields;
		createPage({
			path: slug,
			component: PostTemplate,
			context: {
				slug
			} // page query parameters can be passed through context
		});
	}

	const BlogPageTemplate = path.resolve('src/components/BlogPage/BlogPageTemplate.js');
	const blogsPerPage = 20;
	const numBlogs = result.data.allMarkdownRemark.nodes.length;
	const numPages = Math.ceil(numBlogs / blogsPerPage);
	for (let i = 1; i <= numPages; i++) {
		// URL of first page of blog has no page number
		const pagePath = i === 1 ? `/blog` : `/blog/page/${i}`;
		let prevPageURL;
		if (i === 1) {
			prevPageURL = null;
		} else if (i === 2) {
			prevPageURL = `/blog`;
		} else {
			prevPageURL = `/blog/page/${i - 1}`;
		}

		createPage({
			path: pagePath,
			component: BlogPageTemplate,
			context: {
				lim: blogsPerPage,
				toskip: (i - 1) * blogsPerPage,
				prevPageURL,
				nextPageURL: i === numPages ? null : `/blog/page/${i + 1}`,
				currPageNum: i,
				totalPageNum: numPages
			}
		});
	}

	// Archive Page Template
	const ArchivePageTemplate = path.resolve('src/components/ArchivePage/ArchivePageTemplate.js');
	const archiveResult = await graphql(`
		query WorkshopArchiveQuery {
			allYaml(sort: {fields: quarter, order: DESC}) {
				nodes {
					parent {
						... on File {
							id
							childYaml {
								directors
								name
								mainLink
								quarter
								tags
								workshops {
									name
									repo
									slides
									tags
									youtube
									presenters
								}
							}
						}
					}
				}
			}
		}
	`);

	const allEvents = archiveResult.data.allYaml.nodes;
	const quarterEventsMap = getQuarterEvents(allEvents);
	const allTags = getAllTags(allEvents);
	const quarterEvents = Object.fromEntries(quarterEventsMap);
	createPage({
		path: `/archive`,
		component: ArchivePageTemplate,
		context: {
			quarterEvents,
			allTags
		}
	});

	const TagPageTemplate = path.resolve('src/components/ArchivePage/TagPageTemplate.js');
	for (const tag of allTags) {
		const tagName = tag.displayName;
		const { slugURL } = tag;
		const quarterEventsMapTags = getQuarterEvents(allEvents, tagName);
		const quarterEventsTags = Object.fromEntries(quarterEventsMapTags);
		createPage({
			path: `/archive/tags/${slugURL}`,
			component: TagPageTemplate,
			context: {
				quarterEventsTags,
				tagName
			}
		});
	}
};


exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === 'MarkdownRemark') {
		/**
		 * inject the path of the markdown file as
		 * `slug` property within `MarkdownRemark`
		 * for later when create pages.
		 */
		const absPath = node.fileAbsolutePath;
		if (absPath.startsWith(postDirectory)) {
			const value = createFilePath({ node, getNode });
			createNodeField({
				name: 'slug',
				node,
				value: `/posts${value}`
			});
		}
	}
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
	const promises = [];

	const today = dayjs().hour(0).minute(0).second(0);
	for (const rawEvent of events) {
		promises.push(actions.createNode({
			// if rsvpLink and conferenceLink does not exist in any of the rawEvents
			// then its value will default to empty, otherwise it will be
			// overwritten by the actual value
			// See https://github.com/gatsbyjs/gatsby/issues/6800
			// Can remove this when at least one event in events.js
			// has a defined rsvpLink and conferenceLink
			conferenceLink: '',
			rsvpLink: '',
			...rawEvent,
			// This specifies an `imgFile` foreign key File reference in the
			// HackEvent schema using the relative image file path.
			// See https://www.gatsbyjs.org/docs/schema-gql-type/#foreign-key-reference-___node
			// eslint-disable-next-line camelcase
			imgFile___NODE___relativePath: rawEvent.imgFilePath,
			// Consider an event as past if it started before today. As an example, if
			// an event was today at 2pm but it is 5pm right now, the event is NOT
			// considered "past".
			past: dayjs(rawEvent.date) < today,

			id: createNodeId(`${rawEvent.name}-${rawEvent.date.toISOString()}`),
			parent: null,
			children: [],
			internal: {
				type: 'HackEvent',
				contentDigest: createContentDigest(JSON.stringify(rawEvent))
			}
		}));
	}

	for (const rawHighlightedEvent of highlightedEvents) {
		promises.push(actions.createNode({
			// if link does not exist in any of the rawHighlightedEvents
			// then its value will default to empty, otherwise it will be
			// overwritten by the actual value
			// See https://github.com/gatsbyjs/gatsby/issues/6800
			// Can remove this when at least one event in highlights.js
			// has a defined link
			link: '',
			...rawHighlightedEvent,
			// eslint-disable-next-line camelcase
			imgFile___NODE___relativePath: rawHighlightedEvent.imgFilePath,

			id: createNodeId(`highlighted-${rawHighlightedEvent.name}`),
			parent: null,
			children: [],
			internal: {
				type: 'HighlightedHackEvent',
				contentDigest: createContentDigest(JSON.stringify(rawHighlightedEvent))
			}
		}));
	}

	return Promise.all(promises);
};
