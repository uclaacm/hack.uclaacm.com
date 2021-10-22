import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	pinkText: {
		color: theme.palette.secondary.main
	},
	purpleText: {
		color: theme.palette.primary.main
	},
	descriptionWrapper: {
		padding: theme.spacing(1)
	},
	wrapper: {
		padding: theme.spacing(3),
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: theme.spacing(2, 'auto'),
		width: 'fit-content',
		border: 'solid 4px',
		borderColor: theme.palette.secondary.main,
		borderRadius: '16px',
		backgroundColor: '#faddff5a',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column'
		}
	}
}));

function InternAppBanner() {
	const classes = useStyles();

	return <div className={classes.wrapper}>
		<div>
			<Typography variant='h4' component='h2' align='center'>
        Join our <span className={classes.pinkText}>team</span> ❤️
			</Typography>
			<Typography variant='h4' component='h2' align='center'>
        We are <span className={classes.purpleText}>recruiting</span>!
			</Typography>
			<Typography align='center'>
        Intern apps open until October 29, 2021 11:59pm PT
			</Typography>
		</div>
		<div className={classes.descriptionWrapper}>
			<Link component={PinkButton} href='https://forms.gle/nGEPFjSRzvNaciwC6'>
        Apply Now
			</Link>
			<Link component={OutlinedButton} href='https://www.uclaacm.com/internship'>
        Learn More
			</Link>
		</div>
	</div>;
}

const useButtonStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	}
}));

function PinkButton(props) {
	const classes = useButtonStyles();
	return <Button variant='contained' color='secondary' classes={{ root: classes.button }} {...props} />;
}

function OutlinedButton(props) {
	const classes = useButtonStyles();
	return <Button variant='outlined' color='secondary' classes={{ root: classes.button }} {...props} />;
}

export default InternAppBanner;
