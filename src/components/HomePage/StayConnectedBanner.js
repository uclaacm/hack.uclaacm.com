import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import StayConnectedBtn from './StayConnectedBtn';
import HackPigeon from './HackPigeon';

const useStyles = makeStyles(theme => ({
	banner: {
		padding: theme.spacing(5, 0)
	},
	description: {
		marginBottom: theme.spacing(2)
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
	},
	joinButton: {
		marginBottom: theme.spacing(5)
	}
}));

const mailingListDescription = 'Sign up for our mailing list to receive updates about the latest events across ACM';
const discordDescription = 'Join the ACM Discord to get live announcements about upcoming events';

const mailingListLink = 'http://eepurl.com/c5pE6P';
const discordLink = 'https://bit.ly/ACMdiscord';

const mailingListBtnText = 'Join Our Mailing List';
const discordBtnText = 'Join The ACM Discord';

function StayConnectedBanner() {
	const classes = useStyles();
	return (
		<div className={classes.banner}>
			<Typography variant="h5" paragraph classes={{ root: classes.description }}>Stay Connected</Typography>
			<Grid container>
				<Grid item xs={6}>
					<Typography classes={{ root: classes.description }}>{mailingListDescription}</Typography>
					<StayConnectedBtn className={classes.joinButton} link={mailingListLink} text={mailingListBtnText} />
					<Typography classes={{ root: classes.description }}>{discordDescription}</Typography>
					<StayConnectedBtn link={discordLink} text={discordBtnText} />
				</Grid>
				<Grid item xs={6} classes={{ root: classes.pigeonContainer }}>
					<HackPigeon className={classes.pigeon} />
				</Grid>
			</Grid>
		</div>
	);
}

export default StayConnectedBanner;
