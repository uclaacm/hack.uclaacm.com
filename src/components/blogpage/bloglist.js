import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import BlogListItem from './bloglistitem';
import { Button, Container, Grid } from '@material-ui/core';


const styles = theme => ({
	container: {
		// display: 'flex',
		flexDirection: 'column'
	},
	listItem: {
		overflowWrap: 'break-word'
	},
	title: {
		fontFamily: ['Poppins', 'sans-serif'],
		textAlign: 'left',
		margin: theme.spacing(2, 0, 0)
	},
	button: {
		width: '100%',
		display: 'flex'
	},
	buttonRoot: {
		margin: '8px auto' // don't know how to use auto with theme.spacing
	},
	link: {
		textDecoration: 'none'
	}
});

function BlogList({ data, classes }) {
	const blogListItem = data.allMarkdownRemark.nodes.map(blog =>
		<Grid item xs={12} sm={6} md={6} key={blog.id} className={classes.listItem}>
			<BlogListItem nodes={blog} />
		</Grid>);
	return (
		<Container maxWidth="md" className={classes.container}>
			<h1 className={classes.title}>Our Latest Posts</h1>
			<Grid container spacing={1}>
				{blogListItem}
			</Grid>
			<div className={classes.button}>
				<Button variant="outlined" color="primary" href='../blog' classes={{ root: classes.buttonRoot }}>
					More Posts
				</Button>
			</div>

		</Container>
	);
}

BlogList.propTypes = {
	data: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogList);


