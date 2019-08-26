import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HeaderBar from './head.svg';
import Profile from './profile';

import lea from './images/lea.jpg';
import connie from './images/connie.jpg';
import kristie from './images/kristie.jpg';
import galen from './images/galen.jpg';
import jeanette from './images/jeanette.jpg';
import jody from './images/jody.jpg';
import raji from './images/raji.jpg';
import furn from './images/furn.jpg';
import sahen from './images/sahen.jpg';
import shirly from './images/shirly.jpg';
import timothyG from './images/timothyG.jpg';
import tim from './images/tim.jpg';

const teamIntro = `
	We are a group of hackers, designers, and engineers all working to improve UCLA's
	hacking community. We believe in moving fast, having fun, and being passionate
	about using technology to solve problems that are relevant to us. We have a high
	bar for success, and are willing to work incredibly hard, balancing school and
	many other things, to improve the experience of other students around us. We're
	hiring in the spring, so keep a look out for an upcoming application form.
`;

/* eslint-disable max-len */
const officers = [
	{
		role: 'President',
		name: 'Lea Blum',
		photoURL: lea,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'President',
		name: 'Connie Chen',
		photoURL: connie,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Kristie Lim',
		photoURL: kristie,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Galen Wong',
		photoURL: galen,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Jeanette Lin',
		photoURL: jeanette,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Jody Lin',
		photoURL: jody,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Timothy Gu',
		photoURL: timothyG,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Raji Jadhav',
		photoURL: raji,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Furn Techalertumpai',
		photoURL: furn,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Sahen Rai',
		photoURL: sahen,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Shirly Fang',
		photoURL: shirly,
		description: 'Sparing mislaid awakened dog far one wow and arrogantly wow much goodness or slit wow fell jeeringly bombastic regarding wow ouch hawk spoke labrador when gnu hamster on uniquely.'
	},
	{
		role: 'Officer',
		name: 'Tim Rediehs',
		photoURL: tim,
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
	const profiles = officers.map((o, index) =>
		<Grid key={index} item xs={12} sm={6} md={4}>
			<Profile {...o} />
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
