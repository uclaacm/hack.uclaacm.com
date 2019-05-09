/* eslint-disable camelcase */
module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		// eslint-disable-next-line max-len
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
	},
	plugins: [
		/* material-ui theme injection */
		{
			resolve: `gatsby-plugin-material-ui`,
			options: {
				theme: {
					palette: {
						primary: {
							main: '#C960FF',
							light: '#d37fff',
							dark: '#8c43b2',
							contrastText: '#fff'
						},
						secondary: {
							main: '#ED3266',
							light: '#f05b84',
							dark: '#a52347',
							contrastText: '#fff'
						}
					},
					typography: {
						useNextVariants: true,
						fontSize: 16,
						fontFamily: 'Chivo, sans-serif',
						h1: { fontFamily: '"Palanquin", sans-serif' },
						h2: { fontFamily: '"Palanquin", sans-serif' },
						h3: { fontFamily: '"Palanquin Dark", sans-serif' },
						h4: { fontFamily: '"Palanquin Dark", sans-serif' },
						h5: { fontFamily: '"Palanquin Dark", sans-serif' },
						h6: { fontFamily: '"Palanquin Dark", sans-serif' }
					}
				}
			}
		},
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
					`gatsby-remark-copy-linked-files`
				]
			}
		}
	]
};
