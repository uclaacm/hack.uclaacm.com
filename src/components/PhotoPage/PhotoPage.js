import { basename } from 'path';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Profile from './Profile';
import PageTitle from '../PageTitle/PageTitle';

import { ourMission, ourValues, officers } from '../../data/profiles';

const styles = theme => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		marginTop: '5%'
	},
	content: {
		fontFamily: theme.typography.body1.fontFamily,
		fontSize: theme.typography.fontSize * 1.3,
		lineHeight: 1.76,
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize,
			lineHeight: 1.57
		}
	},
	team: {
		fontFamily: ['Poppins', 'sans-serif'],
		fontWeight: 700,
		fontSize: theme.typography.fontSize * 3,
		borderStyle: 'solid',
		borderWidth: `0 0 ${theme.typography.fontSize * 1.5}px 0`,
		borderColor: theme.palette.secondary.main,
		width: 'fit-content',
		margin: theme.spacing(4, 'auto'),
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize * 1.2,
			borderWidth: `0 0 ${theme.typography.fontSize * 0.6}px 0`
		}
	}
});

function PhotoPage({ classes }) {
	const data = useStaticQuery(graphql`{
  profilePhotos: allFile(filter: {relativePath: {glob: "team/*"}}) {
    nodes {
      relativePath
      childImageSharp {
        gatsbyImageData(width: 200, height: 200, quality: 85, layout: FIXED, placeholder: BLURRED)
      }
    }
  }
  easterEggPhotos: allFile(filter: {relativePath: {glob: "team-easter-egg/*"}}) {
    nodes {
      relativePath
      childImageSharp {
        gatsbyImageData(width: 200, height: 200, quality: 85, layout: FIXED, placeholder: BLURRED)
      }
    }
  }
}
`);

	const idToImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.profilePhotos.nodes) {
		const id = basename(relativePath).split('.')[0];
		idToImageMap.set(id, childImageSharp.gatsbyImageData);
		if (!officers.some(o => o.id === id)) {
			throw new Error('Unknown officer picture in src/images: ' + relativePath);
		}
	}
	const idToEasterEggMap = new Map();
	for (const { relativePath, childImageSharp } of data.easterEggPhotos.nodes) {
		const id = basename(relativePath).split('.')[0];
		idToEasterEggMap.set(id, childImageSharp.gatsbyImageData);
		if (!officers.some(o => o.id === id)) {
			throw new Error('Unknown officer picture in src/images: ' + relativePath);
		}
	}

	const profiles = officers.map(o =>
		<Grid key={o.id} item xs={12} sm={6} md={4}>
			<Profile
				{...o}
				imageFixed={idToImageMap.get(o.id)}
				easterEggImageFixed={idToEasterEggMap.get(o.id)}
			/>
		</Grid>);

	return (
		<Container maxWidth="md" classes={{ root: classes.content }}>
			<PageTitle align='center'>Who We Are</PageTitle>
			<div className={classes.team}>Our Mission</div>
			{ourMission}
			<div className={classes.team}>Our Values</div>
			{ourValues}
			<div className={classes.team}>The Team</div>
			<Grid container>
				{profiles}
			</Grid>

		</Container>
	);
}

PhotoPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PhotoPage);
