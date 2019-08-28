import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import EventAvailableIcon from '@material-ui/icons/EventAvailableTwoTone';

import ScrollableEvents from '../scrollableevents/scrollableevents';
import events from '../../data/events/events';
import LinkNoStyle from '../linknostyle/linknostyle';
import EmptyEventMessage from '../emptyeventmessage/emptyeventmessage';

const styles = theme => ({
	container: {
		marginTop: theme.spacing(2)
	},
	eventHeaderTitle: {
		// fontSize: theme.typography.fontSize * 2,
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		// align icon with text
		display: 'flex',
		alignItems: 'center'
	},
	eventIcon: {
		marginRight: theme.spacing(1)
	},
	viewAllBtn: {
		margin: theme.spacing(2, 0)
	},
	btnIcon: {
		fontSize: theme.typography.fontSize * 0.75,
		marginLeft: theme.spacing(1)
	}
});

function HomePageEvent({
	classes
}) {
	const topEvents = events.slice(0, 3);
	return (
		<React.Fragment>
			<Container maxWidth="md" classes={{ root: classes.container }}>
				<Typography
					variant="h4"
					classes={{ root: classes.eventHeaderTitle }}
				>
					<EventAvailableIcon fontSize="large" color="primary" classes={{ root: classes.eventIcon }}/>
					Events
				</Typography>
				<LinkNoStyle to="/events#upcoming">
					<Button variant="outlined" size="medium" classes={{ root: classes.viewAllBtn }}>
						View all events
						<ArrowForwardIcon classes={{ root: classes.btnIcon }}/>
					</Button>
				</LinkNoStyle>
			</Container>
			{topEvents.length === 0 ?
				<EmptyEventMessage /> :
				<ScrollableEvents events={topEvents} />
			}
		</React.Fragment>
	);
}

HomePageEvent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePageEvent);
