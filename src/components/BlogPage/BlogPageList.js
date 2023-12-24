import React from 'react';
import PropTypes from 'prop-types';

import { Grid, List } from '@material-ui/core';

import BlogListItem from './BlogListItem';

function BlogPageList({ data }) {
	const blogItem = data.allMarkdownRemark.nodes.map(blog =>
		<Grid key={blog.id} card xs={12} md={6} item style={{ display: 'flex' }}>
			<BlogListItem
				title={blog.frontmatter.title}
				subtitle={blog.frontmatter.subtitle}
				date={blog.frontmatter.date}
				author={blog.frontmatter.author}
				excerpt={blog.excerpt}
				timeToRead={blog.timeToRead}
				url={blog.fields.slug}
			/>
		</Grid>);
	return (
		<List disablePadding >
			<Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
				{blogItem}
			</Grid>
		</List>
	);
}

BlogPageList.propTypes = {
	data: PropTypes.object.isRequired
};

export default BlogPageList;
