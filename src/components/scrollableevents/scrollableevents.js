import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import EventCard from '../eventcard/eventcard';

const styles = theme => ({
	container: {
		overflowX: 'scroll'
	},
	gridList: {
		// this -2 margin removes:
		// 1. the left margin of the first child element
		// 2. the right margin of the last child element
		// such that the item's border is aligned with parent
		margin: theme.spacing(0, -2),
		// This psuedo element appends some space after all the events,
		// since we cannot use margin on a overflew flex
		'&:after': {
			content: '""',
			width: theme.spacing(1),
			flex: '0 0 auto'
		}
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
		<Grid item key={e.name} className={classes.item}>
			<EventCard {...e} />
		</Grid>);

	return (
		<Container classes={{ root: classes.container }} maxWidth="md">
			<Grid
				container
				wrap="nowrap"
				justify="space-between"
				classes={{ root: classes.gridList }}
			>
				{eventCards}
			</Grid>
		</Container>
	);
}

ScrollableEvents.propTypes = {
	classes: PropTypes.object.isRequired,
	events: PropTypes.arrayOf(Object).isRequired
};

export default withStyles(styles)(ScrollableEvents);
