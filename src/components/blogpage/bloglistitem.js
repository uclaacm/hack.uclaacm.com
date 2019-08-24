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
		color: '#000000',
		textDecoration: 'none'
	},
	title: {
		fontFamily: ['Poppins', 'sans-serif'],
		fontSize: theme.typography.fontSize * 1.3,
		fontWeight: 600
	},
	subtitle: {
		fontFamily: ['Poppins', 'sans-serif'],
		fontSize: theme.typography.fontSize * 0.9
	},
	excerpt: {
		fontSize: theme.typography.fontSize * 0.9,
		fontFamily: theme.typography.fontFamily,
		color: '#0000008A',
		padding: theme.spacing(1, 0)
	},
	info: {
		fontSize: theme.typography.fontSize * 0.9,
		fontFamily: theme.typography.fontFamily,
		color: '#0000008A'
	}
});

function BlogListItem({ nodes, classes }) {
	const { frontmatter, fields } = nodes;
	return (
		/*
			TODO:
				- Only Click Title and Subtitle to go to blog page
				- Space everything apart to distinguish parts of post
		*/
		<ListItem divider disableGutters className={classes.listItem} >
			<a href={fields.slug} className={classes.heading}>
				<Typography className={classes.title}>{frontmatter.title}</Typography>
				<Typography className={classes.subtitle}>{frontmatter.subtitle}</Typography>
			</a>
			<Typography className={classes.excerpt}>{nodes.excerpt}</Typography>
			<Typography className={classes.info}>
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


