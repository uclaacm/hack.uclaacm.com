module.exports = {
	siteMetadata: {
		title: 'UCLA ACM Hack',
		// eslint-disable-next-line max-len
		description: 'We are a student-run organization that aims to empower UCLA students to influence their world through code. We host events for coders of all skills levels.',
		author: 'UCLA ACM Hack'
	},
	plugins: [
		'gatsby-plugin-material-ui',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				/* eslint-disable camelcase */
				name: 'UCLA ACM Hack',
				short_name: 'Hack',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#c960ff',
				display: 'minimal-ui',
				// This path is relative to the root of the site.
				icon: 'src/images/acm-hack-logo.svg'
				/* eslint-enable camelcase */
			}
		},
		/* include /posts for markdown rendering */
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/posts`,
				name: 'post-md-pages'
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-images',
					/* allows relative path resolution in markdowns */
					'gatsby-remark-copy-linked-files',
					/* syntax highlighter in code blocks */
					'gatsby-remark-prismjs'
				]
			}
		},
		'gatsby-plugin-svgr',
		{
			resolve: 'gatsby-plugin-offline',
			options: {
				workboxConfig: {
					importWorkboxFrom: 'cdn'
				}
			}
		}
	]
};
