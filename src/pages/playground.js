import React from 'react';
import HomePage from '../components/homepage/homepagetemplate';

import HeadFooter from '../components/headfooter/headfooter';
export default class PlayGround extends React.Component {
	render() {
		return (
			<HeadFooter>
				<HomePage/>
			</HeadFooter>
		);
	}
}
