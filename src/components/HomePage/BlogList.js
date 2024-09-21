import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import BlogListItem from './BlogListItem';

const styles = {
	listItem: {
		overflowWrap: 'break-word'
	}
};

function BlogList({ classes }) {
	const data = useStaticQuery(graphql`
		query BlogListInfo {
			allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 4) {
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
	`);

	return <Grid container spacing={2}>
		{data.allMarkdownRemark.nodes.map(post =>
			<Grid item sm={12} md={6} key={post.id} className={classes.listItem}>
				<BlogListItem post={post} />
			</Grid>)}
	</Grid>;
}

BlogList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogList);
