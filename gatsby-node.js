/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = async ({actions: {createPage}, graphql }) => {

  const postTemplate = path.resolve('src/components/post/postTemplate.js');

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
    `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
       createPage({
         path: node.frontmatter.path,
         component: postTemplate,
         context: {}, // additional data can be passed via context
       })
     })

}
