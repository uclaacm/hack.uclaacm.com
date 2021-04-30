import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const overwrittenTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#C960FF',
			light: '#9C28C5',
			dark: '#3E2961',
			contrastText: '#fff'
		},
		secondary: {
			main: '#FF477E',
			light: '#f05b84',
			dark: '#a52347',
			contrastText: '#fff'
		}
	},
	typography: {
		useNextVariants: true,
		fontSize: 16,
		fontFamily: '"Poppins", sans-serif',
		h1: { fontFamily: '"Poppins", sans-serif', fontWeight: '600' },
		h2: { fontFamily: '"Poppins", sans-serif', fontWeight: '600' },
		h3: { fontFamily: '"Poppins", sans-serif', fontWeight: '600' },
		h4: { fontFamily: '"Poppins", sans-serif', fontWeight: '600' },
		h5: { fontFamily: '"Poppins", sans-serif', fontWeight: '500' },
		h6: { fontFamily: '"Poppins", sans-serif', fontWeight: '500' },
		body1: { fontFamily: '"Open Sans", sans-serif' },
		button: { fontFamily: '"Open Sans", sans-serif', fontWeight: '600' }
	}
});

const useStyles = makeStyles(() => ({
	wrapper: {
		minHeight: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	headFooter: {
		flexShrink: 0
	},
	main: {
		flexGrow: 1
	}
}));

/**
 * HeadeFooter should be used in everypage of the website.
 * Therefore, it is okay to put fonts dependencies here.
 */
function HeadFooter({ children }) {
	/**
	 * Overwrite the style object here
	 */
	const classes = useStyles();
	return (
		<MuiThemeProvider theme={responsiveFontSizes(overwrittenTheme)}>
			{/* Go to Material-UI docs to learn why we use CssBasline */}
			<CssBaseline />
			<Helmet>
				<link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600" rel="stylesheet"/>
			</Helmet>
			<div className={classes.wrapper}>
				<header className={classes.headFooter}>
					<MenuBar/>
				</header>
				<main className={classes.main}>
					{children}
				</main>
				<footer className={classes.headFooter}>
					<Footer />
				</footer>
			</div>
		</MuiThemeProvider>
	);
}

HeadFooter.propTypes = {
	children: PropTypes.node.isRequired
};

export default HeadFooter;
