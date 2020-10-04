import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import IconLink from './IconLink';
import { ReactComponent as FacebookIcon } from './facebook.svg';
import { ReactComponent as GitHubIcon } from './github.svg';
import { ReactComponent as MediumIcon } from './medium.svg';
import { ReactComponent as TwitterIcon } from './twitter.svg';
import JoinMailingListBtn from '../JoinMailingListBtn/JoinMailingListBtn';

const styles = theme => ({
	container: {
		backgroundColor: theme.palette.primary.dark,
		marginTop: theme.spacing(4)
	},
	content: {
		padding: theme.spacing(1, 3),
		alignItems: 'center',
		fontFamily: ['Poppins', 'sans-serif'],
		fontSize: theme.typography.fontSize,
		color: '#FFFFFF',
		textAlign: 'center'
	},
	icons: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: theme.spacing(1)
	},
	footerText: {
		fontSize: theme.typography.fontSize * 0.875,
		textTransform: 'uppercase'
	},
	button: {
		fontSize: theme.typography.fontSize * 0.875
	},
	buttonLink: {
		textDecoration: 'none'
	},
	copyright: {
		textTransform: 'uppercase'
	}
});

function Footer({ classes }) {
	return (
		<footer className={classes.container}>
			<Container maxWidth="md">
				<Grid container spacing={1} className={classes.content}>
					<Grid item xs={12} sm={12} md={4}>
						<div className={classes.footerText}>Find us on social media</div>
						<div className={classes.icons}>
							<IconLink icon={FacebookIcon} link="https://www.facebook.com/groups/acmhack/"/>
							<IconLink icon={GitHubIcon} link="https://github.com/uclaacm/"/>
							<IconLink icon={MediumIcon} link="https://medium.com/techatucla"/>
							<IconLink icon={TwitterIcon} link="https://twitter.com/uclaacm"/>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<div>uclaacmhack@gmail.com</div>
						<div className={classes.copyright}>© ACM Hack</div>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<JoinMailingListBtn />
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
