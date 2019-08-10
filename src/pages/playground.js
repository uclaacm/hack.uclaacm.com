import React from 'react';
import HOTH from './hoth.png';

import HeadFooter from '../components/headfooter/headfooter';
// import Eventcard from '../components/eventcard/eventcard';
import EventList, { Event } from '../components/eventlist/eventlist';

const events = [
	new Event({
		name: 'Hack on the Hill',
		date: new Date(),
		detailLink: 'https://www.google.com',
		location: 'Carnesale Commons',
		imgURL: HOTH
	}),
	new Event({
		name: 'Learn.py Session 4',
		date: new Date(),
		detailLink: 'https://www.google.com',
		location: 'Covel 227',
		imgURL: HOTH
	}),
	new Event({
		name: 'HackSchool Session 2',
		date: new Date(),
		detailLink: 'https://www.google.com',
		location: 'Covel 227',
		imgURL: HOTH
	})
];
export default class PlayGround extends React.Component {
	render() {
		return (
			<HeadFooter>
				<EventList events={events}/>
				<div style={{ height: '1000px' }}></div>
			</HeadFooter>
		);
	}
}
