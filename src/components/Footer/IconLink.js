import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const styles = theme => ({
	icon: {
		width: '30px',
		margin: theme.spacing(1.5)
	}
});

function IconLink({ classes, icon: Icon, link, ariaLabel }) {
	return (
		<Link href={link} target="_blank" rel="noopener noreferrer">
			<Icon className={classes.icon} aria-label={ariaLabel} />
		</Link>
	);
}

IconLink.propTypes = {
	classes: PropTypes.object.isRequired,
	link: PropTypes.string.isRequired,
	icon: PropTypes.elementType.isRequired,
	ariaLabel: PropTypes.string.isRequired
};

export default withStyles(styles)(IconLink);
