
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

import EventCard from '../eventcard/eventcard';

const numCardFittingIn = (totalWidth, cardWidth) => {
	const numCardFitted = Math.floor(totalWidth / cardWidth);
	return numCardFitted === 0 ? 1 : numCardFitted;
};

const styles = theme => {
	const cardMargin = theme.spacing(2);
	const cardWidth = 260;
	const cardWidthWithMargin = cardMargin * 2 + cardWidth;
	const numCardsForEachSize = theme.breakpoints.keys.map(widthKey =>
		numCardFittingIn(theme.breakpoints.values[widthKey], cardWidthWithMargin));
	const conatinerWidths = {};
	theme.breakpoints.keys.forEach((key, idx) => {
		conatinerWidths[theme.breakpoints.only(key)] = {
			width: `${numCardsForEachSize[idx] * cardWidthWithMargin}px`
		};
	});
	return {
		container: {
			...conatinerWidths,
			// self centered
			margin: '0 auto'
		},
		item: {
			width: `${cardWidth}px`,
			height: '420px',
			margin: cardMargin
		}
	};
};

function EventList({ events, classes }) {
	const eventCards = events.map(e =>
		<Grid item key={e.name} className={classes.item}>
			<EventCard {...e} />
		</Grid>);

	return (
		<Grid container justify="flex-start" className={classes.container}>
			{eventCards}
		</Grid>
	);
}

EventList.propTypes = {
	events: PropTypes.arrayOf(Object).isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventList);
