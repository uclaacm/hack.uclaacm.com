import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';


import BlogPageList from './blogpagelist';
import HeadFooter from '../headfooter/headfooter';

export default class BlogPage extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<HeadFooter>
				<h1>Blogs will go here</h1>
				<BlogPageList data={data}/>
			</HeadFooter>

		);
	}
}

export const pageQuery = graphql`
query BlogPageListInfo {
	allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 4) {
	  nodes {
		excerpt(pruneLength: 150)
		timeToRead
		frontmatter {
		  date(formatString: "MMMM D, YYYY")
		  subtitle
		  title
		}
		fields {
			slug
		}
		id
	  }
	}
  }  
`;

BlogPage.propTypes = {
	data: PropTypes.object.isRequired
};
