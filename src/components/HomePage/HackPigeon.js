import React from 'react';
import Pigeon from './pigeon.svg';

function HackPigeon(props) {
	return (
		<div {...props}>
			<img src={Pigeon} />
		</div>
	);
}

export default HackPigeon;
