import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import hackLogoURL from '../../images/acm-hack-logo.svg';

const styles = theme => ({
	container: {
		backgroundColor: '#ffffff',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto'
	},
	content: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column'
		},
		flexDirection: 'row-reverse',
		alignItems: 'center',
		margin: '20px auto 20px',
		padding: '0 20px',
		maxWidth: '670px'
	},
	text: {
		display: 'inline-block',
		maxWidth: '77%',
		[theme.breakpoints.down('xs')]: {
			maxWidth: '100%',
			paddingLeft: '20px',
			paddingRight: '20px'
		},
		fontFamily: ['Poppins', 'sans-serif']
	},
	title: {
		fontSize: '32px',
		textAlign: 'center',
		fontWeight: 'bold',
		padding: '6px'
	},
	description: {
		lineHeight: '140%',
		fontSize: '15px'
	},
	background: {
		width: '100%',
		overflowX: 'hidden',
		position: 'absolute'
	},
	logo: {
		width: 120
	}
});

const hackDescription = 'We are a student-run organization that aims ' +
'to empower UCLA students to influence their world through code. ' +
'We host events for coders of all skills levels. So whether you\'ve ' +
'been to 10 hackathons, or you just learned, "Hello World," we\'re happy to have you.';

class HackDescription extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<div className={classes.content}>
					<img className={classes.logo} src={hackLogoURL}/>
					<div className={classes.text}>
						<div className={classes.title}>What is Hack?</div>
						<div className={classes.description}>{hackDescription}</div>
					</div>
				</div>
			</div>
		);
	}
}

HackDescription.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HackDescription);
