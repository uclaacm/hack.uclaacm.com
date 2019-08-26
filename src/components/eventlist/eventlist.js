
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

import EventCardGridItem from './eventcardgriditem';

const numCardFittingIn = (totalWidth, cardWidth) => {
	const numCardFitted = Math.floor(totalWidth / cardWidth);
	// we want to at least contain one card even if screen is too small
	return numCardFitted === 0 ? 1 : numCardFitted;
};

const styles = theme => {
	const cardMargin = theme.spacing(2);
	const cardWidth = 260;
	const cardWidthWithMargin = cardMargin * 2 + cardWidth;

	// Calculate how many cards can fit in a certain screen size.
	// The screen size are provided by material-UI
	const numCardsForEachSize = theme.breakpoints.keys.map(widthKey =>
		numCardFittingIn(theme.breakpoints.values[widthKey], cardWidthWithMargin));

	// for each screen size, we set the width of the container
	// to just fit all the cards. Fixing container's width so
	// its size is not 100% of parents. Therefore, we can center
	// it using margin auto.
	// We uses maxWidth since parent container can impose a size
	// limit that we do not want to overthrow.
	const conatinerWidths = {};
	theme.breakpoints.keys.forEach((key, idx) => {
		conatinerWidths[theme.breakpoints.only(key)] = {
			maxWidth: `${numCardsForEachSize[idx] * cardWidthWithMargin}px`
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
		<EventCardGridItem
			key={e.name}
			className={classes.item}
			event={e}
		/>);

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
