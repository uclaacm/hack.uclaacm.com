import React from 'react';
import { Container } from '@material-ui/core';

import events from '../../data/events/events';
import EventList from '../eventlist/eventlist';
// import moment from 'moment';

/*
const eventsToday = () => {
	const today = moment().hour(0).minute(0).second(0);
	return events.filter(event => {
		const eventDate = moment(event.date);
		const diff = eventDate.diff(today);
		const hour24 = moment.duration(24, 'hour');
		return diff > 0 && hour24 > diff;
	});
};
 */


function EventPage() {
	return (
		<Container maxWidth="md">
			<EventList events={events} />
		</Container>
	);
}

export default EventPage;
