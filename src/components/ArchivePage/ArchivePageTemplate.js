import React from 'react';
import { Container, Typography } from '@material-ui/core';
import EventInfoItem from './EventInfoItem';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4)
	},
	quarterItem: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	},
	quarterEvents: {
		padding: theme.spacing(2, 0)
	}
}));

function sortByQuarter(first, second) {
	const firstEventName = first.parent.childYaml.name;
	const secondEventName = second.parent.childYaml.name;

	const firstEventDate = first.parent.childYaml.quarter;
	const secondEventDate = second.parent.childYaml.quarter;

	const [firstEventQuarter, firstEventYear] = firstEventDate.split(' ');
	const [secondEventQuarter, secondEventYear] = secondEventDate.split(' ');

	const quarterOrder = ['Winter', 'Spring', 'Summer', 'Fall'];

	if (firstEventYear === secondEventYear) {
		if (firstEventQuarter === secondEventQuarter) {
			return firstEventName < secondEventName ? -1 : 1;
		}
		return quarterOrder.indexOf(secondEventQuarter) - quarterOrder.indexOf(firstEventQuarter);
	}
	return parseInt(secondEventYear) - parseInt(firstEventYear);
}

function getQuarterList(events) {
	const sortedQuarters = [];
	events.forEach(event => {
		const { quarter } = event.parent.childYaml;
		if (!sortedQuarters.includes(quarter)) {
			sortedQuarters.push(quarter);
		}
	});
	return sortedQuarters;
}

function getQuarterEvents(events) {
	const quarterEvents = {};
	events.forEach(event => {
		const { quarter } = event.parent.childYaml;
		if (quarterEvents[quarter] === undefined) {
			quarterEvents[quarter] = [];
		}
		quarterEvents[quarter].push(event.parent.childYaml);
	});
	return quarterEvents;
}

function ArchivePageTemplate() {
	const classes = useStyles();
	const pageQuery = useStaticQuery(graphql`
		query WorkshopArchiveQuery {
			allYaml(sort: {fields: quarter, order: DESC}) {
				nodes {
					parent {
						... on File {
							id
							childYaml {
								director
								name
								mainLink
								quarter
								tags
								workshops {
									name
									repo
									slides
									tags
									youtube
									presenter
								}
							}
						}
					}
				}
			}
		}
	`);
	const events = pageQuery.allYaml.nodes;
	events.sort(sortByQuarter);
	const sortedQuarterList = getQuarterList(events);
	const quarterEventsDict = getQuarterEvents(events);

	const quarterEvents = sortedQuarterList.map(quarter =>
		<div className={classes.quarterItem} key={quarter}>
			<Typography variant='h5'>{quarter}</Typography>
			<div className={classes.quarterEvents}>
				{quarterEventsDict[quarter].map(event =>
					<EventInfoItem
						key={event.name}
						name={event.name}
						mainLink={event.mainLink}
						tags={event.tags}
						director={event.director}
						workshops={event.workshops}
					/>)}
			</div>
		</div>);

	return <Container maxWidth="md" className={classes.container}>
		<Typography variant="h2" component="h1" gutterBottom align='center'>Workshop Archive</Typography>
		{quarterEvents}
	</Container>;
}

export default ArchivePageTemplate;
