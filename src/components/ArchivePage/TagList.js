import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
	chips: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		marginBottom: '10px'
	},
	chip: {
		margin: theme.spacing(0.125, 0.25, 0.125, 0)
	}
}));

const handleClick = () => {
	console.info('You clicked the Chip.');
};

function TagList({ tags, theme }) {
	const classes = useStyles();
	const taglinks = tags.map(tag => {
		return(
			<Link key={tag} to="/">
				<Chip
					key={tag}
					label={<Typography variant='caption'>{tag}</Typography>}
					size="small"
					className={classes.chip}
        	onClick={handleClick}
				/>
			</Link>
		)
	});
	return (
		<div className={classes.chips}>
			{taglinks}
		</div>
	);
}

TagList.propTypes = {
	tags: PropTypes.array.isRequired
};

export default TagList;
