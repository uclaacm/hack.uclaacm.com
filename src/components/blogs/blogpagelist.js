import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import BlogListItem from '../blogpage/bloglistitem';

function BlogPageList({ data }) {
	const blogItem = data.allMarkdownRemark.nodes.map(blog =>
		<Grid item xs={12} sm={12} md={12} key={blog.id}>
			<BlogListItem nodes={blog} />
		</Grid>);
	return (
		<Grid container spacing={2}>
			{blogItem}
		</Grid>
	);
}

BlogPageList.propTypes = {
	data: PropTypes.object.isRequired
};
export default BlogPageList;
