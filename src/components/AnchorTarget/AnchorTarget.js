import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
	anchor: {
		display: 'block',
		position: 'relative',
		// This makes the anchor tag not stick to the top
		// of the viewport. Therefore, it will not get
		// blocked by the header menubar.
		top: theme.spacing(-10),
		visibility: 'hidden'
	}
});

function AnchorTarget({ anchorId, classes }) {
	return (
		<a
			id={anchorId}
			className={classes.anchor}
		/>
	);
}

AnchorTarget.propTypes = {
	anchorId: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AnchorTarget);
