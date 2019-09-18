import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TalkBubbleIcon from '@material-ui/icons/ModeCommentTwoTone';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';

import BlogListItem from './bloglistitem';
import LinkNoStyle from '../linknostyle/linknostyle';


const styles = theme => ({
	listItem: {
		overflowWrap: 'break-word'
	},
	title: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		// align icon with text
		display: 'flex',
		alignItems: 'center'
	},
	titleIcon: {
		marginRight: theme.spacing(1),
		fontSize: 'inherit'
	},
	forwardArrow: {
		marginLeft: theme.spacing(1),
		fontSize: theme.typography.fontSize * 0.75
	},
	viewAllBtn: {
		margin: theme.spacing(2, 0)
	}
});

function BlogList({ data, classes }) {
	const blogListItem = data.allMarkdownRemark.nodes.map(blog =>
		<Grid item sm={12} md={6} key={blog.id} className={classes.listItem}>
			<BlogListItem nodes={blog} />
		</Grid>);
	return (
		<Container maxWidth="md">
			<Typography variant="h4" classes={{ root: classes.title }}>
				<TalkBubbleIcon color="primary" classes={{ root: classes.titleIcon }} />
				Blog posts
			</Typography>
			<LinkNoStyle to='/blog'>
				<Button variant="outlined" classes={{ root: classes.viewAllBtn }}>
					View all blog posts
					<ArrowForwardIcon classes={{ root: classes.forwardArrow }} />
				</Button>
			</LinkNoStyle>
			<Grid container spacing={2}>
				{blogListItem}
			</Grid>
		</Container>
	);
}

BlogList.propTypes = {
	data: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogList);


