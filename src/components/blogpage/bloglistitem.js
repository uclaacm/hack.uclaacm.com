import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import { Grid, Link, Typography } from '@material-ui/core';

const styles = theme => ({
	listItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		'&:hover': {
			backgroundColor: theme.palette.primary.dark + '0a'
		},
		borderRadius: '12px'
	},
	'heading:hover': {
		backgroundColor: 'black'
	},
	heading: {
		color: '#000000',
		textDecoration: 'none'

	},
	title: {
		fontFamily: ['Poppins', 'sans-serif'],
		fontSize: theme.typography.fontSize * 1.3,
		lineHeight: 1.2,
		fontWeight: 600,
		padding: theme.spacing(1, 0, 0)
	},
	subtitle: {
		fontFamily: ['Poppins', 'sans-serif'],
		fontSize: theme.typography.fontSize * 0.9,
		lineHeight: 1.3
	},
	excerpt: {
		fontSize: theme.typography.fontSize * 0.9,
		fontFamily: theme.typography.fontFamily,
		color: '#0000008A'
		// padding: theme.spacing(1, 0)
	},
	info: {
		fontSize: theme.typography.fontSize * 0.9,
		fontFamily: theme.typography.fontFamily,
		color: '#0000008A',
		padding: theme.spacing(1, 0) // check this
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
		<Grid item xs={12} sm={6} md={6} className={classes.listItem}>
			<Link underline='none' href={fields.slug} className={classes.heading}>
				<Typography className={classes.title}>{frontmatter.title}</Typography>
				<Typography className={classes.subtitle}>{frontmatter.subtitle}</Typography>
			</Link>
			<Typography className={classes.excerpt}>{nodes.excerpt}</Typography>
			<Typography className={classes.info}>
				{frontmatter.date}  | {nodes.timeToRead} min read
			</Typography>
		</Grid>
	);
}

BlogListItem.propTypes = {
	nodes: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogListItem);


