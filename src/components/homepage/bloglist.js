import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import BlogListItem from './bloglistitem';

const styles = {
	listItem: {
		overflowWrap: 'break-word'
	}
};

function BlogList({ data, classes }) {
	return <Grid container spacing={2}>
		{data.allMarkdownRemark.nodes.map(blog =>
			<Grid item sm={12} md={6} key={blog.id} className={classes.listItem}>
				<BlogListItem nodes={blog} />
			</Grid>)}
	</Grid>;
}

BlogList.propTypes = {
	data: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogList);
