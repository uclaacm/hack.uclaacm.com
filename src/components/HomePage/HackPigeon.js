import React from 'react';
import Pigeon from './pigeon.svg';

function HackPigeon(props) {
	return (
		<div {...props}>
			<img alt="" src={Pigeon} />
		</div>
	);
}

export default HackPigeon;
