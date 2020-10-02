import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	headline: {
		fontWeight: 600,
		margin: theme.spacing(6, 0)
	}
}));

function PageTitle({ className, ...props }) {
	const classes = useStyles();
	return <Typography variant="h2" component='h1' className={classNames(classes.headline, className)} {...props} />;
}

PageTitle.propTypes = {
	className: PropTypes.string
};

export default PageTitle;


