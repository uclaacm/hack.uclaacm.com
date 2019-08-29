import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import EventAvailableIcon from '@material-ui/icons/EventAvailableTwoTone';
import { withStyles } from '@material-ui/core';

import eventsData from '../../data/events/events';
import EventList from '../eventlist/eventlist';
import AnchorTarget from '../anchortarget/anchortarget';
import EmptyEventMessage from '../emptyeventmessage/emptyeventmessage';
import EventHighLight from '../eventhighlight/eventhighlight';

const eventsIntro = `
	Hack offers workshops that focus on practical application,
	such as web development and mobile development. We also host
	fun one-time activity such as UCLA's biggest beginner-friendly
	Hackathon Hack on the Hill. Regardless of background or
	experience, you can find an event that is just for you.
`;

const styles = theme => ({
	container: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4)
	},
	intro: {
		fontFamily: theme.typography.body1.fontFamily,
		marginBottom: theme.spacing(2)
	},
	eventIcon: {
		fontSize: 'inherit'
	},
	dividerDiv: {
		padding: theme.spacing(10, 0)
	},
	headline: {
		// fontFamily: theme.typography.fontFamily,
		fontWeight: 500,
		margin: theme.spacing(3, 0),
		// to align inline Icon with text
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end'
	}
});

/**
 * @returns events that has passed.
 * Past is defined as happened before today.
 * Meaning, if an event was today at 2pm but it is 5pm,
 * the event is NOT considered "past".
 */
const getPastEvents = events => {
	const today = moment().hour(0).minute(0).second(0);
	return events.filter(event => moment(event.date) < today);
};

function EventPage({ classes }) {
	const pastEvents = getPastEvents(eventsData);
	// pastEvents are references to the same object
	// therefore we can use indexOf.
	const futureEvents = eventsData.filter(x =>
		pastEvents.indexOf(x) === -1);

	const futureEventComponent = futureEvents.length === 0 ?
		<EmptyEventMessage /> :
		<EventList events={futureEvents} />;

	const pastEventComponent = pastEvents.length === 0 ?
		null :
		<>
			<Typography variant="h4" className={classes.headline}>
				<EventIcon fontSize="large" /> Past
			</Typography>
			<EventList events={pastEvents} />;
		</>;

	return (
		<>
		{/* Textual Introduction and Event Highlight */}
		<Container maxWidth="md" className={classes.container} component="article">
			<Typography variant="h2" className={classes.headline}>
				HackEvents
				<Typography display="inline" variant="h3" component="span" color="primary">™</Typography>
			</Typography>
			<Typography variant="h6" classes={{ root: classes.intro }}>
				{eventsIntro}
			</Typography>

			<EventHighLight />
		</Container>

		<div className={classes.dividerDiv}>
			<Typography variant="h3" align="center" gutterBottom>
				{`Can't wait to`}
				<Box color="primary.main" component="span">
					{` hack `}
				</Box>
				{`with us?`}
			</Typography>
			<Typography variant="h5" align="center">
				See our event schedule 📅
			</Typography>
		</div>

		<article>
			<AnchorTarget anchorId="upcoming" />
			{/* Upcoming events */}
			<section>
				<Typography variant="h3" className={classes.headline} color="textPrimary">
					<EventAvailableIcon color="primary" className={classes.eventIcon} /> Upcoming
				</Typography>
				{futureEventComponent}
			</section>
			{/* Past events */}
			<section>
				{pastEventComponent}
			</section>
		</article>
		</>
	);
}

EventPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPage);
