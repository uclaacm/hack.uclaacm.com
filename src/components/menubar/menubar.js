import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { Collapse } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/icons/Menu';

import acmhack from './acmhack.svg';
import hackLogo from './hack-logo.svg';
import ButtonBar from './buttonbar';

const styles = theme => ({
	logohome: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	toolbar: {
		backgroundColor: 'white',
		justifyContent: 'space-between',
		padding: '0% 6%'
	},
	logo: {
		height: '1.8rem',
		margin: theme.spacing.unit
	},
	clubname: {
		height: '1.2rem'
	},
	menubtn: {
		// desktop
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			// mobile
			display: 'inline'
		}
	},
	desktopMenuBar: {
		// desktop
		display: 'inline',
		[theme.breakpoints.down('xs')]: {
			// mobile
			display: 'none'
		}
	},
	mobileMenuBar: {
		// desktop
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			// mobile
			display: 'inline'
		},
		// default styling
		boxShadow: theme.shadows[4],
		position: 'fixed',
		zIndex: '1',
		overflow: 'hidden',
		backgroundColor: theme.palette.grey[100],
		width: '100%'
	},
	mobileBtnContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: '3%'
	}
});

function MenuBar({ classes }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(o => !o);

	return (
		<React.Fragment>
			<AppBar position="sticky">
				<Toolbar className={classes.toolbar}>
					<div className={classes.logohome}>
						<img src={hackLogo} className={classes.logo} />
						<img src={acmhack} className={classes.clubname} />
					</div>
					{/* Desktop menu Bar */}
					<div className={classes.desktopMenuBar}>
						<ButtonBar />
					</div>
					{/* This button only shows on mobile */}
					<IconButton onClick={toggleMenu} className={classes.menubtn}>
						<Menu/>
					</IconButton>
				</Toolbar>
			</AppBar>

			{/* Mobile menu Bar */}
			<div className={classes.mobileMenuBar}>
				<Collapse in={menuOpen}>
					<div className={classes.mobileBtnContainer}>
						<ButtonBar />
					</div>
				</Collapse>
			</div>

		</React.Fragment>
	);
}

MenuBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);
