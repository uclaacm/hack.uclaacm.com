import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import MDContainer from '../mdcontainer/mdcontainer';

const styles = theme => ({
	container: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		overflowWrap: 'break-word'
	},
	date: {
		color: theme.palette.grey[500]
	}
});

function Post({ data, classes }) {
	// data.markdownRemark holds our post data
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const date = moment(frontmatter.date).format('MMMM D, YYYY');

	return (
		<Container maxWidth="md" component="article" classes={{ root: classes.container }}>
			<Typography variant="h2" gutterBottom component="h1">
				{frontmatter.title}
			</Typography>
			<Typography variant="h5" component="h3">
				{frontmatter.subtitle}
			</Typography>
			<Typography variant="body1" className={classes.date}>
				{date}
			</Typography>
			<MDContainer html={html} />
		</Container>
	);
}

Post.propTypes = {
	data: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
