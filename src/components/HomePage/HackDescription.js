import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import hackLogoURL from '../../images/acm-hack-logo.svg';
import SVGImg from '../SvgImg';

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
		textAlign: 'justify',
		flexBasis: '80%',
		flexGrow: 1
	},
	title: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		margin: theme.spacing(2, 0)
	},
	logo: {
		flexBasis: '15%',
		marginLeft: theme.spacing(8),
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	}
});

const hackDescription = `We are a student-run organization whose mission is to
empower the community by providing the means to build amazing things and explore
what is possible through code. We teach quarterly workshops and host events for
students to expand their knowledge and apply their creativity to projects. Our
events are for coders of all skills levels, so whether you've been to 10 hackathons
 or you just learned "Hello World," we're happy to have you.`;

class HackDescription extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Container maxWidth="md" classes={{ root: classes.content }}>
					<SVGImg src={hackLogoURL} width={350} height={350} className={classes.logo} />
					<div className={classes.description}>
						<Typography variant="h4" classes={{ root: classes.title }}>
							What is Hack?
						</Typography>
						<Typography variant="body1">{hackDescription}</Typography>
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
