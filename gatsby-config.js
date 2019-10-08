const onlyInProduction = process.env.NODE_ENV === 'production';

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
		// include /posts for markdown rendering
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'post-md-pages',
				path: `${__dirname}/posts`
			}
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-sharp',
			options: {
				useMozJpeg: onlyInProduction
			}
		},
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
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-images',
					/* auto linking headers in markdown */
					'gatsby-remark-autolink-headers',
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
