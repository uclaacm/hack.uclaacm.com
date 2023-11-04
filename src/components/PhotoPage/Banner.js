import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ParallaxBanner } from 'react-scroll-parallax';
// import { ParallaxBannerLayer } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
// import { HackGroupPhoto } from './hackGroup.jpg';
// import { graphql } from 'gatsby';
import PageTitle from '../PageTitle/PageTitle';

const useStyles = makeStyles(theme => ({
	container: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
		width: '0.7',
		height: '400px',
		margin: 'auto',
		// marginTop: '55%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		display: 'flex',
		textAlign: 'center',
		marginLeft: theme.spacing(4),
		marginRight: theme.spacing(4),
		fontFamily: theme.typography.body1.fontFamily,
		fontSize: theme.typography.fontSize * 1.3,
		lineHeight: 1.76,
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize,
			lineHeight: 1.57
		}
	},
	wordmark: {
		// height: 385.25,
		width: 'auto',
		overflow: 'auto',
		[theme.breakpoints.down('sm')]: {
			width: 240
		},
		[theme.breakpoints.down('xs')]: {
			width: 180,
			display: 'block'
		}
	}
}));

export function Banner() {
	const classes = useStyles();
	return (
		<div>
			<ParallaxBanner
				layers={[
					{ image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg', speed: -30 },
					{
						speed: -20,
						children: <PageTitle align='center'>Who We Are</PageTitle>
					}
					//   { image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png", speed: -10 },
				]}
				className={classes.container}
			>
				<div className={classes.container}>
					<PageTitle align='center'>Who We Are</PageTitle>
					<p className={classes.text}>
						We aim to empower and connect the UCLA community by providing
						the means to build amazing things through code.
					</p>
				</div>
			</ParallaxBanner>
		</div>
	);
}

Banner.propTypes = {
	classes: PropTypes.object.isRequired
};

export default Banner;
