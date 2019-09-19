import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import bigWrenches from './big_banner_wrenches.svg';
import smallWrenches from './small_banner_wrenches.svg';

const styles = theme => ({
	container: {
		backgroundColor: theme.palette.primary.dark,
		padding: theme.spacing(0, 4),
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing(0, 2)
		}
	},
	content: {
		display: 'flex',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'left',
		maxWidth: theme.breakpoints.values.md,
		padding: theme.spacing(3, 0),
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			maxWidth: '370px',
			padding: theme.spacing(1, 0)
		}
	},
	title: {
		position: 'absolute',
		right: '0px',
		textAlign: 'right',
		color: 'white',
		fontFamily: ['Poppins', 'sans-serif'],
		fontWeight: 'bold',
		minWidth: 'max-content'
	},
	mainTitle: {
		fontSize: theme.typography.fontSize * 3.4,
		lineHeight: 1.1,
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize * 1.875
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
	bigWrench: {
		width: '450px',
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	},
	smallWrench: {
		width: '120px',
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			display: 'block'
		}
	}
});

function Wrenches({ classes }) {
	return <div className={classes.wrenches}>
		<img className={classes.bigWrench} src={bigWrenches}/>
		<img className={classes.smallWrench} src={smallWrenches}/>
	</div>;
}

Wrenches.propTypes = {
	classes: PropTypes.object.isRequired
};

function Banner({ classes }) {
	const Period = () => <span className={classes.period}>.</span>;
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<Wrenches classes={classes} />
				<div className={classes.title}>
					<div className={classes.mainTitle}>Move Fast<Period /></div>
					<div className={classes.mainTitle}>Build Things<Period /></div>
					<div className={classes.subTitle}>Start Hacking<Period /></div>
				</div>
			</div>
		</div>
	);
}

Banner.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
