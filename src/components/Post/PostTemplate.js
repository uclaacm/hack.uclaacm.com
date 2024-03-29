import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';

import Post from './Post';
import HeadFooter from '../HeadFooter/HeadFooter';
import SEO from '../SEO';

function PostTemplate({ data }) {
	const { frontmatter, html } = data.markdownRemark;
	const { date, title, subtitle, author } = frontmatter;
	// The built-in Date constructor that parses a date string does so in UTC,
	// which we do not want. Dayjs, however, parses it in the current timezone.
	const dateObj = dayjs(date).toDate();
	return (
		<HeadFooter>
			<SEO
				title={title}
				type='article'
				meta={[
					{ name: 'article:published_time', content: dateObj.toISOString() },
					{ name: 'article:section', content: 'Technology' }
				]}
			/>
			<Post
				title={title}
				subtitle={subtitle}
				date={dateObj}
				author={author}
				html={html}
			/>
		</HeadFooter>
	);
}

PostTemplate.propTypes = {
	data: PropTypes.exact({
		markdownRemark:	PropTypes.exact({
			html: PropTypes.string.isRequired,
			frontmatter: PropTypes.exact({
				date: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				subtitle: PropTypes.string.isRequired,
				author: PropTypes.string
			}).isRequired
		}).isRequired
	}).isRequired
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
				title
				subtitle
				author
      }
    }
  }
`;
