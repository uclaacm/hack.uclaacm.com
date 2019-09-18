/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// convert windows to linux path
const postDirectory = path.join(__dirname, 'posts').replace(/\\/g, '/');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
	/**
	 * use `createPage` to create the home page.
	 * TODO: inject the top few most recent blog posts into home page.
	 */
	const homepageTemplate = path.resolve('src/components/homepage/homepagetemplate.js');
	createPage({
		path: '/', // home page
		component: homepageTemplate
	});
	/**
	 *
	 * Inject all markdown pages. It looks up all the post with GraphQL.
	 * Then uses `createPage` to create individual pages.
	 *
	 */
	const postTemplate = path.resolve('src/components/post/postTemplate.js');
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
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);
	for (const { node } of result.data.allMarkdownRemark.edges) {
		const { fields: { slug } } = node;
		createPage({
			path: slug,
			component: postTemplate,
			context: {
				slug
			} // page query parameters can be passed through context
		});
	}

	const blogpageTemplate = path.resolve('src/components/blogpage/blogpagetemplate.js');
	const blogsPerPage = 20;
	const numBlogs = result.data.allMarkdownRemark.edges.length;
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
			component: blogpageTemplate,
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
