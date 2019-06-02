import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const cropperWidth = '200px';
const styles = theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing.unit * 2.75
	},
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
		display: 'inline',
		height: '100%',
		width: 'auto'
	},
	name: {
		fontFamily: ['Chivo', 'san-serif'],
		fontSize: theme.typography.fontSize * 1.5,
		fontWeight: 'normal',
		margin: theme.spacing.unit,
		// prevent long names from wrapping
		whiteSpace: 'nowrap'
	},
	role: {
		fontFamily: ['Chivo', 'san-serif'],
		fontSize: theme.typography.fontSize * 1.2,
		fontWeight: 'normal',
		margin: theme.spacing.unit,
		// prevent long roles from wrapping
		whiteSpace: 'nowrap'
	},
	description: {
		fontFamily: ['Chivo', 'san-serif'],
		fontSize: theme.typography.fontSize,
		fontWeight: 'lighter',
		margin: theme.spacing.unit,
		textAlign: 'center'
	}
});

function Profile({ classes, name, role, description, photoURL }) {
	return (
		<div className={classes.container}>
			<div className={classes.cropper}>
				<img src={photoURL} className={classes.photo}/>
			</div>
			<p className={classes.name}>{name}</p>
			<p className={classes.role}>{role}</p>
			<p className={classes.description}>{description}</p>
		</div>
	);
}

Profile.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	photoURL: PropTypes.string.isRequired
};

export default withStyles(styles)(Profile);
