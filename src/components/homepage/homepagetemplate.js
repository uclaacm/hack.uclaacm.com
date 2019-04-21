import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import bannerBackground from './banner_background.svg';

import { withStyles } from '@material-ui/core/styles';

const StyleHeader = () =>
	<Helmet>
		<link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700" rel="stylesheet"/>
	</Helmet>;

const styles = theme => ({
	container: {
		position: 'relative'
	},
	title: {
		position: 'absolute',
		right: '8%',
		top: '25%',
		textAlign: 'right',
		color: 'white',
		fontFamily: ['Poppins', 'sans-serif'],
		fontWeight: '700'
	},
	mainTitle: {
		fontSize: '6.5vw',
		lineHeight: '110%'

	},
	subTitle: {
		fontSize: '4vw',
		lineHeight: '180%',

		[theme.breakpoints.down(415)]: {
			fontWeight: '900',
			color: '#ecff44'
		},
		[theme.breakpoints.up(415)]: {
			fontWeight: '600',
			color: '#fb4469'
		}
	},
	bannerContainer: {
		maxWidth: '100%',
		position: 'relative'
	},
	banner: {
		position: 'relative'
	},
	period: {
		color: '#fb4469',
		fontFamily: 'open-sans'
	},
	wrenches: {
		position: 'absolute',
		maxWidth: '63%',
		top: '6%',
		left: '5%'
	}
});

class HomePage extends React.Component {
	render() {
		const { classes } = this.props;
		/* eslint-disable react/jsx-key */
		return [
			<StyleHeader />,
			<div className={classes.container}>
				<img className={classes.banner} src={bannerBackground}/>
				<div className={classes.title}>
					<div className={classes.mainTitle}>Move Fast<span className={classes.period}>.</span></div>
					<div className={classes.mainTitle}>Build Things<span className={classes.period}>.</span></div>
					<div className={classes.subTitle}>Start Hacking<span className={classes.period}>.</span></div>
				</div>
			</div>

		];
		/* eslint-enable react/jsx-key */
	}
}

HomePage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
