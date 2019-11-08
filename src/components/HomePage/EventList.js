import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import EmptyEventMessage from '../EmptyEventMessage/EmptyEventMessage';
import ScrollableEvents from '../ScrollableEvents/ScrollableEvents';

function EventList() {
	const data = useStaticQuery(graphql`
		{
			upcomingEvents: allHackEvent(sort: {fields: date}, filter: {past: {eq: false}}, limit: 3) {
				nodes {
					...HackEventForEventGrid
				}
			}
		}
	`);
	const topEvents = data.upcomingEvents.nodes;
	return topEvents.length === 0 ?
		<EmptyEventMessage /> :
		<ScrollableEvents events={topEvents} />;
}

export default EventList;
