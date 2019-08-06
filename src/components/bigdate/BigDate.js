import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	container: {
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	day: {
		fontSize: theme.typography.fontSize * 24 / 16,
		fontWeight: theme.typography.fontWeightLight,
		lineHeight: 0.8
	}
});

function BigDate({ date, classes }) {
	const dateObj = moment(date);
	const month = dateObj.format('MMM');
	const day = dateObj.format('D');
	return (
		<div className={classes.container}>
			<Typography variant="body1" color="secondary" component="span">
				{month}
			</Typography>
			<Typography variant="body1" classes={{ root: classes.day }} component="span">
				{day}
			</Typography>
		</div>
	);
}

BigDate.propTypes = {
	date: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BigDate);
