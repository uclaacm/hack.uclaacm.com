import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import hacklogo from './hacklogo.svg';

const styles = () => ({
	bigLogo: {
		width: '10vw',
		marginTop: '14vw',
		marginLeft: '63vw'
	}
});

class HackLogo extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<img className={classes.bigLogo} src={hacklogo}/>
		);
	}
}

HackLogo.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HackLogo);
