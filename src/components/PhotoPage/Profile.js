import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Cropper from './Cropper';

const styles = theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	caption: {
		textAlign: 'center'
	},
	name: {
		fontFamily: theme.typography.body1.fontFamily,
		fontSize: theme.typography.fontSize * 1.5,
		margin: theme.spacing(1)
	},
	role: {
		fontFamily: theme.typography.body1.fontFamily,
		fontSize: theme.typography.fontSize * 1.2,
		margin: theme.spacing(1)
	},
	description: {
		fontFamily: theme.typography.body1.fontFamily,
		fontSize: theme.typography.fontSize,
		fontWeight: 'lighter',
		margin: theme.spacing(1),
		textAlign: 'center'
	}
});

function Profile({ classes, name, role, description, imageFixed }) {
	return (
		<figure className={classes.container}>
			<Cropper imageFixed={imageFixed} />
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
	imageFixed: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
