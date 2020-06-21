import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Grid, useMediaQuery, Typography } from '@material-ui/core';
import { useTheme, withStyles } from '@material-ui/styles';
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
	}
});

function EventHighLight({ classes }) {
	const theme = useTheme();
	// This boolean allow the layout to change flexibly.
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const data = useStaticQuery(graphql`
		{
			highlightedEvents: allHighlightedHackEvent {
				nodes {
					id
					description
					name
					imgFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
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
				<Img fluid={event.imgFile.childImageSharp.fluid} className={classes.image} />
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
				<Typography variant="h4" gutterBottom>
					{event.name}
				</Typography>
				<Typography variant="body1">
					{event.description}
				</Typography>
			</Grid>
		</Grid>);

	return eventRows;
}

EventHighLight.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventHighLight);
