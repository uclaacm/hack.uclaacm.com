import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	btn: {
		fontFamily: ['Poppins', 'sans-serif'],
		fontWeight: 500
	}
});

class ButtonBar extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<Button className={classes.btn}>Home</Button>
				<Button className={classes.btn}>Blog</Button>
				<Button className={classes.btn}>Team</Button>
				<Button className={classes.btn}>Contact</Button>
			</React.Fragment>
		);
	}
}

ButtonBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonBar);
