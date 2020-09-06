import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HackPigeon from './HackPigeon';

const useStyles = makeStyles(theme => ({
	banner: {
		padding: theme.spacing(5, 0)
	},
	description: {
		marginBottom: theme.spacing(5)
	},
	graphics: {
		maxWidth: '100%'
	}
}));

const description = 'Sign up for our mailing list to receive updates about the latest events across ACM';

function MailingListBanner() {
	const classes = useStyles();
	return (
		<Grid container className={classes.banner}>
			<Grid item xs={12} md={6}>
				<Typography variant="h5" paragraph classes={{ root: classes.description }}>Stay Connected</Typography>
				<Typography classes={{ root: classes.description }}>{description}</Typography>
				<Button color="secondary" variant="contained">Join Our Mailing List</Button>
			</Grid>
			<Grid item xs={12} md={6}>
				<HackPigeon />
			</Grid>
		</Grid>
	);
}

export default MailingListBanner;
