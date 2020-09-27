import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
	headline: {
		// fontFamily: theme.typography.fontFamily,
		fontWeight: 600,
		margin: theme.spacing(6, 0)
	}
});

function PageTitle({ classes, className, ...props }) {
	return <Typography variant="h2" component='h1' className={classNames(classes.headline, className)} {...props} />;
}

PageTitle.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	children: PropTypes.object // fix this
};
export default withStyles(styles)(PageTitle);


