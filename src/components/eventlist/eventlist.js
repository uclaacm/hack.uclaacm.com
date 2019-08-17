
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

import EventCard from '../eventcard/eventcard';

const styles = theme => ({
	item: {
		width: '260px',
		height: '420px',
		margin: theme.spacing(3)
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
	events: PropTypes.arrayOf(Object).isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventList);
