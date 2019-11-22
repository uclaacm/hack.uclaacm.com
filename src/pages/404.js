import React from 'react'
import  { withStyles } from '@material-ui/core/styles'
import { Button, Container, Link, Typography } from '@material-ui/core'

import HeadFooter from '../components/HeadFooter/HeadFooter'
import LinkNoStyle from '../components/LinkNoStyle/LinkNoStyle'
import SEO from '../components/SEO';

const styles = theme => ({
	title: {
		padding: theme.spacing(2, 0)
	},
	container: {
		// display: 'flex',
		// flexDirection: 'column',
		// justifyContent: 'center'
		textAlign: 'center'
	},
	message: {
		padding: theme.spacing(7,0)
	},
	button: {
		margin: theme.spacing(2, 0, 7, 0)
	}
});
function NotFoundPage({classes})  {
	return (
		<HeadFooter>
		<SEO title="404: Not found" />
		<Container maxWidth='md' className={classes.container}>
			<Typography variant='h4' component='h1' className={classes.title}>
				Error 404 - Page Doesn't Exist Lah ☹️
			</Typography>
			<div className={classes.message}>
				<Typography>
					Oof we are unable to find the page you're looking for :(
				</Typography> 
				<Typography> 
					<Link href='https://galenwong.github.io/'>Galen</Link>, 
					<Link href='https://github.com/TimothyGu'> Tim</Link>, and 
					<Link href='https://jodymlin.github.io/'> Jody </Link> 
					apologize for the inconvenience.
				</Typography>
			</div>
			<Typography></Typography>
			<Button variant='outlined' className={classes.button}>Back to Home</Button>
			<Link href='https://github.com/uclaacm/hackschool-f19/tree/master/session-3-backend-api#http-responses'
				color='textSecondary'
				underline='none'>
					<Typography>Why am I seeing this message?</Typography>
			</Link>
		</Container>
	</HeadFooter>
	);
}

export default withStyles(styles)(NotFoundPage);
