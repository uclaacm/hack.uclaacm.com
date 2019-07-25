/* eslint-disable camelcase */
module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		// eslint-disable-next-line max-len
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-material-ui`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				// This path is relative to the root of the site.
				icon: `src/images/gatsby-icon.png`
			}
		},
		/* include /posts for markdown rendering */
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/posts`,
				name: 'post-md-pages'
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					`gatsby-remark-images`,
					/* allows relative path resolution in markdowns */
					`gatsby-remark-copy-linked-files`,
					/* syntax highlighter in code blocks */
					`gatsby-remark-prismjs`
				]
			}
		}
	]
};
