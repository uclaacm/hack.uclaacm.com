import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { ListItem, Typography } from '@material-ui/core';

const styles = theme => ({
	listItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	heading: {
		fontFamily: ['Poppins', 'sans-serif']
		// padding: theme.spacing(0.5, 0)
	},
	title: {
		fontSize: theme.typography.fontSize * 1.3,
		fontWeight: 500
		// lineHeight: 0.8
	},
	description: {
		fontSize: theme.typography.fontSize,
		color: '#0000008A'
	}
});

function BlogListItem({ nodes, classes }) {
	const { frontmatter } = nodes;
	return (
		<ListItem className={classes.listItem} divider>
			<div className={classes.heading}>
				<div className={classes.title}>{frontmatter.title}</div>
				<div>{frontmatter.subtitle}</div>
			</div>
			<Typography className={classes.description}>{nodes.excerpt}</Typography>
			<Typography className={classes.description}>
				{frontmatter.date}  | Time to Read: {nodes.timeToRead} min
			</Typography>
		</ListItem>
	);
}

BlogListItem.propTypes = {
	nodes: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogListItem);


