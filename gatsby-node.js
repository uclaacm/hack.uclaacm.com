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
	/* eslint-disable max-len */
	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				filter: { fields: {slug: {regex: "/\\\\/posts\\\\/(?:fall|winter|spring)[0-9]{4}/"}}}
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
	/* eslint-enable max-len */
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const { fields: { slug } } = node;
		createPage({
			path: slug,
			component: postTemplate,
			context: {
				path: slug
			} // page query parameters can be passed through context
		});
	});

	const blogpageTemplate = path.resolve('src/components/blogs/blogpagetemplate.js');
	const blogsPerPage = 2;
	let pageNum = 1;
	const limit = result.data.allMarkdownRemark.edges.length;
	for (let i = 0; i < limit; i += blogsPerPage) {
		createPage({
			path: `/blog/page/${pageNum}`,
			component: blogpageTemplate,
			context: {
				lim: blogsPerPage,
				toskip: i
			}
		});
		pageNum++;
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
