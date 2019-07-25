import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MDContainer from '../mdcontainer/mdcontainer';
import { Typography } from '@material-ui/core';

const styles = theme => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	post: {
		maxWidth: theme.maxWidth,
		margin: theme.spacing(2),
		/**
		 * this minWidth overwrites the default minWidth: auto,
		 * which allows the element to shrink in a flexbox if
		 * the parent is getting smaller than maxWidth.
		*/
		minWidth: 0
	},
	date: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(4)
	}
});

function Post({ data, classes }) {
	// data.markdownRemark holds our post data
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const date = new Date(frontmatter.date).toLocaleDateString('en-US', {
		year: 'numeric', month: 'long', day: 'numeric'
	});

	return (
		<div className={classes.container}>
			<article className={classes.post}>
				<Typography variant="h2" gutterBottom>
					{frontmatter.title}
				</Typography>
				<Typography variant="h5" gutterBottom>
					{frontmatter.subtitle}
				</Typography>
				<Typography variant="body1" className={classes.date}>
					{date}
				</Typography>
				<MDContainer html={html} />
			</article>
		</div>
	);
}

Post.propTypes = {
	data: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
