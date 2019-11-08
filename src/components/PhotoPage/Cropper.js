import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';

// This cropper only crops landscape-oriented/square image.
const styles = {
	cropper: {
		borderRadius: '50%',
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center'
	}
};

/**
 * Cropper takes an imageFixed object for use with gatsby-image, and crops it
 * to a circle. The diameter of the circle is controlled by the image.
 */
function Cropper({ classes, imageFixed }) {
	return (
		<div className={classes.cropper}>
			<Img fixed={imageFixed} />
		</div>
	);
}

Cropper.propTypes = {
	classes: PropTypes.object.isRequired,
	imageFixed: PropTypes.object.isRequired
};

export default withStyles(styles)(Cropper);
