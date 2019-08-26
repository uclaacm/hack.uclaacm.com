
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles, useMediaQuery } from '@material-ui/core';

import EventCardGridItem from './eventcardgriditem';
import { useTheme } from '@material-ui/styles';

const cardWidth = 260;
const cardMarginScale = 2;

const numCardFittingIn = (totalWidth, cardWidthWithMargin) => {
	const numCardFitted = Math.floor(totalWidth / cardWidthWithMargin);
	// we want to at least contain one card even if screen is too small
	return numCardFitted === 0 ? 1 : numCardFitted;
};

const useCustomGridMaxWidth = numEvents => {
	const theme = useTheme();
	const cardMargin = theme.spacing(cardMarginScale);
	const cardWidthWithMargin = cardMargin * 2 + cardWidth;
	const isWidthXS = useMediaQuery(theme.breakpoints.only('xs'));
	const isWidthSM = useMediaQuery(theme.breakpoints.only('sm'));
	const isWidthMD = useMediaQuery(theme.breakpoints.only('md'));
	const isWidthLG = useMediaQuery(theme.breakpoints.only('lg'));
	const isWidthXL = useMediaQuery(theme.breakpoints.only('xl'));
	const isSize = {
		xs: isWidthXS, sm: isWidthSM, md: isWidthMD, lg: isWidthLG, xl: isWidthXL
	};

	let numCard = 1;

	for (const key in isSize) {
		if (!isSize[key]) {
			continue;
		}
		// Calculate how many cards can fit in a row for a certain screen width.
		// The screen width are provided by material-UI.
		const numCardTheoritically =
			numCardFittingIn(theme.breakpoints.values[key], cardWidthWithMargin);
		numCard = numCardTheoritically;
	}

	// If the number of events is lower than what we can fit in each row,
	// we size the container to just contain that many cards
	return `${Math.min(numCard, numEvents) * cardWidthWithMargin}px`;
};

const styles = theme => {
	return {
		container: {
			// self centered
			margin: '0 auto'
		},
		item: {
			width: `${cardWidth}px`,
			height: '420px',
			margin: theme.spacing(cardMarginScale)
		}
	};
};

function EventList({ events, classes }) {
	const eventlistMaxWidth = useCustomGridMaxWidth(events.length);
	const eventCards = events.map(e =>
		<EventCardGridItem
			key={e.name}
			className={classes.item}
			event={e}
		/>);

	// For each screen size, we set the width of the container
	// to just fit all the cards in one row. Fixing container's width so
	// its size is not 100% of parents. Therefore, we can center it using
	// margin auto.
	return (
		<Grid
			container
			justify="flex-start"
			style={{ maxWidth: eventlistMaxWidth }}
			className={classes.container}
		>
			{eventCards}
		</Grid>
	);
}

EventList.propTypes = {
	events: PropTypes.arrayOf(Object).isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventList);
