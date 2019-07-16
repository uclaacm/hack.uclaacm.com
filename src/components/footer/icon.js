import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	icon: {
		width: '30px'
	}
});

class Icon extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<a href={this.props.link}>
					<img className={classes.icon} src={this.props.icon} />
				</a>
			</React.Fragment>
		);
	}
}

Icon.propTypes = {
	classes: PropTypes.object.isRequired,
	link: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default withStyles(styles)(Icon);
