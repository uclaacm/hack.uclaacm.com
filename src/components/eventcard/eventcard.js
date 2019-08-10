import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import BigDate from '../bigdate/BigDate';

const styles = theme => ({
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
	buttonGrid: {
		// make Grid item takes up the rest of the row
		flexGrow: 1,
		// float button to right
		textAlign: 'right',
		// overwrite default width: 100%
		width: 'auto'
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
	const dateStr = moment(date).calendar();
	return (
		<Card raised>
			<CardMedia
				component="img"
				src={imgURL}
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
					<Grid item classes={{ root: classes.buttonGrid }} container justify="flex-end">
						<Link href={detailLink} underline="none">
							<Button variant="outlined" size="small" disabled={!detailLink}>
								Learn More
							</Button>
						</Link>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

EventCard.propTypes = {
	name: PropTypes.string.isRequired,
	imgURL: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	location: PropTypes.string.isRequired,
	detailLink: PropTypes.string.isRequired
};

export default withStyles(styles)(EventCard);
