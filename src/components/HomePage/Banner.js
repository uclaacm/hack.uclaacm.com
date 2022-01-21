import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { StaticImage } from 'gatsby-plugin-image';

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
	leftBanner: {
		width: 450,
		overflow: 'unset',
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
		overflow: 'unset',
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
		<StaticImage
			imgStyle={{ width: 'auto' }}
			className={classes.rightBanner}
			src={'./leftbanner.svg'}
			width={499}
			height={801}
			placeholder="tracedSVG"
			quality={100}
		/>
	);
}

LeftBanner.propTypes = {
	classes: PropTypes.object.isRequired
};

function RightBanner({ classes }) {
	return (
		<StaticImage
			imgStyle={{ width: 'auto' }}
			className={classes.leftBanner}
			src={'./rightbanner.svg'}
			width={499}
			height={801}
			placeholder="tracedSVG"
			quality={100}
		/>
	);
}

RightBanner.propTypes = {
	classes: PropTypes.object.isRequired
};

function Wordmark({ classes }) {
	return (
		<StaticImage
			className={classes.wordmark}
			src={'../../images/logo-wordmark-gradient.svg'}
			width={1312}		// Width was hardcoded here because there were layout issues with the SVG.
			height={277} // Hence, things were hardcoded to prevent the wordmark from cutting off.
			placeholder="tracedSVG"
			quality={100}
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
