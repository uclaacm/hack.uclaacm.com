import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

import hackLogoURL from '../../images/acm-hack-logo.svg';

const styles = theme => ({
	container: {
		marginTop: theme.spacing(4),
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column'
		},
		flexDirection: 'row-reverse',
		alignItems: 'center'
	},
	description: {
		margin: theme.spacing(2, 0),
		width: '90%',
		[theme.breakpoints.down('xs')]: {
			width: '100%'
		},
		textAlign: 'justify'
	},
	title: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold'
	},
	logo: {
		width: 150
	}
});

const hackDescription = `We are a student-run organization that aims
to empower UCLA students to influence their world through code.
We host events for coders of all skills levels. So whether you've
been to 10 hackathons, or you just learned, "Hello World," we're happy to have you.`;

class HackDescription extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Container maxWidth="md" classes={{ root: classes.container }}>
				<img className={classes.logo} src={hackLogoURL}/>
				<div>
					<Typography variant="h4" classes={{ root: classes.title }}>What is Hack?</Typography>
					<div className={classes.description}>
						<Typography variant="body1">{hackDescription}</Typography>
					</div>
				</div>
			</Container>

		);
	}
}

HackDescription.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HackDescription);
