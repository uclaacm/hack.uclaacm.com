
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

import EventCard from '../eventcard/eventcard';

export function Event({ name, date, location, detailLink, imgURL }) {
	this.name = name;
	this.date = date;
	this.location = location;
	this.detailLink = detailLink;
	this.imgURL = imgURL;
}

const styles = () => ({
	item: {
		width: '260px'
	}
});

function EventList({ events, classes }) {
	const eventCards = events.map(e =>
		<Grid item key={e.name} className={classes.item}>
			<EventCard {...e} />
		</Grid>);

	return (
		<Grid container>
			{eventCards}
		</Grid>
	);
}

EventList.propTypes = {
	events: PropTypes.arrayOf(Event).isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventList);
