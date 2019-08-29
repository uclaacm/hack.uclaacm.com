import React from 'react';
import PropTypes from 'prop-types';
import { Grid, useMediaQuery, Container, Typography } from '@material-ui/core';
import { useTheme, withStyles } from '@material-ui/styles';
import classNames from 'classnames';

import highlightEvents from '../../data/events/highlights';

const styles = theme => ({
	container: {
		borderRadius: theme.shape.borderRadius * 2
	},
	gridItem: {
		margin: theme.spacing(2, 0)
	},
	gridItemLeft: {
		paddingRight: theme.spacing(2)
	},
	gridItemRight: {
		paddingLeft: theme.spacing(2)
	},
	image: {
		width: '100%',
		boxShadow: theme.shadows[10],
		borderRadius: theme.shape.borderRadius * 2
	}
});

function EventHighLight({ classes }) {
	const theme = useTheme();
	// This boolean allow the layout to change flexibly.
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const eventRows = highlightEvents.map((event, idx) =>
		<Grid
			key={event.name}
			container
			// Determine if image is on the left or on the right
			// based on array index. This alternates.
			direction={idx % 2 === 0 || isSmallScreen ? 'row' : 'row-reverse'}
		>
			<Grid
				container
				item
				sm={12}
				md={6}
				alignItems="center"
				classes={{ root:
					classNames(
						{
							[classes.gridItemLeft]: idx % 2 === 0 && !isSmallScreen,
							[classes.gridItemRight]: idx % 2 === 1 && !isSmallScreen
						},
						classes.gridItem
					) }}
			>
				<Grid item>
					<img src={event.imgURL} className={classes.image} />
				</Grid>
			</Grid>
			<Grid
				container
				item
				sm={12}
				md={6}
				alignItems="center"
				classes={{ root:
					classNames(
						{
							[classes.gridItemRight]: idx % 2 === 0 && !isSmallScreen,
							[classes.gridItemLeft]: idx % 2 === 1 && !isSmallScreen
						},
						classes.gridItem
					) }}
			>
				<Grid item>
					<Typography variant="h4" gutterBottom>
						{event.name}
					</Typography>
					<Typography variant="body1">
						{event.description}
					</Typography>
				</Grid>
			</Grid>
		</Grid>);

	return (
		<Container maxWidth="md">
			{eventRows}
		</Container>
	);
}

EventHighLight.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventHighLight);
