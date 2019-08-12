import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Post from './post';
import HeadFooter from '../headfooter/headfooter';

function PostTemplate({ data }) {
	return (
		<HeadFooter>
			<Post data={data}/>
		</HeadFooter>
	);
}

PostTemplate.propTypes = {
	data: PropTypes.object.isRequired
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
      }
    }
  }
`;
