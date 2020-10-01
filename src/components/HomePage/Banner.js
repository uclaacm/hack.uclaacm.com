import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import SvgImg from '../SvgImg';
import leftbanner from './leftbanner.svg';
import rightbanner from './rightbanner.svg';
import wordmark from './logo-wordmark-gradient.svg';

const styles = theme => ({
	container: {
		backgroundColor: '#FADDFF'
	},
	content: {
		display: 'flex',
		position: 'relative',
		alignItems: 'center',
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			maxWidth: '370px'
		}
	},
	title: {
		position: 'absolute',
		right: 0,
		textAlign: 'right',
		color: 'white',
		fontFamily: ['Poppins', 'sans-serif'],
		fontWeight: 'bold',
		minWidth: 'max-content'
	},
	mainTitle: {
		fontSize: theme.typography.fontSize * 3.4,
		lineHeight: 1.1,
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.typography.fontSize * 2.75
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize * 2.25
		}
	},
	subTitle: {
		fontSize: theme.typography.fontSize * 2,
		lineHeight: 1.5,
		fontWeight: 600,
		color: '#fb4469',
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize * 1.875,
			lineHeight: '1.1'
		}
	},
	period: {
		color: '#fb4469',
		fontFamily: 'open-sans'
	},
	wrenches: {
		position: 'relative'
	},
	leftBanner: {
		width: 450,
		[theme.breakpoints.down('sm')]: {
			width: 360
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	},
	wordmark: {
		width: 450,
		[theme.breakpoints.down('sm')]: {
			width: 360
		},
		[theme.breakpoints.down('xs')]: {
			display: 'block'
		}
	},
	rightBanner: {
		width: 450,
		[theme.breakpoints.down('sm')]: {
			width: 360
		},
		[theme.breakpoints.down('xs')]: {
			display: 'block'
		}
	}
});

function LeftBanner({ classes }) {
	return (
		<SvgImg className={classes.rightBanner} src={leftbanner} width={500} height={800} />
	);
}

LeftBanner.propTypes = {
	classes: PropTypes.object.isRequired
};

function RightBanner({ classes }) {
	return (
		<SvgImg className={classes.leftBanner} src={rightbanner} width={500} height={800} />
	);
}

RightBanner.propTypes = {
	classes: PropTypes.object.isRequired
};

function Wordmark({ classes }) {
	return (
		<SvgImg className={classes.wordmark} src={wordmark} width={1300} height={272.9} />
	);
}

Wordmark.propTypes = {
	classes: PropTypes.object.isRequired
};

function Banner({ classes }) {
	return (
		<div className={classes.container}>
			<Container maxWidth="md">
				<div className={classes.content}>
					<LeftBanner classes={classes} />
					<Wordmark classes={classes} />
					<RightBanner classes={classes} />
				</div>
			</Container>
		</div >

	);
}

Banner.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
