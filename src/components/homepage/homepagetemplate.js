import React from 'react';
import Helmet from 'react-helmet';
import banner from './banner.svg';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const StyleHeader = () =>
	<Helmet>
		<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"/>
	</Helmet>;

const styles = theme => ({
	container: {
		position: 'relative'
	},
	title: {
		position: 'absolute',
		right: '75px',
		top: '125px',
		textAlign: 'right',
		color: 'white',
		fontFamily: ['Poppins', 'sans-serif'],
		fontWeight: 'bold'
	},
	mainTitle: {
		fontSize: '90px',
		lineHeight: '90px'
	},
	subTitle: {
		fontSize: '45px',
		lineHeight: '45px'
	},
	banner: {
		maxWidth: '100%'
	}
});

class HomePage extends React.Component {
	render() {
		const { classes } = this.props;
		/* eslint-disable react/jsx-key */
		return [
			<StyleHeader />,

			<div className={classes.container}>
				<img className={classes.banner} src={banner}/>
				<div className={classes.title}>
					<div className={classes.mainTitle}>Move Fast.</div>
					<div className={classes.mainTitle}>Build Things.</div>
					<div className={classes.subTitle}>Start Hacking.</div>
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
