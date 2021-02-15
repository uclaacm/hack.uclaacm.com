import React from 'react';
import { Container, Typography } from '@material-ui/core';
import EventInfoItem from './EventInfoItem';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import PageTitle from '../PageTitle/PageTitle';
import TagList from './TagList';
import HeadFooter from '../HeadFooter/HeadFooter';
import SEO from '../SEO';

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

// function sortByQuarter(first, second) {
// 	const firstEventName = first.parent.childYaml.name;
// 	const secondEventName = second.parent.childYaml.name;

// 	const firstEventDate = first.parent.childYaml.quarter;
// 	const secondEventDate = second.parent.childYaml.quarter;

// 	const [firstEventQuarter, firstEventYear] = firstEventDate.split(' ');
// 	const [secondEventQuarter, secondEventYear] = secondEventDate.split(' ');

// 	const quarterOrder = ['Winter', 'Spring', 'Summer', 'Fall'];

// 	if (firstEventYear === secondEventYear) {
// 		if (firstEventQuarter === secondEventQuarter) {
// 			return firstEventName < secondEventName ? -1 : 1;
// 		}
// 		return quarterOrder.indexOf(secondEventQuarter) - quarterOrder.indexOf(firstEventQuarter);
// 	}
// 	return parseInt(secondEventYear) - parseInt(firstEventYear);
// }

// function getQuarterList(events) {
// 	const sortedQuarters = [];
// 	events.forEach(event => {
// 		const { quarter } = event.parent.childYaml;
// 		if (!sortedQuarters.includes(quarter)) {
// 			sortedQuarters.push(quarter);
// 		}
// 	});
// 	return sortedQuarters;
// }

// function getQuarterEvents(events) {
// 	const quarterEvents = {};
// 	events.forEach(event => {
// 		const { quarter } = event.parent.childYaml;
// 		if (quarterEvents[quarter] === undefined) {
// 			quarterEvents[quarter] = [];
// 		}
// 		quarterEvents[quarter].push(event.parent.childYaml);
// 	});
// 	return quarterEvents;
// }

// // Add all workshop and event tags into an allTags array
// function getAllTags(events) {
// 	const allTags = [];
// 	events.forEach(event => {
// 		const { tags, workshops } = event.parent.childYaml;
// 		console.log(workshops);
// 		if (workshops) {
// 			workshops.forEach(workshop => {
// 				workshop.tags.forEach(tag => {
// 					if (!allTags.includes(tag)) {
// 						allTags.push(tag);
// 					}
// 				})
// 			});
// 		}
// 		tags.forEach(tag => {
// 			if (!allTags.includes(tag)) {  //NEEDS FIXING
// 				allTags.push(tag);
// 			}
// 		})
// 	});
// 	return allTags;
// }

function ArchivePageTemplate({ pageContext }) {
	const classes = useStyles();
	const { sortedQuarterList, quarterEventsDict, allTagsList } = pageContext;

	// const pageQuery = useStaticQuery(graphql`
	// 	query WorkshopArchiveQuery {
	// 		allYaml(sort: {fields: quarter, order: DESC}) {
	// 			nodes {
	// 				parent {
	// 					... on File {
	// 						id
	// 						childYaml {
	// 							director
	// 							name
	// 							mainLink
	// 							quarter
	// 							tags
	// 							workshops {
	// 								name
	// 								repo
	// 								slides
	// 								tags
	// 								youtube
	// 								presenter
	// 							}
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `);
	// const events = pageQuery.allYaml.nodes;
	// events.sort(sortByQuarter);
	// const sortedQuarterList = getQuarterList(events);
	// const quarterEventsDict = getQuarterEvents(events);
	// const allTagsList = getAllTags(events);
	// console.log(allTagsList);
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

	return <HeadFooter>
		<SEO title="Workshop Archive" />
		<Container maxWidth="md" className={classes.container}>
			<PageTitle align='center'>Workshop Archive</PageTitle>
			<TagList tags={allTagsList} />
			{quarterEvents}
		</Container>
	</HeadFooter>;
}

export default ArchivePageTemplate;
