import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

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
		const PoppinBtn = props => <Button className={classes.btn} {...props} />;
		return (
			<React.Fragment>
				<PoppinBtn onClick={() => navigate('/')}>
					Home
				</PoppinBtn>
				<PoppinBtn>
					Blog
				</PoppinBtn>
				<PoppinBtn>
					Events
				</PoppinBtn>
				<PoppinBtn onClick={() => navigate('/team')}>
					Team
				</PoppinBtn>
				<PoppinBtn>
					Contact
				</PoppinBtn>
			</React.Fragment>
		);
	}
}

ButtonBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonBar);
