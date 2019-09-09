import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core';

import Banner from '../banner/banner';
import BlogList from '../homepageblog/bloglist';
import HackDescription from '../hackdescription/hackdescription';
import HeadFooter from '../headfooter/headfooter';
import HomePageEvent from '../homepageevent/homepageevent';

const styles = theme => ({
	sectionPadding: {
		margin: theme.spacing(4, 0, 0, 0)
	}
});

function HomePage({ data, classes }) {
	return (
		<HeadFooter>
			<Banner />
			<HackDescription />
			<div className={classes.sectionPadding}>
				<BlogList data={data}/>
			</div>
			<div className={classes.sectionPadding}>
				<HomePageEvent />
			</div>
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

export default withStyles(styles)(HomePage);
