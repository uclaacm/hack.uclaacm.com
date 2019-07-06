import React from 'react';
import Banner from '../components/banner/banner';

import HeadFooter from '../components/headfooter/headfooter';
export default class PlayGround extends React.Component {
	render() {
		return (
			<HeadFooter>
				<Banner/>
			</HeadFooter>
		);
	}
}
