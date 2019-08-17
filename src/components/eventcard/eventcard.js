import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import BigDate from '../bigdate/BigDate';

const styles = theme => ({
	container: {
		position: 'relative',
		height: '100%',
		borderRadius: theme.shape.borderRadius * 2
	},
	banner: {
		height: '200px',
		// adjust image to cover the entire box
		objectFit: 'cover'
	},
	eventName: {
		fontFamily: ['Poppins', 'san-serif'],
		margin: theme.spacing(0),
		fontSize: theme.typography.fontSize / 14 * 24
	},
	details: {
		fontSize: theme.typography.fontSize / 16 * 14
	},
	buttonArea: {
		// relative to the container class above
		position: 'absolute',
		bottom: 0,
		right: 0,
		// to align with the padding in `CardContent`
		// which is by default theme.spacing(2)
		padding: theme.spacing(2)
	}
});

function EventCard({
	name,
	date,
	location,
	detailLink,
	imgURL,
	classes
}) {
	const [isHover, setIsHover] = useState(false);
	const dateStr = moment(date).calendar();
	return (
		<Card
			raised
			elevation={isHover ? 11 : 6}
			className={classes.container}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<CardMedia
				// component="img"
				image={imgURL}
				classes={{ root: classes.banner }}
			/>
			<CardContent>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={12}> <BigDate date={date} /> </Grid>
					<Grid item>
						<Typography classes={{ root: classes.eventName }} variant="h3">
							{name}
						</Typography>
						<Typography variant="body1" component="span" classes={{ root: classes.details }}>
							{`${dateStr} · ${location}`}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions className={classes.buttonArea}>
				<Link href={detailLink} underline="none">
					<Button variant="outlined" size="small" disabled={!detailLink}>
						Learn More
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}

EventCard.propTypes = {
	name: PropTypes.string.isRequired,
	imgURL: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	location: PropTypes.string.isRequired,
	// link might not be available yet
	detailLink: PropTypes.string
};

export default withStyles(styles)(EventCard);
