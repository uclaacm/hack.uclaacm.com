/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const moment = require('moment');

const events = require('./src/data/events/events');
const highlightedEvents = require('./src/data/events/highlights');

// convert windows to linux path
const postDirectory = path.join(__dirname, 'posts').replace(/\\/g, '/');

function sortByQuarter(first, second) {
	const firstEventName = first.parent.childYaml.name;
	const secondEventName = second.parent.childYaml.name;

	const firstEventDate = first.parent.childYaml.quarter;
	const secondEventDate = second.parent.childYaml.quarter;

	const [firstEventQuarter, firstEventYear] = firstEventDate.split(' ');
	const [secondEventQuarter, secondEventYear] = secondEventDate.split(' ');

	const quarterOrder = ['Winter', 'Spring', 'Summer', 'Fall'];

	if (firstEventYear === secondEventYear) {
		if (firstEventQuarter === secondEventQuarter) {
			return firstEventName < secondEventName ? -1 : 1;
		}
		return quarterOrder.indexOf(secondEventQuarter) - quarterOrder.indexOf(firstEventQuarter);
	}
	return parseInt(secondEventYear) - parseInt(firstEventYear);
}

function getQuarterList(events) {
	const sortedQuarters = [];
	events.forEach(event => {
		const { quarter } = event.parent.childYaml;
		if (!sortedQuarters.includes(quarter)) {
			sortedQuarters.push(quarter);
		}
	});
	return sortedQuarters;
}

function getQuarterEvents(events) {
	const quarterEvents = {};
	events.forEach(event => {
		const { quarter } = event.parent.childYaml;
		if (quarterEvents[quarter] === undefined) {
			quarterEvents[quarter] = [];
		}
		quarterEvents[quarter].push(event.parent.childYaml);
	});
	return quarterEvents;
}

// Add all workshop and event tags into an allTags array
function getAllTags(events) {
	const allTags = [];
	events.forEach(event => {
		const { tags, workshops } = event.parent.childYaml;
		if (workshops) {
			workshops.forEach(workshop => {
				workshop.tags.forEach(tag => {
					if (!allTags.includes(tag)) {
						allTags.push(tag);
					}
				})
			});
		}
		tags.forEach(tag => {
			if (!allTags.includes(tag)) {  //NEEDS FIXING
				allTags.push(tag);
			}
		})
	});
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
								director
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
									presenter
								}
							}
						}
					}
				}
			}
		}
	`);

	// console.log(archiveResult);
	const events = archiveResult.data.allYaml.nodes;
	events.sort(sortByQuarter);
	const sortedQuarterList = getQuarterList(events);
	const quarterEventsDict = getQuarterEvents(events);
	const allTagsList = getAllTags(events);
	createPage({
		path: `/archive`,
		component: ArchivePageTemplate,
		context: {
			sortedQuarterList: sortedQuarterList,
			quarterEventsDict: quarterEventsDict,
			allTagsList: allTagsList
		}
	});


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

	const today = moment().hour(0).minute(0).second(0);
	for (const rawEvent of events) {
		promises.push(actions.createNode({
			// if conferenceLink does not exist in any of the rawEvents
			// then its value will default to empty, otherwise it will be
			// overwritten by the actual value
			// See https://github.com/gatsbyjs/gatsby/issues/6800
			// Can remove this when at least one event in events.js
			// has a defined conferenceLink
			conferenceLink: '',
			...rawEvent,
			// This specifies an `imgFile` foreign key File reference in the
			// HackEvent schema using the relative image file path.
			// See https://www.gatsbyjs.org/docs/schema-gql-type/#foreign-key-reference-___node
			// eslint-disable-next-line camelcase
			imgFile___NODE___relativePath: rawEvent.imgFilePath,
			// Consider an event as past if it started before today. As an example, if
			// an event was today at 2pm but it is 5pm right now, the event is NOT
			// considered "past".
			past: moment(rawEvent.date) < today,

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
