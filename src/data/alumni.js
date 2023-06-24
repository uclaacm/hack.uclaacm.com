import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';

const alumni = {
	2023: ['Brooke Jiang', 'Asha Kar', 'Chandra Suresh', 'Christina Tong', 'Alex Xia'],
	2022: ['Rajeshwari Jadhav', 'Jody Lin', 'Eugene Lo', 'Sahen Rai', 'Miles Wu', 'Eric Yang'],
	2021: [
		'Lea Blum', 'Connie Chen', 'Shirly Fang', 'Timothy Gu', 'Kristie Lim', 'Jamie Liu', 'Tim Rediehs',
		'Galen Wong'
	],
	2020: ['Yvonne Chen', 'Jeanette Lin', 'Dustin Newman', 'Prateek Singh', 'Kevin Tan', 'Furn Techalertumpai'],
	2019: ['Dmitri Brereton', 'Char McGinn', 'Astrid Wang', 'Nathan Yang'],
	2018: ['Shashank Khanna', 'Breanna Nery', 'Shannon Phu', 'Kelvin Wong'],
	2017: ['Vic Yeh']
};

const alumniGradYears = Object.keys(alumni).sort((a, b) => b - a);

const description = `Hack wouldn't be what it is today without our awesome alumni! Even though
					these officers have graduated, they will always be part of the Hack family.`;

const styles = theme => ({
	title: {
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
	},
	yearContainer: {
		margin: theme.spacing(3, 0)
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: theme.spacing(4)
	},
	caption: {
		fontFamily: theme.typography.body1.fontFamily,
		fontSize: theme.typography.fontSize * 1.3,
		lineHeight: 1.76,
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize,
			lineHeight: 1.57
		}
	}
});

function Alumni({ classes }) {
	const list = alumniGradYears.map(year =>
		<Grid item className={classes.yearContainer} key={year} sm={12} lg={4}>
			<Typography variant="h4" align="center">
				{year}
			</Typography>
			<div>
				{
					alumni[year].map(alumniNames =>
						<Typography variant="body1" align="center" key={alumniNames}>
							{alumniNames}
						</Typography>)
				}
			</div>
		</Grid>);

	return (
		<Container maxWidth='md' className={classes.caption}>
			<Typography variant="h3" component="h2" align="center" className={classes.title}>
				Alumni
			</Typography>
			<Typography variant="body1" align="center" className={classes.caption}>
				{description}
			</Typography>
			<Grid container className={classes.container}>
				{list}
			</Grid>
		</Container>
	);
}

Alumni.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Alumni);
