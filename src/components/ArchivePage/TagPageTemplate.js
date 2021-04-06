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
	quarterEvents: {
		padding: theme.spacing(2, 0)
	},
	subtitle: {
		margin: theme.spacing(6, 0, 2)
	},
	tagColor: {
		color: '#FF477E'
	}
}));

function TagPageTemplate({ pageContext }) {
	const classes = useStyles();
	const { sortedQuarterList, quarterEventsDictFilteredByTags, tagName } = pageContext;

	const quarterEvents = sortedQuarterList.map(quarter => {
		return (
			quarterEventsDictFilteredByTags[quarter].length !== 0	?
				<div className={classes.quarterItem} key={quarter}>
					<Typography variant='h5'>{quarter}</Typography>
					<div className={classes.quarterEvents}>
						{quarterEventsDictFilteredByTags[quarter].map(event =>
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
				Filtered by tag:
				<span className={classes.tagColor}><i>{tagName}</i>
				</span>
			</Typography>
			{quarterEvents}
		</Container>
	</HeadFooter>;
}

TagPageTemplate.propTypes = {
	pageContext: PropTypes.object.isRequired
};

export default TagPageTemplate;
