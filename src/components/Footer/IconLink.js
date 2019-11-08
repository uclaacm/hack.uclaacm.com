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

function IconLink({ classes, icon: Icon, link }) {
	return (
		<Link href={link} target="_blank" rel="noopener noreferrer">
			<IconButton>
				<Icon className={classes.icon} />
			</IconButton>
		</Link>
	);
}

IconLink.propTypes = {
	classes: PropTypes.object.isRequired,
	link: PropTypes.string.isRequired,
	icon: PropTypes.elementType.isRequired
};

export default withStyles(styles)(IconLink);
