import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button, Grid, Link, useMediaQuery, Typography } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import { useTheme, withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
	container: {
		borderRadius: theme.shape.borderRadius * 2
	},
	gridItem: {
		margin: theme.spacing(2, 0)
	},
	gridItemLeft: {
		paddingRight: theme.spacing(2)
	},
	gridItemRight: {
		paddingLeft: theme.spacing(2)
	},
	image: {
		width: '100%',
		boxShadow: theme.shadows[6],
		borderRadius: theme.shape.borderRadius * 2
	},
	button: {
		margin: theme.spacing(2, 0)
	},
	icon: {
		marginLeft: theme.spacing(1),
		fontSize: theme.typography.fontSize
	}
});

function EventHighLight({ classes }) {
	const theme = useTheme();
	// This boolean allow the layout to change flexibly.
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const data = useStaticQuery(graphql`{
  highlightedEvents: allHighlightedHackEvent {
    nodes {
      id
      description
      name
      link
      button
      imgFile {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`);

	const eventRows = data.highlightedEvents.nodes.map((event, idx) =>
		<Grid
			key={event.id}
			container
			alignItems="center"
			// Determine if image is on the left or on the right
			// based on array index. This alternates.
			direction={idx % 2 === 0 || isSmallScreen ? 'row' : 'row-reverse'}
		>
			<Grid
				item
				xs={12}
				md={6}
				classes={{
					root:
						classNames(
							{
								[classes.gridItemLeft]: idx % 2 === 0 && !isSmallScreen,
								[classes.gridItemRight]: idx % 2 === 1 && !isSmallScreen
							},
							classes.gridItem
						)
				}}
			>
				<GatsbyImage
					image={event.imgFile.childImageSharp.gatsbyImageData}
					className={classes.image} />
			</Grid>
			<Grid
				item
				sm={12}
				md={6}
				classes={{
					root:
						classNames(
							{
								[classes.gridItemRight]: idx % 2 === 0 && !isSmallScreen,
								[classes.gridItemLeft]: idx % 2 === 1 && !isSmallScreen
							},
							classes.gridItem
						)
				}}
			>
				<Typography variant="h4" gutterBottom component="h2">
					{event.name}
				</Typography>
				<Typography variant="body1">
					{event.description}
				</Typography>
				<Link
					href={event.link}
					target="_blank"
					rel="noopener noreferrer"
					underline="none"
				>
					<Button
						variant="outlined"
						classes={{ root: classes.button }}
						disabled={!event.link}
					>
						{event.button}
						<LaunchIcon classes={{ root: classes.icon }} />
					</Button>
				</Link>
			</Grid>
		</Grid>);

	return eventRows;
}

EventHighLight.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventHighLight);
