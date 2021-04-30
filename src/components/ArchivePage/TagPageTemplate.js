import React from 'react';
import { Container, Typography, IconButton } from '@material-ui/core';
import EventInfoItem from './EventInfoItem';
import { makeStyles } from '@material-ui/core/styles';
import PageTitle from '../PageTitle/PageTitle';
import HeadFooter from '../HeadFooter/HeadFooter';
import SEO from '../SEO';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';

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
	tagName: {
		flexDirection: 'row',
		alignItems: 'center',
		display: 'inline-flex'
	},
	tagColor: {
		color: '#FF477E',
		marginRight: theme.spacing(-0.5)
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
	for (const property of Object.keys(quarterEvents)) {
		quarterList.push(property);
	}
	quarterList.sort(sortByQuarter);
	return quarterList;
}

function cmp(a, b) {
	if (a === b) {
		return 0;
	} else if (a < b) {
		return -1;
	}
	return 1;
}

function TagPageTemplate({ pageContext }) {
	const classes = useStyles();
	const { quarterEventsTags, tagName } = pageContext;
	const quarterList = getQuarterList(quarterEventsTags);
	for (const event in quarterEventsTags) {
		quarterEventsTags[event].sort((first, second) => cmp(first.name, second.name));
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
				Filtered by tag: <span className={classes.tagName}>
					<i className={classes.tagColor}>{tagName}</i>
					<IconButton aria-label="cancel" href="/archive">
						<CancelIcon color="gray" fontSize="small" />
					</IconButton>
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
