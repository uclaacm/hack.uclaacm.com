import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import acmhack from './acmhack.svg';
import hackLogo from './hack-logo.png';
import menubtn from './menu.svg';
import ButtonBar from './buttonbar';
import { Collapse } from '@material-ui/core';

const StyleHeader = () =>
	<Helmet>
		<link href="https://fonts.googleapis.com/css?family=Poppins:400,500" rel="stylesheet"/>
	</Helmet>;

const styles = theme => ({
	logohome: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer'
	},
	toolbar: {
		backgroundColor: 'white',
		color: '#352A3A',
		justifyContent: 'space-between',
		padding: '0% 6%'
	},
	logo: {
		height: theme.typography.fontSize * 1.8,
		margin: theme.spacing.unit
	},
	clubname: {
		height: theme.typography.fontSize * 1.2
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
		overflow: 'hidden',
		[theme.breakpoints.down('xs')]: {
			// mobile
			display: 'inline'
		}
	},
	mobileBtnContainer: {
		display: 'flex',
		zIndex: '1',
		flexDirection: 'column',
		width: '100%',
		backgroundColor: '#white',
		padding: '3%'
	}
});

class MenuBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpen: false
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		const { menuOpen } = this.state;
		this.setState({
			menuOpen: !menuOpen
		});
	}

	render() {
		const { classes } = this.props;
		const { menuOpen } = this.state;

		return (
			<React.Fragment>
				<StyleHeader/>
				<AppBar position="static">
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
						<IconButton onClick={this.toggleMenu} className={classes.menubtn}>
							<img src={menubtn} />
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
}

MenuBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);
