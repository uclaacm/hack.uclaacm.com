import React from 'react';
import BlogList from '../components/blogpage/bloglist';

import HeadFooter from '../components/headfooter/headfooter';
export default class PlayGround extends React.Component {
	render() {
		return (
			<HeadFooter>
				<BlogList />
			</HeadFooter>
		);
	}
}
