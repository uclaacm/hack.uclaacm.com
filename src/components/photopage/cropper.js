import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const cropperWidth = '200px';
const styles = {
	// this cropper only crops landscape-oriented/square image
	cropper: {
		width: cropperWidth,
		height: cropperWidth,
		borderRadius: '50%',
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center'
	},
	photo: {
		margin: '0 auto',
		height: '100%'
	}
};

/**
 * Cropper takes an image URL and crop it
 * to a circle with radius `cropperWidth`.
 */
function Cropper({ classes, photoURL }) {
	return (
		<div className={classes.cropper}>
			<img src={photoURL} className={classes.photo} />
		</div>
	);
}

Cropper.propTypes = {
	classes: PropTypes.object.isRequired,
	photoURL: PropTypes.string.isRequired
};

export default withStyles(styles)(Cropper);
