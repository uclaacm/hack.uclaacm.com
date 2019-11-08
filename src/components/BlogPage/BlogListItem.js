import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Link } from '@material-ui/core';

import LinkNoStyle from '../LinkNoStyle/LinkNoStyle';

function BlogListItem({
	title,
	subtitle,
	excerpt,
	date,
	timeToRead,
	url
}) {
	return (
		<article>
			<Link variant="h4" component="h2" color="primary">
				<LinkNoStyle to={url}>
					{title}
				</LinkNoStyle>
			</Link>
			<Typography>
				{subtitle}
			</Typography>
			<Typography gutterBottom>
				{date} | {timeToRead} min read
			</Typography>
			<Typography color="textSecondary" gutterBottom>
				{excerpt}
			</Typography>
		</article>
	);
}

BlogListItem.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	timeToRead: PropTypes.number.isRequired,
	url: PropTypes.string.isRequired
};

export default BlogListItem;
