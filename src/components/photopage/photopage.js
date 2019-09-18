import { basename } from 'path';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HeaderBar from './head.svg';
import Profile from './profile';

const teamIntro = `
	We are a group of hackers, designers, and engineers all working to improve UCLA's
	hacking community. We believe in moving fast, having fun, and being passionate
	about using technology to solve problems that are relevant to us. We have a high
	bar for success, and are willing to work incredibly hard, balancing school and
	many other things, to improve the experience of other students around us. We're
	hiring in the spring, so keep a look out for an upcoming application form.
`;

/* eslint-disable max-len */
// The id field must be sync'd with the name of the file.
const officers = [
	{
		role: 'President',
		name: 'Lea Blum',
		id: 'lea',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'President',
		name: 'Connie Chen',
		id: 'connie',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Kristie Lim',
		id: 'kristie',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Galen Wong',
		id: 'galen',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Jeanette Lin',
		id: 'jeanette',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Jody Lin',
		id: 'jody',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Timothy Gu',
		id: 'timothyG',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Raji Jadhav',
		id: 'raji',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Furn Techalertumpai',
		id: 'furn',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Sahen Rai',
		id: 'sahen',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Shirly Fang',
		id: 'shirly',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Tim Rediehs',
		id: 'timothyR',
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	}
];
/* eslint-enable max-len */

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
		marginTop: theme.spacing(7),
		marginBottom: theme.spacing(4),
		marginLeft: theme.spacing(2.75),
		marginRight: theme.spacing(2.75),
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize,
			lineHeight: 1.57,
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(3)
		}
	},
	team: {
		fontFamily: ['Poppins'],
		fontWeight: 700,
		fontSize: theme.typography.fontSize * 3,
		borderStyle: 'solid',
		borderWidth: `0 0 ${theme.typography.fontSize * 1.5}px 0`,
		borderColor: '#FB4469',
		marginBottom: theme.spacing(5),
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize * 1.2,
			borderWidth: `0 0 ${theme.typography.fontSize * 0.6}px 0`
		}
	}
});

function PhotoPage({ classes }) {
	const data = useStaticQuery(graphql`
		{
			profilePhotos: allFile(filter: {relativePath: {glob: "team/*" }}) {
				nodes {
					relativePath
					childImageSharp {
						fixed(width: 200, height: 200, quality: 75) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
	`);

	const idToImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.profilePhotos.nodes) {
		const id = basename(relativePath).split('.')[0];
		idToImageMap.set(id, childImageSharp.fixed);
		if (!officers.some(o => o.id === id)) {
			throw new Error('Unknown officer picture in src/images: ' + relativePath);
		}
	}

	const profiles = officers.map(o =>
		<Grid key={o.id} item xs={12} sm={6} md={4}>
			<Profile {...o} imageFixed={idToImageMap.get(o.id)} />
		</Grid>);

	return (
		<div className={classes.container}>
			<img src={HeaderBar} style={{ width: '100%' }}/>
			<Container maxWidth="md" classes={{ root: classes.content }}>
				{teamIntro}
			</Container>
			<div className={classes.team}>The Team</div>
			<Container maxWidth="md">
				<Grid container>
					{profiles}
				</Grid>
			</Container>
		</div>
	);
}

PhotoPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PhotoPage);
