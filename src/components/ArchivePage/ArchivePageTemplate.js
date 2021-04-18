import React from 'react';
import { Container, Typography } from '@material-ui/core';
import EventInfoItem from './EventInfoItem';
import { makeStyles } from '@material-ui/core/styles';
import PageTitle from '../PageTitle/PageTitle';
import TagList from './TagList';
import HeadFooter from '../HeadFooter/HeadFooter';
import SEO from '../SEO';
import PropTypes from 'prop-types';

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
	quarterEvent: {
		padding: theme.spacing(2, 0)
	},
	tagContainer: {
		margin: theme.spacing(5, 0)
	},
	tagDetails: {
		margin: theme.spacing(1, 0, 0)
	}
}));

function ArchivePageTemplate({ pageContext }) {
	const classes = useStyles();
	const { sortedQuarters, quarterEvents, allTags } = pageContext;
	const allEvents = sortedQuarters.map(quarter =>
		<div className={classes.quarterItem} key={quarter}>
			<Typography variant='h5'>{quarter}</Typography>
			<div className={classes.quarterEvent}>
				{quarterEvents[quarter].map(event =>
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
			<details className={classes.tagContainer}>
				<summary><Typography display='inline' >Filter by tag...</Typography></summary>
				<div className={classes.tagDetails}>
					<TagList tags={allTags} />
				</div>
			</details>
			{allEvents}
		</Container>
	</HeadFooter>;
}

ArchivePageTemplate.propTypes = {
	pageContext: PropTypes.shape({
		sortedQuarters: PropTypes.array.isRequired,
		quarterEvents: PropTypes.instanceOf(Map).isRequired,
		allTags: PropTypes.array.isRequired
	}).isRequired
};

export default ArchivePageTemplate;
