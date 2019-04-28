import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import HeadFooter from '../headfooter/headfooter';
import MDContainer from '../mdcontainer/mdcontainer';

class PostTemplate extends React.Component {
	render() {
		// data.markdownRemark holds our post data
		const { markdownRemark } = this.props.data;
		const { frontmatter, html } = markdownRemark;
		return (
			<HeadFooter>
				<div className="blog-post-container">
					<div className="blog-post">
						<h1>{frontmatter.title}</h1>
						<h2>{frontmatter.date}</h2>
						<MDContainer html={html} />
					</div>
				</div>
			</HeadFooter>
		);
	}
}

PostTemplate.propTypes = {
	data: PropTypes.object.isRequired
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`;
