import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import LinkNoStyle from '../linknostyle/linknostyle';

const styles = theme => ({
	btn: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 500
	}
});

class ButtonBar extends React.Component {
	render() {
		const { classes, isMobile } = this.props;

		const PoppinLink = ({ to, ...props }) =>
			<LinkNoStyle to={to}>
				<Button fullWidth={isMobile} className={classes.btn} {...props} />
			</LinkNoStyle>;

		return (
			<React.Fragment>
				<PoppinLink to="/">
					Home
				</PoppinLink>
				<PoppinLink to="/blog">
					Blog
				</PoppinLink>
				<PoppinLink to="/events">
					Events
				</PoppinLink>
				<PoppinLink to="/team">
					Team
				</PoppinLink>
				<PoppinLink>
					Contact
				</PoppinLink>
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
