import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import BlogListItem from './BlogListItem';

const styles = {
	root: {
		overflowWrap: 'break-word',
		width: '100%'
	}
};

function BlogList({ classes }) {
	const data = useStaticQuery(graphql`
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
	`);

	return <Grid container spacing={2}>
		{data.allMarkdownRemark.nodes.map(post =>
			<Grid item sm={12} md={6} key={post.id} classes={{ root: classes.root }}>
				<BlogListItem post={post} />
			</Grid>)}
	</Grid>;
}

BlogList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogList);
