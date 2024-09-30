import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BlogListItem from './BlogListItem';

const useStyles = makeStyles(/* theme */() => ({
	blogPostGrid: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	blogPostCardStyle: {
		// To-Do
	}
}));

function BlogPageList({ data }) {
	const classes = useStyles();
	const blogItem = data.allMarkdownRemark.nodes.map(blog =>
		<Grid key={blog.id} item /* className={blogPostCardStyle} */ >
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
		<Grid container className={classes.blogPostGrid}>
			{blogItem}
		</Grid>
	);
}

BlogPageList.propTypes = {
	data: PropTypes.object.isRequired
};

export default BlogPageList;
