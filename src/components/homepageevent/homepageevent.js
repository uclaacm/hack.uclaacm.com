import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import ScrollableEvents from '../scrollableevents/scrollableevents';
import events from '../../data/events/events';

const styles = theme => ({
	container: {
		marginTop: theme.spacing(2)
	},
	eventHeaderTitle: {
		fontSize: theme.typography.fontSize * 2,
		fontFamily: ['Poppins', 'sans-serif'],
		fontWeight: 'bold'
	}
});

function HomePageEvent({
	classes
}) {
	return (
		<React.Fragment>
			<Container maxWidth="md" classes={{ root: classes.container }}>
				<Typography
					variant="h2"
					classes={{ root: classes.eventHeaderTitle }}
					gutterBottom
				>
					Upcoming Events
				</Typography>
			</Container>
			<ScrollableEvents events={events.slice(0, 3)} />
		</React.Fragment>
	);
}

HomePageEvent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePageEvent);
