import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import MDContainer from '../MDContainer/MDContainer';

const styles = theme => ({
	container: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		overflowWrap: 'break-word'
	},
	date: {
		color: theme.palette.grey[500]
	},
	author: {
		fontStyle: 'italic'
	}
});

const dateFormatter = new Intl.DateTimeFormat('en-US', {
	year: 'numeric', month: 'long', day: 'numeric'
});

function Post({ title, subtitle, date, author, html, classes }) {
	const formattedDate = dateFormatter.format(date);

	return (
		<Container maxWidth="md" component="article" classes={{ root: classes.container }}>
			<Typography variant="h3" component="h1">
				{title}
			</Typography>
			<Typography variant="h5" component="h3">
				{subtitle}
			</Typography>
			<Typography variant="body1" gutterBottom className={classes.date}>
				{formattedDate}
			</Typography>
			<Typography variant="body2" className={classes.author}>
				{author ? `By ${author}` : ''}
			</Typography>
			<MDContainer html={html} />
		</Container>
	);
}

Post.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	author: PropTypes.string,
	html: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
