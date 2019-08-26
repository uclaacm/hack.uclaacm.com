import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import moment from 'moment';
import { withStyles } from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventIcon from '@material-ui/icons/Event';

import eventsData from '../../data/events/events';
import EventList from '../eventlist/eventlist';

const styles = theme => ({
	headline: {
		// fontFamily: theme.typography.fontFamily,
		fontWeight: 500,
		margin: theme.spacing(2, 0)
	}
});

const EmptyPlaceholder = () =>
	<Container style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
		<Typography variant="h5" align="center" color="textSecondary" gutterBottom>
			{'💜 Thank you for your support'}
		</Typography>
		<Typography variant="h5" align="center" color="textSecondary" gutterBottom>
			{' 🚀 Please look forward to our events next quarter'}
		</Typography>
		<Typography variant="h5" align="center" color="textSecondary" gutterBottom>
			{'🙌 And we can\'t wait to seeing the amazing YOU'}
		</Typography>
	</Container>;

/**
 * @returns events that has passed.
 * Past is defined as happened before today.
 * Meaning, if an event was today at 2pm but it is 5pm,
 * the event is NOT considered "past".
 */
const getPastEvents = events => {
	const today = moment().hour(0).minute(0).second(0);
	return events.filter(event => moment(event.date) < today);
};

function EventPage({ classes }) {
	const pastEvents = getPastEvents(eventsData);
	// pastEvents are references to the same object
	// therefore we can use indexOf.
	const futureEvents = eventsData.filter(x =>
		pastEvents.indexOf(x) === -1);

	const futureEventComponent = futureEvents.length === 0 ?
		<EmptyPlaceholder /> :
		<EventList events={futureEvents} />;

	const pastEventComponent = pastEvents.length === 0 ?
		null :
		<>
			<Typography variant="h3" align="center" className={classes.headline}>
				<EventIcon fontSize="large" /> Past
			</Typography>
			<EventList events={pastEvents} />;
		</>;

	return (
		<>
		<Typography variant="h3" align="center" className={classes.headline} color="primary">
			<EventAvailableIcon fontSize="large" /> Upcoming
		</Typography>
		{futureEventComponent}
		{pastEventComponent}
		</>
	);
}

EventPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPage);
