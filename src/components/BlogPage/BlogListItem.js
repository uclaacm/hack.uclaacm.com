import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent, CardActionArea, withStyles, Divider } from '@material-ui/core';

import LinkNoStyle from '../LinkNoStyle/LinkNoStyle';

const styles = theme => ({
	container: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		width: '100%',
		borderRadius: '20px',
		boxShadow: '0 1px 15px rgba(201, 96, 255, 0.2)'
	},
	button: {
		display: 'flex',
		height: '100%',
		alignItems: 'flex-start'
	},
	content: {
		margin: theme.spacing(2, 1)
	},
	title: {
		paddingBottom: theme.spacing(0)
	},
	divider: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	}
});

function BlogListItem({
	title,
	subtitle,
	excerpt,
	date,
	timeToRead,
	url,
	author,
	classes
}) {
	return (
		<Card className={classes.container} variant='outlined'>
			<CardActionArea className={classes.button}>
				<LinkNoStyle to={url}>
					<CardContent className={classes.content}>
						<Typography variant="h4" component="h2" color="primary" className={classes.title}>
							{title}
						</Typography>
						<Divider variant='fullWidth' className={classes.divider}/>
						<Typography>
							{subtitle}
						</Typography>
						<Typography gutterBottom>
							{ author ? `by ${author} |` : ''} {date} | {timeToRead} min read
						</Typography>
						<Typography color="textSecondary">
							{excerpt}
						</Typography>
					</CardContent>
				</LinkNoStyle>
			</CardActionArea>
		</Card>
	);
}

BlogListItem.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	author: PropTypes.string,
	timeToRead: PropTypes.number.isRequired,
	url: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogListItem);
