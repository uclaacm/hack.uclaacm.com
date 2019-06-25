import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Cropper from './cropper';

const styles = theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing.unit * 2.75
	},
	caption: {
		textAlign: 'center'
	},
	name: {
		fontFamily: ['Chivo', 'sans-serif'],
		fontSize: theme.typography.fontSize * 1.5,
		margin: theme.spacing.unit,
		// prevent long names from wrapping
		whiteSpace: 'nowrap'
	},
	role: {
		fontFamily: ['Chivo', 'sans-serif'],
		fontSize: theme.typography.fontSize * 1.2,
		margin: theme.spacing.unit,
		// prevent long roles from wrapping
		whiteSpace: 'nowrap'
	},
	description: {
		fontFamily: ['Chivo', 'sans-serif'],
		fontSize: theme.typography.fontSize,
		fontWeight: 'lighter',
		margin: theme.spacing.unit,
		textAlign: 'center'
	}
});

function Profile({ classes, name, role, description, photoURL }) {
	return (
		<figure className={classes.container}>
			<Cropper photoURL={photoURL} />
			<figcaption className={classes.caption}>
				<p className={classes.name}>{name}</p>
				<p className={classes.role}>{role}</p>
				<p className={classes.description}>{description}</p>
			</figcaption>
		</figure>
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
