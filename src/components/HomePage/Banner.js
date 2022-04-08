import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import leftBanner from './leftbanner.svg';
import rightBanner from './rightbanner.svg';
import wordmark from '../../images/logo-wordmark-gradient.svg';

const styles = theme => ({
	container: {
		backgroundColor: '#FADDFF'
	},
	content: {
		display: 'flex',
		position: 'relative',
		alignItems: 'center',
		margin: 'auto',
		overflow: 'unset',
		[theme.breakpoints.down('xs')]: {
			maxWidth: '370px'
		}
	},
	leftBanner: {
		width: 310,
		[theme.breakpoints.down('sm')]: {
			width: 240
		},
		[theme.breakpoints.down('xs')]: {
			width: 180
		}
	},
	wordmark: {
		width: 310,
		overflow: 'auto',
		[theme.breakpoints.down('sm')]: {
			width: 240
		},
		[theme.breakpoints.down('xs')]: {
			width: 180,
			display: 'block'
		}
	},
	rightBanner: {
		width: 310,
		[theme.breakpoints.down('sm')]: {
			width: 240
		},
		[theme.breakpoints.down('xs')]: {
			width: 180,
			display: 'none'
		}
	}
});

function LeftBanner({ classes }) {
	return (
		<img
			className={classes.leftBanner}
			src={leftBanner}
		/>
	);
}

LeftBanner.propTypes = {
	classes: PropTypes.object.isRequired
};

function RightBanner({ classes }) {
	return (
		<img
			className={classes.rightBanner}
			src={rightBanner}
		/>
	);
}

RightBanner.propTypes = {
	classes: PropTypes.object.isRequired
};

function Wordmark({ classes }) {
	return (
		<img
			className={classes.wordmark}
			src={wordmark}
		/>
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
