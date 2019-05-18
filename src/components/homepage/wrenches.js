import React from 'react';
import PropTypes from 'prop-types';
import bigWrenches from './big_banner_wrenches.svg';
import smallWrenches from './small_banner_wrenches.svg';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	bigWrench: {
		width: '53vw',
		left: '5%',
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	},
	smallWrench: {
		width: '21vw',
		marginLeft: '7vw',
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			display: 'block'
		}
	}
});

class Wrenches extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<img className={classes.bigWrench} src={bigWrenches}/>
				<img className={classes.smallWrench} src={smallWrenches}/>
			</React.Fragment>
		);
	}
}

Wrenches.propTypes = {
	classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Wrenches);
