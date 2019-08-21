import React from 'react';

import Banner from '../banner/banner';
import HackDescription from '../hackdescription/hackdescription';
import HeadFooter from '../headfooter/headfooter';
import HomePageEvent from '../homepageevent/homepageevent';

export default class PlayGround extends React.Component {
	render() {
		return (
			<HeadFooter>
				<Banner />
				<HackDescription />
				<HomePageEvent />
			</HeadFooter>
		);
	}
}
