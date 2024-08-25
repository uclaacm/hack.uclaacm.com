import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import LinkNoStyle from '../LinkNoStyle/LinkNoStyle';

const styles = theme => ({
	link: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 500,
		margin: '0px 13px',
		position: 'relative',
		textDecoration: 'none',
		color: 'black',
		'&::after': {
			content: '""',
			position: 'absolute',
			left: '0',
			bottom: '-5px',
			width: '100%',
			height: '2px',
			backgroundColor: theme.palette.primary.dark,
			transform: 'scaleX(0)',
			transformOrigin: 'bottom right',
			transition: 'transform 0.3s ease-in-out'
		},
		'&:hover::after': {
			transform: 'scaleX(1)',
			transformOrigin: 'bottom left'
		}
	},
	mobileLink: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 500,
		margin: '25px 0px 0px',
		textAlign: 'center',
		color: 'black'
	},
	applyButton: {
		fontFamily: theme.typography.fontFamily,
		backgroundColor: theme.palette.primary.main,
		marginLeft: props => props.isMobile ? '0px' : '25px',
		padding: '7px 20px',
		borderRadius: '20px',
		color: 'white',
		'&:hover': {
			backgroundColor: theme.palette.primary.light
		}
	}
});

class ButtonBar extends React.Component {
	render() {
		const { classes, isMobile } = this.props;

		// eslint-disable-next-line react/prop-types
		const PoppinLink = ({ to, ...props }) =>
			!isMobile ?
				<LinkNoStyle fullWidth={isMobile} to={to} className={classes.link} {...props} /> :
				<LinkNoStyle fullWidth={isMobile} to={to} className={classes.mobileLink} {...props} />;

		// eslint-disable-next-line react/prop-types
		const ApplyButton = ({ to, ...props }) =>
			<LinkNoStyle to={to}>
				<Button fullWidth={isMobile} className={classes.applyButton} {...props} />
			</LinkNoStyle>;

		return (
			<React.Fragment>
				<PoppinLink to="/">
					Home
				</PoppinLink>
				<PoppinLink to="/about">
					About
				</PoppinLink>
				<PoppinLink to="/events">
					Events
				</PoppinLink>
				<PoppinLink to="/blog">
					Blog
				</PoppinLink>
				<PoppinLink to="/archive" style={isMobile ? { margin: '25px 0px 25px' } : null}>
					Archive
				</PoppinLink>
				{/* TODO: finish Contact page. @lea */}
				{/* <PoppinLink>
					Contact
				</PoppinLink> */}
				<ApplyButton to="https://www.uclaacm.com/internship">Apply</ApplyButton>
			</React.Fragment>
		);
	}
}

ButtonBar.propTypes = {
	classes: PropTypes.object.isRequired,
	isMobile: PropTypes.bool.isRequired
};

ButtonBar.defaultProps = {
	isMobile: false
};

export default withStyles(styles)(ButtonBar);
