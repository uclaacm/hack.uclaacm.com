import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import calendar from 'dayjs/plugin/calendar';
import utc from 'dayjs/plugin/utc';
import classNames from 'classnames';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';
import { useTheme, withStyles } from '@material-ui/core/styles';

import BigDate from '../BigDate/BigDate';

dayjs.extend(isBetween);
dayjs.extend(calendar);
dayjs.extend(utc);

const styles = theme => ({
	container: {
		position: 'relative',
		height: '100%',
		borderRadius: theme.shape.borderRadius * 2,
		// transition for transform
		transitionDuration: theme.transitions.duration.shortest,
		transitionTimingFunction: theme.transitions.easing.easeIn,
		transitionProperty: 'all',
		'&:after': {
			// relative to this container
			position: 'absolute',
			backgroundColor: 'rgba(255, 255, 255, 0)',
			// transition for backgroundColor
			transitionDuration: theme.transitions.duration.shortest,
			transitionTimingFunction: theme.transitions.easing.easeIn,
			content: '""',
			width: '100%',
			height: '100%',
			// prevent pseudo element from capturing click event
			pointerEvents: 'none',
			top: 0,
			left: 0
		}
	},
	hoverTranslation: {
		transform: 'translateY(-1px)'
	},
	greyOverlay: {
		'&:after': {
			backgroundColor: 'rgba(255, 255, 255, 0.4)'
		}
	},
	banner: {
		height: '175px',
		// adjust image to cover the entire box
		objectFit: 'cover',
		// this is a workaround for a Safari/Chrome bug on iOS
		// where the overflow hidden does not hidden on border
		// radius.
		// See here: https://bugs.webkit.org/show_bug.cgi?id=72619
		// So, we inherit the borderRadius so the image itself
		// has a rounded corner since the parent has a round corner
		// as well.
		borderTopRightRadius: 'inherit',
		borderTopLeftRadius: 'inherit'
	},
	eventName: {
		fontFamily: theme.typography.fontFamily,
		fontWeight: 400,
		margin: theme.spacing(0),
		fontSize: (theme.typography.fontSize / 16) * 24
	},
	details: {
		fontSize: (theme.typography.fontSize / 16) * 14
	},
	buttonArea: {
		// relative to the container class above
		position: 'absolute',
		bottom: 0,
		right: 0,
		// to align with the padding in `CardContent`
		// which is by default theme.spacing(2)
		padding: theme.spacing(2)
	}
});

function EventCard({
	name,
	date,
	location,
	detailLink,
	conferenceLink,
	rsvpLink,
	imgFile,
	disabled,
	classes
}) {
	const [isHover, setIsHover] = useState(false);
	const dateStr = dayjs(date).calendar();
	const theme = useTheme();
	const isWithin12Hours = dayjs
		.utc()
		.isBetween(
			dayjs(date).utc().subtract(12, 'hours'),
			dayjs(date).utc().add(12, 'hours')
		);
	return (
		<Card
			raised
			elevation={isHover ? 11 : 6}
			className={classNames(classes.container, {
				[classes.greyOverlay]: disabled,
				[classes.hoverTranslation]: isHover
			})}
			onMouseLeave={() => setIsHover(false)}
			onMouseEnter={() => setIsHover(true)}
		>
			<CardMedia classes={{ root: classes.banner }}
			>
				<GatsbyImage
					image={imgFile.childImageSharp.gatsbyImageData}
					style={{
						position: 'relative',
						zIndex: 1,
						borderRadius: theme.shape.borderRadius * 2,
						pointerEvents: 'none'
					}} // iOS border radius
					onMouseEnter={() => setIsHover(true)}
				/>
			</CardMedia>
			<CardContent>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={12}>
						{' '}
						<BigDate date={date} />{' '}
					</Grid>
					<Grid item>
						<Typography classes={{ root: classes.eventName }} variant="h3">
							{name}
						</Typography>
						<Typography
							variant="body1"
							component="span"
							classes={{ root: classes.details }}
						>
							{dateStr}
							{location ? ` · ${location}` : null}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions className={classes.buttonArea}>
				<NoSsr>
					{conferenceLink ?
						<Button
							variant="outlined"
							size="small"
							color="primary"
							disabled={!isWithin12Hours}
							component="a"
							href={conferenceLink}
							target="_blank"
							rel="noreferrer noopener"
						>
							Join
						</Button> :
						null}
					{rsvpLink ?
						<Button
							variant="outlined"
							size="small"
							color="secondary"
							component="a"
							href={rsvpLink}
							target="_blank"
							rel="noreferrer noopener"
						>
							RSVP
						</Button> :
						null}
				</NoSsr>
				<Button
					variant="outlined"
					size="small"
					disabled={!detailLink}
					component="a"
					href={detailLink}
					target="_blank"
					rel="noreferrer noopener"
				>
					Details
				</Button>
			</CardActions>
		</Card>
	);
}

EventCard.propTypes = {
	name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	// location might not be available yet
	location: PropTypes.string,
	// links might not be available yet
	detailLink: PropTypes.string,
	conferenceLink: PropTypes.string,
	rsvpLink: PropTypes.string,
	imgFile: PropTypes.object.isRequired,
	disabled: PropTypes.bool.isRequired,
	classes: PropTypes.object.isRequired
};

EventCard.defaultProps = {
	disabled: false
};

export default withStyles(styles)(EventCard);

export const query = graphql`
	fragment HackEventForEventCard on HackEvent {
		name
		date
		location
		detailLink
		conferenceLink
		rsvpLink
		imgFile {
			childImageSharp {
				gatsbyImageData(
					width: 520
					breakpoints: [260, 390]
					height: 350
					quality: 75
					transformOptions: { fit: COVER, cropFocus: CENTER }
					layout: CONSTRAINED
				)
			}
		}
	}
`;
