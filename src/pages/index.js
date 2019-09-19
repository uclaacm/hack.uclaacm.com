import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import HeadFooter from '../components/headfooter/headfooter';
import HomePageComponent from '../components/homepage/homepage';

function HomePage({ data }) {
	return (
		<HeadFooter>
			<HomePageComponent data={data} />
		</HeadFooter>
	);
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
	data: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default HomePage;
