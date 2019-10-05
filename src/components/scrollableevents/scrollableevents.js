import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import EventCard from '../eventcard/eventcard';

const styles = theme => ({
	container: {
		marginLeft: theme.spacing(-2),
		marginRight: theme.spacing(-2),
		overflowX: 'auto',
		// This enables momentum scrolling on iOS.
		// Read more about it in this link:
		// https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling
		'-webkit-overflow-scrolling': 'touch'
	},
	item: {
		position: 'relative',
		width: '260px',
		height: '420px',
		margin: theme.spacing(2),
		// no grow and no shrink, meaning the component will stay the same width
		flex: '0 0 auto'
	}
});

function ScrollableEvents({
	classes,
	events
}) {
	const eventCards = events.map(e =>
		<Grid item key={e.id} className={classes.item}>
			<EventCard {...e} />
		</Grid>);

	return (
		<div className={classes.container}>
			<Grid
				container
				wrap="nowrap"
				justify="space-between"
				classes={{ root: classes.gridList }}
			>
				{eventCards}
			</Grid>
		</div>
	);
}

ScrollableEvents.propTypes = {
	classes: PropTypes.object.isRequired,
	events: PropTypes.arrayOf(Object).isRequired
};

export default withStyles(styles)(ScrollableEvents);
