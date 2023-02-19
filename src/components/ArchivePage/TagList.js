import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Chip, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	chips: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		marginBottom: '10px'
	},
	chip: {
		margin: theme.spacing(0.4, 0.25) // topbottom, leftright
	}
}));

function TagList({ tags }) {
	const classes = useStyles();
	const taglinks = tags.map(tag => {
		return (
			<Chip
				key={tag.displayName}
				label={<Typography variant="caption">{tag.displayName}</Typography>}
				size="small"
				className={classes.chip}
				component="a"
				href={`/archive/tags/${tag.slugURL}`}
				clickable
				role="listitem"
			/>
		);
	});
	return (
		<div className={classes.chips} role="list" aria-label="Tags">
			{taglinks}
		</div>
	);
}

TagList.propTypes = {
	tags: PropTypes.array.isRequired
};

export default TagList;
