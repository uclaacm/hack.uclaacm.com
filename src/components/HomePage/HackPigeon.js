import React from 'react';
import Pigeon from './pigeon.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	pigeon: {
		animation: '$translateUpDown',
		animationDuration: '4s',
		animationIterationCount: 'infinite',
		animationTimingFunction: 'ease',
		animationDirection: 'alternate-reverse'
	},
	'@keyframes translateUpDown': {
		'0%': {
			transform: 'rotate(0) translateY(-5%)'
		},
		'100%': {
			transform: 'rotate(3deg) translateY(5%)'
		}
	}
}));

function HackPigeon(props) {
	const classes = useStyles();
	return (
		<div {...props}>
			<img src={Pigeon} className={classes.pigeon} />
		</div>
	);
}

export default HackPigeon;
