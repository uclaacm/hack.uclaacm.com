import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Icon from './icon';
import facebook from './facebook.svg';
import github from './github.svg';
import medium from './medium.svg';
import twitter from './twitter.svg';

const styles = theme => ({
	container: {
		backgroundColor: '#352A3A'
	},
	buttonLink: {
		textDecoration: 'none'
	},
	content: {
		maxWidth: theme.maxWidth,
		padding: theme.spacing(1, 3, 1, 3),
		margin: 'auto',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontFamily: ['Poppins', 'sans-serif'],
		fontSize: theme.typography.fontSize,
		color: '#FFFFFF',
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column'
		}
	},
	icons: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: theme.spacing()
	},
	footerItem: {
		width: 'max-content',
		padding: theme.spacing(1, 0.5)
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
				<div className={classes.content}>
					<div className={classes.footerItem}>
						<div className={classes.footerText}>FIND US ON SOCIAL MEDIA</div>
						<div className={classes.icons}>
							<Icon icon={facebook} link="https://www.facebook.com/groups/acmhack/"/>
							<Icon icon={github} link="https://github.com/uclaacm/"/>
							<Icon icon={medium} link="https://medium.com/techatucla"/>
							<Icon icon={twitter} link="https://twitter.com/uclaacm"/>
						</div>
					</div>
					<div className={classes.footerItem}>
						<div>uclaacmhack@gmail.com</div>
						<div>© ACM HACK {(new Date()).getFullYear()}</div>
					</div>
					<div className={classes.footerItem}>
						<a className={classes.buttonLink} href="http://eepurl.com/c5pE6P">
							<Button className={classes.button} variant="contained" color="primary">
								Join our Mailing List
							</Button>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
