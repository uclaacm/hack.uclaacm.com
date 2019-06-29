import React from 'react';
import Banner from '../banner/banner';
import HackDescription from '../hackdescription/hackdescription';
import HeadFooter from '../headfooter/headfooter';

export default class PlayGround extends React.Component {
	render() {
		return (
			<HeadFooter>
				<Banner />
				<HackDescription />
			</HeadFooter>
		);
	}
}
