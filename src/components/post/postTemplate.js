import React from 'react';
import { graphql } from 'gatsby';

class PostTemplate extends React.Component {
  render () {
    // data.markdownRemark holds our post data
    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;
    return (
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    );
  }
}

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
