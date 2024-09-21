import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

function SEO({
	description,
	lang = 'en-US',
	meta = [],
	title,
	type = 'website'
}) {
	const data = useStaticQuery(graphql`
		query DefaultSEOQuery {
			site {
				siteMetadata {
					title
					description
					author
					image
				}
			}
		}
	`);

	const metaDescription =
		description || data.site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
			titleTemplate={`%s | ${data.site.siteMetadata.title}`}
			meta={[
				{
					name: 'description',
					content: metaDescription
				},
				{
					property: 'og:title',
					content: title
				},
				{
					property: 'og:site_name',
					content: data.site.siteMetadata.title
				},
				{
					property: 'og:description',
					content: metaDescription
				},
				{
					property: 'og:type',
					content: type
				},
				{
					name: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					property: 'og:image',
					content: data.site.siteMetadata.image
				},
				{
					name: 'twitter:image',
					content: data.site.siteMetadata.image
				},
				...meta
			]}
		/>
	);
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.array,
	title: PropTypes.string.isRequired,
	type: PropTypes.string
};

export default SEO;
