import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
	listItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	title: {
		color: '#000000',
		fontFamily: ['Poppins', 'sans-serif'],
		fontSize: theme.typography.fontSize * 1.3,
		lineHeight: 1.2,
		fontWeight: 600
	},
	subtitle: {
		color: '#000000',
		fontFamily: ['Poppins', 'sans-serif'],
		fontSize: theme.typography.fontSize * 0.9,
		lineHeight: 1.3
	},
	excerpt: {
		fontSize: theme.typography.fontSize * 0.9,
		fontFamily: theme.typography.fontFamily,
		color: '#0000008A'
	},
	info: {
		fontSize: theme.typography.fontSize * 0.9,
		fontFamily: theme.typography.fontFamily,
		color: '#0000008A',
		padding: theme.spacing(1, 0, 0)
	}
});

function BlogListItem({ nodes, classes }) {
	const { frontmatter, fields } = nodes;
	return (
		/*
			TODO:
				- Remove shadow over button
		*/
		<Grid item xs={12} sm={6} md={6} className={classes.listItem}>
			<Card elevation={1}>
				<CardActionArea href={fields.slug}>
					<CardContent>
						<Typography className={classes.title}>{frontmatter.title}</Typography>
						<Typography className={classes.subtitle}>{frontmatter.subtitle}</Typography>
						<Typography className={classes.excerpt}>{nodes.excerpt}</Typography>
						<Typography className={classes.info}>
							{frontmatter.date}  | {nodes.timeToRead} min read
						</Typography>
					</CardContent>
				</CardActionArea>

			</Card>
		</Grid>
	);
}

BlogListItem.propTypes = {
	nodes: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogListItem);


