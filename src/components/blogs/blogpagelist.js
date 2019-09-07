import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Container } from '@material-ui/core';

import BlogListItem from '../blogpage/bloglistitem';

function BlogPageList({ data }) {
	const blogItem = data.allMarkdownRemark.nodes.map(blog =>
		<Grid item xs={12} sm={12} md={12} key={blog.id}>
			<BlogListItem nodes={blog} />
		</Grid>);
	return (
		<Container maxWidth="md">
			<Grid container spacing={1}>
				{blogItem}
			</Grid>
		</Container>


	);
}

BlogPageList.propTypes = {
	data: PropTypes.object.isRequired
};
export default BlogPageList;
