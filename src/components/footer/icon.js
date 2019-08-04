import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

const styles = () => ({
	icon: {
		width: '30px'
	}
});

class IconLink extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Link href={this.props.link} target="_blank" rel="noopener noreferrer">
				<IconButton>
					<img className={classes.icon} src={this.props.icon} />
				</IconButton>
			</Link>

		);
	}
}

IconLink.propTypes = {
	classes: PropTypes.object.isRequired,
	link: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default withStyles(styles)(IconLink);
