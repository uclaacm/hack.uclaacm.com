import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';

const styles = theme => ({
	container: {
		backgroundColor: '#FFFFFF',
		padding: theme.spacing(2),
		justifyContent: 'center'
	},
	card: {
		width: '100%',
		borderRadius: '20px',
		boxShadow: '0 1px 25px rgba(201, 96, 255, 0.5)',
		background: 'linear-gradient(90deg, #FFFFFF, #F1D6FF, #FFFFFF, #F1D6FF)',
		position: 'relative',
		animation: `$animate 3s linear infinite`
	},
	'@keyframes animate': {
		'0%': {
			backgroundSize: '300%',
			backgroundPosition: '100% 0'
		},
		'100%': {
			backgroundSize: '300%',
			backgroundPosition: '0 0'
		}
	},
	content: {
		textAlign: 'center'
	},
	forwardArrow: {
		fontSize: theme.typography.fontSize,
		marginLeft: theme.spacing(2),
		marginTop: theme.spacing(0.5)
	},
	grid: {
		direction: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	item: {
		[theme.breakpoints.down('xs')]: {
			width: '75%'
		}
	}
});


function Announcement({ classes }) {
	return (
		<Grid container className={classes.container}>
			<Card className={classes.card} variant='outlined'>
				<CardActionArea>
					<CardContent className={classes.content}>
						<Grid container className={classes.grid}>
							<Grid item className={classes.item}>
								<Typography variant='body1'>
									Want to learn more about our internship program? Check out this blog post!
								</Typography>
							</Grid>
							<Grid item justifyContent='center'>
								<ArrowForwardIcon className={classes.forwardArrow}/>
							</Grid>
						</Grid>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}

Announcement.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Announcement);
