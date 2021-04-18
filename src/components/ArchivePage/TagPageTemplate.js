import React from 'react';
import { Container, Typography } from '@material-ui/core';
import EventInfoItem from './EventInfoItem';
import { makeStyles } from '@material-ui/core/styles';
import PageTitle from '../PageTitle/PageTitle';
import HeadFooter from '../HeadFooter/HeadFooter';
import SEO from '../SEO';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
	container: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(8)
	},
	quarterItem: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	},
	quarterEvent: {
		padding: theme.spacing(2, 0)
	},
	subtitle: {
		margin: theme.spacing(6, 0, 2)
	},
	tagColor: {
		color: '#FF477E'
	}
}));

function sortByQuarter(firstQuarter, secondQuarter) {
	const [firstEventQuarter, firstEventYear] = firstQuarter.split(' ');
	const [secondEventQuarter, secondEventYear] = secondQuarter.split(' ');

	const quarterOrder = ['Winter', 'Spring', 'Summer', 'Fall'];

	if (firstEventYear === secondEventYear) {
		return quarterOrder.indexOf(secondEventQuarter) - quarterOrder.indexOf(firstEventQuarter);
	}
	return parseInt(secondEventYear) - parseInt(firstEventYear);
}

function getQuarterList(quarterEvents) {
	const quarterList = [];
	for (const property in quarterEvents) {
		quarterList.push(property);
	}
	quarterList.sort(sortByQuarter);
	return quarterList;
}

function TagPageTemplate({ pageContext }) {
	const classes = useStyles();
	const { quarterEventsTags, tagName } = pageContext;
	const quarterList = getQuarterList(quarterEventsTags);
	for (const event in quarterEventsTags) {
		quarterEventsTags[event].sort((first, second) => first.name < second.name ? -1 : 1);
	}
	const allEvents = quarterList.map(quarter => {
		return (
			quarterEventsTags[quarter].length !== 0	?
				<div className={classes.quarterItem} key={quarter}>
					<Typography variant='h5'>{quarter}</Typography>
					<div className={classes.quarterEvent}>
						{quarterEventsTags[quarter].map(event =>
							<EventInfoItem
								key={event.name}
								name={event.name}
								mainLink={event.mainLink}
								tags={event.tags}
								director={event.director}
								workshops={event.workshops}
								tagHighlight={tagName}
							/>)}
					</div>
				</div> :
				null
		);
	});

	return <HeadFooter>
		<SEO title={`Workshop Archive: ${tagName}`} />
		<Container maxWidth="md" className={classes.container}>
			<PageTitle className={classes.subtitle} align="center">Workshop Archive</PageTitle>
			<Typography align="center" variant="subtitle1">
				Filtered by tag: <span className={classes.tagColor}>
					<i>{tagName}</i>
				</span>
			</Typography>
			{allEvents}
		</Container>
	</HeadFooter>;
}

TagPageTemplate.propTypes = {
	pageContext: PropTypes.object.isRequired
};

export default TagPageTemplate;
