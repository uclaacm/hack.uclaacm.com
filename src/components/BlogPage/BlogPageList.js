import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from '@material-ui/core';

import BlogListItem from './BlogListItem';

function BlogPageList({ data }) {
	const blogItem = data.allMarkdownRemark.nodes.map(blog =>
		<ListItem key={blog.id} disableGutters>
			<BlogListItem
				title={blog.frontmatter.title}
				subtitle={blog.frontmatter.subtitle}
				date={blog.frontmatter.date}
				excerpt={blog.excerpt}
				timeToRead={blog.timeToRead}
				url={blog.fields.slug}
			/>
		</ListItem>);
	return (
		<List>
			{blogItem}
		</List>
	);
}

BlogPageList.propTypes = {
	data: PropTypes.object.isRequired
};

export default BlogPageList;
