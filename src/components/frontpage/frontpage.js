import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Background from './background';
import HackLogo from './hacklogo';

const styles = () => ({
	container: {
		backgroundColor: '#ffffff',
		height: '45vw'
	},
	content: {
		positition: 'relative',
		display: 'inline-flex'
	},
	text: {
		position: 'absolute',
		marginTop: '12vw',
		marginLeft: '26vw',
		width: '33%',
		fontFamily: ['Poppins', 'sans-serif']
	},
	title: {
		marginTop: '1vw',
		fontSize: '3vw',
		textAlign: 'center'
	},
	description: {
		lineHeight: '110%',
		marginTop: '3vw',
		fontSize: '1.5vw'
	},
	background: {
		width: '100%',
		position: 'absolute'
	},
	logo: {
		position: 'relative'
	}
});

const hackDescription = 'We are a student-run organization that aims \
to empower UCLA students to influence their world through code. \
We host events for coders of all skills levels. So whether you\'ve \
been to 10 hackathons, or you just learned, "Hello World," we\'re happy to have you.';

class FrontPage extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<div className={classes.background}>
					<Background/>
				</div>
				<div className={classes.content}>
					<div className={classes.logo}>
						<HackLogo/>
					</div>
					<div className={classes.text}>
						<div className={classes.title}> What is Hack? </div>
						<div className={classes.description}>{hackDescription}</div>
					</div>
				</div>
			</div>
		);
	}
}

FrontPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FrontPage);
