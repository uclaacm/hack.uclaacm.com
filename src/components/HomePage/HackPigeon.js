import React from 'react';
import Pigeon from './pigeon.svg';

function HackPigeon(props) {
	// const classes = useStyles();
	return (
		<div {...props}>
			<img src={Pigeon} />
		</div>
	);
}

export default HackPigeon;
