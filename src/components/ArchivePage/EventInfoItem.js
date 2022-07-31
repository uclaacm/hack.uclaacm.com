import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable no-duplicate-imports */
import { Chip, Divider, Typography, Link, List } from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel } from '@material-ui/core';
/* eslint-enable no-duplicate-imports */
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import LaunchIcon from '@material-ui/icons/Launch';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import { makeStyles } from '@material-ui/core/styles';
import WorkshopInfoItem from './WorkshopInfoItem';
import { ListFormat } from '../../utils/intl';

const listFormatter = new ListFormat('en-US');

const useStyles = makeStyles(theme => ({
	eventItem: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	eventName: {
		display: 'flex',
		alignItems: 'center'
	},
	formControl: {
		margin: theme.spacing(0, 0.5)
	},
	link: {
		display: 'flex',
		alignItems: 'center'
	},
	paperRoot: {
		width: '100%'
	},
	name: {
		lineHeight: '1.0',
		margin: theme.spacing(0, 0.5)
	},
	chips: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	chip: {
		margin: theme.spacing(0.125, 0.25, 0.125, 0)
	},
	tagColor: {
		color: '#FF477E'
	}
}));

function EventInfoItem({ name, mainLink, tags, directors, workshops, tagHighlight, slug }) {
	const classes = useStyles();
	const [isExpanded, setExpanded] = useState(false);
	const [hash, setHash] = useState('');
	useEffect(() => {
		setHash(window.location.hash);
	}, []);
	useEffect(() => {
		if (`#${slug}` === hash) {
			setExpanded(true);
		}
	}, [hash, slug]);

	return (
		<Accordion
			id={slug}
			classes={{ root: classes.paperRoot }}
			onChange={() => setExpanded(e => !e)}
			expanded={isExpanded}>
			<AccordionSummary
				expandIcon={isExpanded ? <RemoveIcon /> : <AddIcon />}
			>
				<div className={classes.eventItem}>
					<div className={classes.eventName}>
						<Typography variant="h6" component="h2" className={classes.name}>
							{name}
						</Typography>
						<LinkOutlinedIcon
							fontSize='medium'
							color='primary'
							onClick={event => {
								window.history.pushState({ accordian: slug }, '', `/archive#${slug}`);
								event.stopPropagation();
								setHash(window.location.hash);
							}}
							className={classes.formControl}
						/>
						<FormControlLabel
							aria-label="Launch"
							onClick={event => event.stopPropagation()}
							onFocus={event => event.stopPropagation()}
							className={classes.formControl}
							control={<Link href={mainLink} className={classes.link} aria-label={name}>
								<LaunchIcon fontSize='small' color='primary' />
							</Link>}
						/>
					</div>
					<div className={classes.chips}>
						{tags.map(tag =>
							<Chip
								key={tag}
								label={<Typography variant='caption'>
									<span className={tagHighlight && tagHighlight === tag ? classes.tagColor : null}>
										{tag}
									</span></Typography>}
								size="small"
								className={classes.chip}
							/>)}
					</div>
				</div>
			</AccordionSummary>
			<Divider variant="middle" />
			<AccordionDetails>
				<div>
					<Typography color="textSecondary">
					</Typography>
					{directors ?
						<Typography>Directed by {listFormatter.format(directors)}</Typography> :
						null
					}
					{workshops ?
						<List>
							{workshops.map(workshop =>
								<WorkshopInfoItem
									key={workshop.name}
									name={workshop.name}
									presenters={workshop.presenters}
									tags={workshop.tags}
									repo={workshop.repo}
									slides={workshop.slides}
									youtube={workshop.youtube}
									tagHighlight={tagHighlight}
								/>)}
						</List> :
						null
					}
				</div>
			</AccordionDetails>
		</Accordion>
	);
}

EventInfoItem.propTypes = {
	name: PropTypes.string.isRequired,
	mainLink: PropTypes.string,
	tags: PropTypes.array.isRequired,
	directors: PropTypes.array,
	workshops: PropTypes.array,
	tagHighlight: PropTypes.string,
	slug: PropTypes.string
};

export default EventInfoItem;
