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
		fontFamily: ['Poppins', 'sans-serif'],
		color: '#000000'
	},
	title: {
		fontSize: theme.typography.fontSize * 1.2,
		fontWeight: 600,
		lineHeight: 0.8
	},
	description: {
		fontSize: theme.typography.fontSize * 0.9,
		fontFamily: theme.typography.fontFamily,
		color: '#0000008A'
	}
});

function BlogListItem({ nodes, classes }) {
	const { frontmatter, fields } = nodes;
	return (
		<ListItem divider component='a' href={fields.slug} className={classes.listItem} >
			<div className={classes.heading}>
				<div className={classes.title}>{frontmatter.title}</div>
				<div>{frontmatter.subtitle}</div>
			</div>
			<Typography className={classes.description}>{nodes.excerpt}</Typography>
			<Typography className={classes.description}>
				{frontmatter.date}  | {nodes.timeToRead} min read
			</Typography>
		</ListItem>
	);
}

BlogListItem.propTypes = {
	nodes: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogListItem);


