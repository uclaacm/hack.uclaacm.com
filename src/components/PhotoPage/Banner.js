import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import { ParallaxBanner, ParallaxBannerLayer, Parallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
// import { HackGroupPhoto } from './hackGroup.jpg';

const useStyles = makeStyles(theme => ({
	container: {
		// marginTop: theme.spacing(4),
		// marginBottom: theme.spacing(4),
		// position: 'absolute',
		width: '0.7',
		height: '400px',
		margin: 'auto'
		// marginTop: '55%',
	},
	text: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		// marginTop:theme.spacing(4),
		// marginBottom: theme.spacing(4),
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

// const styles = theme => ({
// 	container: {
// 		// backgroundImage: url("hackGroup.jpg"),
// 		height: '100%',
// 		/* Create the parallax scrolling effect */
// 		backgroundAttachment: 'fixed',
// 		backgroundPosition: 'center',
// 		backgroundRepeat: 'no-repeat',
// 		backgroundSize: 'cover'
// 	},
// 	content: {
// 		display: 'flex',
// 		position: 'relative',
// 		alignItems: 'center',
// 		margin: 'auto',
// 		overflow: 'unset',
// 		[theme.breakpoints.down('xs')]: {
// 			maxWidth: '370px'
// 		}
// 	},
// 	wordmark: {
// 		// height: 385.25,
// 		width: 'auto',
// 		overflow: 'auto',
// 		[theme.breakpoints.down('sm')]: {
// 			width: 240
// 		},
// 		[theme.breakpoints.down('xs')]: {
// 			width: 180,
// 			display: 'block'
// 		}
// 	},
// 	title: {
// 		fontFamily: theme.typography.body1.fontFamily,
// 		fontSize: theme.typography.fontSize * 1.3,
// 		lineHeight: 1.76,
// 		[theme.breakpoints.down('xs')]: {
// 			fontSize: theme.typography.fontSize,
// 			lineHeight: 1.57
// 		}
// 	},
// 	body: {
// 		fontFamily: theme.typography.body1.fontFamily,
// 		fontSize: theme.typography.fontSize * 1.3,
// 		lineHeight: 1.76,
// 		[theme.breakpoints.down('xs')]: {
// 			fontSize: theme.typography.fontSize,
// 			lineHeight: 1.57
// 		}
// 	}
// });

function Banner() {
	const classes = useStyles();
	// const background = {
	// 	// image: "/src/components/PhotoPage/hackGroup.jpg",
	// 	image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
	// 	translateY: [0, 50],
	// 	opacity: [1, 0.3],
	// 	scale: [1.05, 1, 'easeOutCubic'],
	// 	shouldAlwaysCompleteAnimation: true
	//   };
	//   const headline = {
	// 	translateY: [0, 30],
	// 	scale: [1, 1.05, 'easeOutCubic'],
	// 	shouldAlwaysCompleteAnimation: true,
	// 	expanded: false,
	// 	children:
	// 	  <div className="absolute inset-0 flex items-center justify-center">
	// 	  	<h1 className="text-6xl md:text-8xl text-white font-thin">WELCOME!</h1>
	// 	  </div>

	//   };
	//   const foreground = {
	// 	// image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
	// 	image: `"./hackGroup.jpg"`,
	// 	translateY: [0, 15],
	// 	scale: [1, 1.1, 'easeOutCubic'],
	// 	shouldAlwaysCompleteAnimation: true
	//   };
	//   const gradientOverlay = {
	// 	opacity: [0, 0.9],
	// 	shouldAlwaysCompleteAnimation: true,
	// 	expanded: false,
	// 	children:
	// 	  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />

	//   };
	return (
		// <ParallaxBanner
		// 	layers={[background, headline, foreground, gradientOverlay]}
		// 	className={classes.container}
		// />
		<Parallax>
			<div className={classes.container}>
				<img src="./hackGroup.jpg" />
			</div>
			<Parallax y={[0, -200]}>
				<div className={classes.text} data-jarallax-element="-200 0">
					<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Totam esse accusantium beatae cupiditate officiis consequatur
					ipsam dolorem non earum porro temporibus sapiente deleniti
					inventore quis possimus et, incidunt eum fugit.
					</p>
				</div>
			</Parallax>
		</Parallax>
		// <ParallaxBanner y={[0, 0]} opacity={0.3}>
		// 	<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg' alt="backgroundImg" />
		// 	<ParallaxBanner y={[0, 0]} opacity={0.3} shouldAlwaysCompleteAnimation>
		// 		<p>Who We Are</p>

	// 	</ParallaxBanner>
	// </ParallaxBanner>

	// <ParallaxBanner y={[0, 0]}
	// 	layers={[
	// 		{ image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg", speed: -20 },
	// 		{
	// 			speed: -15,
	// 			children: (
	// 			<div className={classes.text}>
	// 				<h1>Hello World!</h1>
	// 			</div>
	// 			),
	// 		},
	// 		{ image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png", speed: -10 },
	// 		]}
	// 		className={classes.container}
	// 		>
	// 	<div className={classes.text}>
	// 		<h1>Hello World!</h1>
	// 	</div>
	// </ParallaxBanner>

	// <ParallaxBanner y={[0, 0]} opacity={0.3} shouldAlwaysCompleteAnimation layers={[
	// 	<ParallaxBannerLayer expanded><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg' alt="backgroundImg" /></ParallaxBannerLayer>,
	// 	<ParallaxBannerLayer expanded={false}>
	// 		<div>
	// 			<h1 color='white'>Hello World!</h1>
	// 		</div>
	// 	</ParallaxBannerLayer>]}>
	// </ParallaxBanner>

	);
}

Banner.propTypes = {
	classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(Banner);


// export const AdvancedBannerTop = () => {
//   const background: BannerLayer = {
//     image:
//       "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
//     translateY: [0, 50],
//     opacity: [1, 0.3],
//     scale: [1.05, 1, "easeOutCubic"],
//     shouldAlwaysCompleteAnimation: true
//   };

//   const headline: BannerLayer = {
//     translateY: [0, 30],
//     scale: [1, 1.05, "easeOutCubic"],
//     shouldAlwaysCompleteAnimation: true,
//     expanded: false,
//     children: (
//       <div className="inset center">
//         <h1 className="headline white">Hello World!</h1>
//       </div>
//     )
//   };

//   const foreground: BannerLayer = {
//     image:
//       "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
//     translateY: [0, 15],
//     scale: [1, 1.1, "easeOutCubic"],
//     shouldAlwaysCompleteAnimation: true
//   };

//   const gradientOverlay: BannerLayer = {
//     opacity: [0, 1, "easeOutCubic"],
//     shouldAlwaysCompleteAnimation: true,
//     expanded: false,
//     children: <div className="gradient inset" />
//   };

//   return (
//     <ParallaxBanner
//       layers={[background, headline, foreground, gradientOverlay]}
//       className="full"
//     />
//   );
// };
