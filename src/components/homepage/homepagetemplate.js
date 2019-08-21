import React from 'react';

import Banner from '../banner/banner';
import HackDescription from '../hackdescription/hackdescription';
import HeadFooter from '../headfooter/headfooter';
import ScrollableEvents from '../scrollableevents/scrollableevents';
import events from '../../data/events/events';

export default class PlayGround extends React.Component {
	render() {
		return (
			<HeadFooter>
				<Banner />
				<HackDescription />
				<ScrollableEvents events={events.slice(0, 3)} />
			</HeadFooter>
		);
	}
}
