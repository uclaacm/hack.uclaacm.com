import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Background from './background';
import HackLogo from './hacklogo';

const styles = () => ({
	container: {
		backgroundColor: '#ffffff',
		height: '45vw'
	},
	background: {
		width: '100%',
		position: 'relative'
	},
	logo: {
		position: 'absolute'
	}
});

class FrontPage extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Background className={classes.background}/>
				<HackLogo className={classes.logo}/>
				<div> What is Hack? </div>
				<div> Insert Description here </div>
			</div>
		);
	}
}

FrontPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FrontPage);
