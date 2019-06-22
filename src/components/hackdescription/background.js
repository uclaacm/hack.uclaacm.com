import React from 'react';
import PropTypes from 'prop-types';
import bigBackground from './big_background.svg';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	big: {
		marginLeft: '50%',
		transform: 'translate(-50%)'
	}
});

class Background extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<img className={classes.big} src={bigBackground}/>
			</div>
		);
	}
}

Background.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Background);
