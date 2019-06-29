import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Wrenches from './wrenches';

const styles = theme => ({
	container: {
		backgroundColor: '#352A3A'
	},
	content: {
		display: 'flex',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'left',
		maxWidth: '800px',
		height: '400px',
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			maxWidth: '370px',
			maxHeight: '250px'
		}
	},
	title: {
		position: 'absolute',
		right: '0px',
		textAlign: 'right',
		color: 'white',
		fontFamily: ['Poppins', 'sans-serif'],
		fontWeight: 'bold',
		minWidth: 'max-content',
		padding: '0 20px 0 0'
	},
	mainTitle: {
		fontSize: '46px',
		lineHeight: '110%',
		[theme.breakpoints.down('xs')]: {
			fontSize: '30px'
		}
	},
	subTitle: {
		fontSize: '24px',
		lineHeight: '150%',
		fontWeight: '600',
		color: '#fb4469',
		[theme.breakpoints.down('xs')]: {
			fontSize: '30px'
		}
	},
	period: {
		color: '#fb4469',
		fontFamily: 'open-sans'
	},
	wrenches: {
		position: 'relative',
		padding: '0 10px'
	}
});

class Banner extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<div className={classes.content}>
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
			</div>
		);
	}
}

Banner.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
