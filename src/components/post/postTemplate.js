import React from 'react';
import { graphql } from 'gatsby';

class PostTemplate extends React.Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq:$path } } ) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
