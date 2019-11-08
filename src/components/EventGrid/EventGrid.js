import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby';

import EventCard from '../eventcard/eventcard';

const cardWidth = 260;

const styles = theme => ({
	container: {
		display: 'grid',
		gridTemplateColumns: `repeat(auto-fit, minmax(${cardWidth}px, 1fr))`,
		rowGap: `${theme.spacing(3)}px`,
		columnGap: `${theme.spacing(3)}px`
	},
	item: {
		width: `${cardWidth}px`,
		height: '420px',
		// center itself in the div instead of streching
		margin: '0 auto'
	}
});


function EventGrid({ events, classes }) {
	const eventCards = events.map(e =>
		<div key={e.id}>
			<div className={classes.item}>
				<EventCard {...e} />
			</div>
		</div>);
	return (
		<div className={classes.container}>
			{eventCards}
		</div>
	);
}

EventGrid.propTypes = {
	events: PropTypes.arrayOf(Object).isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventGrid);

export const query = graphql`
	fragment HackEventForEventGrid on HackEvent {
		id
		...HackEventForEventCard
	}
`;
