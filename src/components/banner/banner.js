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
		maxWidth: theme.maxWidth,
		padding: '25px 0',
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			maxWidth: '370px',
			padding: '10px 0'
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
		fontSize: theme.typography.fontSize * 3.4,
		lineHeight: '1.1',
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize * 1.875
		}
	},
	subTitle: {
		fontSize: theme.typography.fontSize * 2,
		lineHeight: '1.5',
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
