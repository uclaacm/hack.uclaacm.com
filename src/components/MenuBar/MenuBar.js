import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Drawer, useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import ButtonBar from './ButtonBar';
import { ReactComponent as HackLogo } from '../../images/acm-hack-logo.svg';
import { ReactComponent as ACMHackWordmark } from '../../images/acm-hack-wordmark.svg';
import { makeStyles, useTheme } from '@material-ui/styles';

/**
 * This is the limit of the screensize where the MenuBar
 * should switch between desktop and mobile.
 */
const mobileAdaptiveThreshold = theme => theme.breakpoints.values.sm * 1.05;

const useStyles = makeStyles(theme => {
	const menuBarAdaptiveThreshold = mobileAdaptiveThreshold(theme);
	return {
		logohome: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer'
		},
		appbar: {
			zIndex: theme.zIndex.modal + 1 // overlap on mobile drawer
		},
		toolbar: {
			backgroundColor: 'white',
			justifyContent: 'space-between',
			padding: '0% 6%'
		},
		logo: {
			height: '1.8rem',
			marginRight: theme.spacing(1)
		},
		wordmark: {
			height: '1.2rem'
		},
		menubtn: {
			// desktop
			display: 'none',
			[theme.breakpoints.down(menuBarAdaptiveThreshold)]: {
				// mobile
				display: 'inline'
			}
		},
		desktopMenuBar: {
			// desktop
			display: 'inline',
			[theme.breakpoints.down(menuBarAdaptiveThreshold)]: {
				// mobile
				display: 'none'
			}
		},
		mobileMenuBar: {
			// desktop
			display: 'none',
			[theme.breakpoints.down(menuBarAdaptiveThreshold)]: {
				// mobile
				display: 'inline'
			},
			// default styling
			boxShadow: theme.shadows[4],
			position: 'fixed',
			overflow: 'hidden',
			backgroundColor: theme.palette.grey[100],
			width: '100%'
		},
		mobileBtnContainer: {
			top: theme.spacing(7),
			padding: theme.spacing(1)
		}
	};
});

function MenuBar() {
	const classes = useStyles();

	// only control state in mobile
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(o => !o);

	const theme = useTheme();
	const threshold = mobileAdaptiveThreshold(theme);
	const isMobile = useMediaQuery(theme.breakpoints.down(threshold));

	// if we got out of mobile, we force the menu to close
	useEffect(() => {
		if (!isMobile) {
			setMenuOpen(false);
		}
	}, [isMobile]);

	return (
		<React.Fragment>
			<AppBar position="sticky" classes={{ root: classes.appbar }}>
				<Toolbar className={classes.toolbar}>
					<div
						className={classes.logohome}
						onClick={() => navigate('/')}
					>
						<HackLogo className={classes.logo} />
						<ACMHackWordmark className={classes.wordmark} />
					</div>
					{/* Desktop menu Bar */}
					<div className={classes.desktopMenuBar}>
						<ButtonBar />
					</div>
					{/* This button only shows on mobile */}
					<IconButton onClick={toggleMenu} className={classes.menubtn}>
						<MenuIcon/>
					</IconButton>

					{/* Mobile menu Bar */}
					<Drawer
						anchor="top"
						open={menuOpen}
						onClose={() => setMenuOpen(false)}
						ModalProps={{ disableScrollLock: true }}
						PaperProps={{
							classes: { root: classes.mobileBtnContainer }
						}}
						transitionDuration={{
							enter: !isMobile ? 0 : theme.transitions.duration.enteringScreen,
							exit: !isMobile ? 0 : theme.transitions.duration.leavingScreen
						}}
					>
						<ButtonBar isMobile/>
					</Drawer>

				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default MenuBar;
