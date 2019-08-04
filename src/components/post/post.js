import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import MDContainer from '../mdcontainer/mdcontainer';

const styles = theme => ({
	date: {
		color: theme.palette.grey[500]
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
		<Container maxWidth="md">
			<article>
				<Typography variant="h2" gutterBottom>
					{frontmatter.title}
				</Typography>
				<Typography variant="h5">
					{frontmatter.subtitle}
				</Typography>
				<Typography variant="body1" className={classes.date}>
					{date}
				</Typography>
				<MDContainer html={html} />
			</article>
		</Container>
	);
}

Post.propTypes = {
	data: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
