import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import hackLogoURL from '../../images/acm-hack-logo.svg';

const styles = theme => ({
	container: {
		backgroundColor: '#ffffff',
		padding: theme.spacing(2, 0)
	},
	content: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row-reverse',
		alignItems: 'center'
	},
	description: {
		width: '90%',
		[theme.breakpoints.down('xs')]: {
			width: '100%'
		},
		textAlign: 'justify'
	},
	title: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		margin: theme.spacing(2, 0)
	},
	logo: {
		width: 150,
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	}
});

const hackDescription = `We are a student-run organization that aims to empower
UCLA students to influence their world through code. We host events for coders
of all skills levels. So whether you've been to 10 hackathons, or you just
learned, "Hello World," we're happy to have you.`;

class HackDescription extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Container maxWidth="md" classes={{ root: classes.content }}>
					{/* For some reason, if we inline the SVG, Chrome shows it as much smaller
					  * than the prescribed CSS width. Same goes if try to use SVGImg. Works in
					  * Firefox though. */}
					<img className={classes.logo} src={hackLogoURL} />
					<div>
						<div className={classes.description}>
							<Typography variant="h4" classes={{ root: classes.title }}>What is Hack?</Typography>
							<Typography variant="body1">{hackDescription}</Typography>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

HackDescription.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HackDescription);
