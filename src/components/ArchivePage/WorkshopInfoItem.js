import React from 'react';
import PropTypes from 'prop-types';
import { Chip, Typography, Link, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	listItem: {
		display: 'flex',
		flexDirection: 'column'
	},
	links: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	chips: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	chip: {
		margin: theme.spacing(0.125, 0.25, 0.125, 0)
	}

}));

function LinkItem({ link, text, divider, ...props }) {
	return <Typography>
		{divider ? <span>{`· `}</span> : null }
		<Link href={link} {...props} >{text}</Link>
		&nbsp; {/* HTML code for space */}
	</Typography>;
}

LinkItem.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	divider: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

function WorkshopInfoItem({ name, presenter, tags, repo, slides, youtube }) {
	const classes = useStyles();
	return <ListItem key={name} alignItems="flex-start"	dense disableGutters className={classes.listItem}>
		<Typography variant="h6" component="h3">{name}</Typography>
		<div className={classes.chips}>
			{tags.map(tag => <Chip
				key={tag}
				label={<Typography variant='caption'>{tag}</Typography>}
				size='small'
				className={classes.chip}
			/>)}
		</div>
		<div className={classes.links}>
			{repo ?
				<LinkItem link={repo} text={'README'} /> :
				null
			}
			{slides ?
				<LinkItem link={slides} text={'Slides'} divider={repo}/> :
				null
			}
			{youtube ?
				<LinkItem link={youtube} text={'Recording'} divider={repo || slides} /> :
				null
			}
			{presenter ?
				<Typography>
					Taught by {presenter.join(', ')}
				</Typography> :
				null
			}
		</div>
	</ListItem>;
}

WorkshopInfoItem.propTypes = {
	name: PropTypes.string.isRequired,
	presenter: PropTypes.array,
	tags: PropTypes.array.isRequired,
	repo: PropTypes.string,
	slides: PropTypes.string,
	youtube: PropTypes.string
};

export default WorkshopInfoItem;
