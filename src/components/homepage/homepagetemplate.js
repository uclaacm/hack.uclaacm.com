import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Banner from '../banner/banner';
import BlogList from '../blogpage/bloglist';
import HackDescription from '../hackdescription/hackdescription';
import HeadFooter from '../headfooter/headfooter';
import HomePageEvent from '../homepageevent/homepageevent';

export default class HomePage extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<HeadFooter>
				<Banner />
				<HackDescription />
				<BlogList data={data}/>
				<HomePageEvent />
			</HeadFooter>
		);
	}
}

export const pageQuery = graphql`
query BlogListInfo {
	allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 4) {
	  nodes {
		excerpt(pruneLength: 120)
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

HomePage.propTypes = {
	data: PropTypes.object.isRequired
};
