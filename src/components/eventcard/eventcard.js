import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import BigDate from '../BigDate/BigDate';

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
		height: '200px',
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
		margin: theme.spacing(0),
		fontSize: theme.typography.fontSize / 14 * 24
	},
	details: {
		fontSize: theme.typography.fontSize / 16 * 14
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
	imgFile,
	disabled,
	classes
}) {
	const [isHover, setIsHover] = useState(false);
	const dateStr = moment(date).calendar();
	return (
		<Card
			raised
			elevation={isHover ? 11 : 6}
			className={classNames(classes.container, {
				[classes.greyOverlay]: disabled,
				[classes.hoverTranslation]: isHover
			})}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			{/* Empty string added as child to squelch CardMedia warning */}
			<CardMedia
				component={Img}
				classes={{ root: classes.banner }}
				fluid={imgFile.childImageSharp.fluid}
			>{''}</CardMedia>
			<CardContent>
				<Grid container spacing={2} alignItems="center">
					<Grid item xs={12}> <BigDate date={date} /> </Grid>
					<Grid item>
						<Typography classes={{ root: classes.eventName }} variant="h3">
							{name}
						</Typography>
						<Typography variant="body1" component="span" classes={{ root: classes.details }}>
							{`${dateStr} · ${location}`}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions className={classes.buttonArea}>
				<Link href={detailLink} underline="none">
					<Button variant="outlined" size="small" disabled={!detailLink}>
						Event Detail
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}

EventCard.propTypes = {
	name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	// link might not be available yet
	detailLink: PropTypes.string,
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
		imgFile {
			childImageSharp {
				fluid(maxWidth: 520, srcSetBreakpoints: [260, 390], maxHeight: 400,
							quality: 75, fit: COVER, cropFocus: CENTER) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
