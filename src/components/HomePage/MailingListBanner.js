import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import JoinMailingListBtn from '../JoinMailingListBtn/JoinMailingListBtn';
import HackPigeon from './HackPigeon';

const useStyles = makeStyles(theme => ({
	banner: {
		padding: theme.spacing(5, 0)
	},
	description: {
		marginBottom: theme.spacing(5)
	},
	pigeonContainer: {
		position: 'relative'
	},
	pigeon: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-40%, -50%)',
		width: '100%'
	}
}));

const description = 'Sign up for our mailing list to receive updates about the latest events across ACM';

function MailingListBanner() {
	const classes = useStyles();
	return (
		<div className={classes.banner}>
			<Typography variant="h5" paragraph classes={{ root: classes.description }}>Stay Connected</Typography>
			<Grid container>
				<Grid item xs={6}>
					<Typography classes={{ root: classes.description }}>{description}</Typography>
				</Grid>
				<Grid item xs={6} classes={{ root: classes.pigeonContainer }}>
					<HackPigeon className={classes.pigeon} />
				</Grid>
			</Grid>
			<JoinMailingListBtn />
		</div>
	);
}

export default MailingListBanner;
