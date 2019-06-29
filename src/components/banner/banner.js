import React from 'react';
import banner from './banner.svg';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	container: {
		position: 'relative'
	},
	title: {
		position: 'absolute',
		right: theme.spacing(9.375),
		top: theme.spacing(15.625),
		textAlign: 'right',
		color: 'white',
		fontFamily: ['Poppins', 'sans-serif'],
		fontWeight: 'bold'
	},
	mainTitle: {
		fontSize: theme.typography.fontSize * 6,
		lineHeight: `${theme.typography.fontSize * 6}px`
	},
	subTitle: {
		fontSize: theme.typography.fontSize * 3,
		lineHeight: `${theme.typography.fontSize * 3}px`
	},
	banner: {
		maxWidth: '100%'
	}
});

class Banner extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<img className={classes.banner} src={banner}/>
				<div className={classes.title}>
					<div className={classes.mainTitle}>Move Fast.</div>
					<div className={classes.mainTitle}>Build Things.</div>
					<div className={classes.subTitle}>Start Hacking.</div>
				</div>
			</div>
		);
	}
}

Banner.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);
