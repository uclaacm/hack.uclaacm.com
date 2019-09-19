import React from 'react';

import events from '../../data/events/events';
import EmptyEventMessage from '../emptyeventmessage/emptyeventmessage';
import ScrollableEvents from '../scrollableevents/scrollableevents';

function EventList() {
	const topEvents = events.slice(0, 3);
	return topEvents.length === 0 ?
		<EmptyEventMessage /> :
		<ScrollableEvents events={topEvents} />;
}

export default EventList;
