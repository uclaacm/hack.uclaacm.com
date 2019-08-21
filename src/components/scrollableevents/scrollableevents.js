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
			<Grid container wrap="nowrap">
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
