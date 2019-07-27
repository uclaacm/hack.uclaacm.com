import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';

import IconLink from './iconlink';
import facebook from './facebook.svg';
import github from './github.svg';
import medium from './medium.svg';
import twitter from './twitter.svg';

const styles = theme => ({
	container: {
		backgroundColor: theme.palette.primary.dark
	},
	buttonLink: {
		textDecoration: 'none'
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
		fontSize: theme.typography.fontSize * 0.875
	},
	button: {
		fontSize: theme.typography.fontSize * 0.875
	}
});

class Footer extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Container maxWidth="md">
					<Grid container spacing={1} className={classes.content}>
						<Grid item xs={12} sm={12} md={4}>
							<div className={classes.footerText}>FIND US ON SOCIAL MEDIA</div>
							<div className={classes.icons}>
								<IconLink icon={facebook} link="https://www.facebook.com/groups/acmhack/"/>
								<IconLink icon={github} link="https://github.com/uclaacm/"/>
								<IconLink icon={medium} link="https://medium.com/techatucla"/>
								<IconLink icon={twitter} link="https://twitter.com/uclaacm"/>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<div>uclaacmhack@gmail.com</div>
							<div>© ACM HACK {(new Date()).getFullYear()}</div>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<a className={classes.buttonLink} href="http://eepurl.com/c5pE6P" target="_blank" rel="noopener noreferrer">
								<Button className={classes.button} variant="contained" color="secondary">
									Join our Mailing List
								</Button>
							</a>
						</Grid>
					</Grid>
				</Container>
			</div>
		);
	}
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
