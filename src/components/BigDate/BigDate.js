import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: 'fit-content'
	},
	month: {
		fontWeight: theme.typography.fontWeightBold
	},
	day: {
		fontSize: theme.typography.fontSize * 24 / 16,
		fontWeight: theme.typography.fontWeightLight,
		lineHeight: 0.8
	}
}));

function BigDate({ date }) {
	const classes = useStyles();
	const dateObj = dayjs(date);
	const month = dateObj.format('MMM');
	const day = dateObj.format('D');
	return (
		<div className={classes.container}>
			<Typography variant="body1" classes={{ root: classes.month }} color="secondary" component="span">
				{month}
			</Typography>
			<Typography variant="body1" classes={{ root: classes.day }} component="span">
				{day}
			</Typography>
		</div>
	);
}

BigDate.propTypes = {
	date: PropTypes.string.isRequired
};

export default BigDate;
