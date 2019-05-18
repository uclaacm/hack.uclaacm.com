import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Wrenches from './wrenches';

const styles = () => ({
	container: {
		backgroundColor: '#352A3A',
		height: '45vw'
	},
	title: {
		position: 'absolute',
		right: '8%',
		top: '10vw',
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
		fontWeight: '600',
		color: '#fb4469'
	},
	period: {
		color: '#fb4469',
		fontFamily: 'open-sans'
	},
	wrenches: {
		position: 'relative',
		width: '85vw',
		top: '2vw',
		left: '4vw'
	}
});

class HomePage extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<div className={classes.wrenches}>
					<Wrenches/>
				</div>
				<div className={classes.title}>
					<div className={classes.mainTitle}>
						Move Fast<span className={classes.period}>.</span><br />
						Build Things<span className={classes.period}>.</span>
					</div>
					<div className={classes.subTitle}>Start Hacking<span className={classes.period}>.</span></div>
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
