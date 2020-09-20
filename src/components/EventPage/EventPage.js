import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import EventAvailableIcon from '@material-ui/icons/EventAvailableTwoTone';
import { withStyles } from '@material-ui/core';

import EventGrid from '../EventGrid/EventGrid';
import AnchorTarget from '../AnchorTarget/AnchorTarget';
import EmptyEventMessage from '../EmptyEventMessage/EmptyEventMessage';
import EventHighLight from '../EventHighlight/EventHighlight';

const eventsIntro = `
	Hack offers workshops that focus on practical application, such as web
	development and mobile development. We also host fun one-time activity such
	as UCLA's biggest beginner-friendly Hackathon Hack on the Hill. Regardless of
	background or experience, you can find an event that is just for you.
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
		margin: theme.spacing(6, 0),
		// to align inline Icon with text
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end'
	}
});

function EventPage({ classes }) {
	const data = useStaticQuery(graphql`
		{
			upcomingEvents: allHackEvent(sort: {fields: date}, filter: {past: {eq: false}}) {
				nodes {
					...HackEventForEventGrid
				}
			}
			pastEvents: allHackEvent(sort: {fields: date, order: DESC}, filter: {past: {eq: true}}) {
				nodes {
					...HackEventForEventGrid
				}
			}
		}
	`);

	const pastEvents = data.pastEvents.nodes;
	const upcomingEvents = data.upcomingEvents.nodes;

	const upcomingEventsElement = upcomingEvents.length === 0 ?
		<EmptyEventMessage /> :
		<EventGrid events={upcomingEvents} />;

	const pastEventsElement = pastEvents.length === 0 ?
		null :
		<EventGrid events={pastEvents} />;

	return <>
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

		<Container maxWidth="md" component="article" fixed>
			<AnchorTarget anchorId="upcoming" />

			{/* Upcoming events */}
			<section>
				<Typography variant="h3" className={classes.headline} color="textPrimary">
					<EventAvailableIcon color="primary" className={classes.eventIcon} /> Upcoming
				</Typography>
				{upcomingEventsElement}
			</section>

			{/* Past events */}
			{pastEvents.length === 0 ?
				null :
				<section>
					<Typography variant="h4" className={classes.headline}>
						<EventIcon fontSize="large" /> Past
					</Typography>
					{pastEventsElement}
				</section>
			}
		</Container>
	</>;
}

EventPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPage);
