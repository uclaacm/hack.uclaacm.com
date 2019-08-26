import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Footer from '../footer/footer';
import MenuBar from '../menubar/menubar';

const overwrittenTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#C960FF',
			light: '#d37fff',
			dark: '#352A3A',
			contrastText: '#fff'
		},
		secondary: {
			main: '#ED3266',
			light: '#f05b84',
			dark: '#a52347',
			contrastText: '#fff'
		}
	},
	typography: {
		useNextVariants: true,
		fontSize: 16,
		fontFamily: '"Chivo", sans-serif',
		h1: { fontFamily: '"Palanquin", sans-serif' },
		h2: { fontFamily: '"Palanquin", sans-serif' },
		h3: { fontFamily: '"Palanquin Dark", sans-serif' },
		h4: { fontFamily: '"Palanquin Dark", sans-serif' },
		h5: { fontFamily: '"Palanquin Dark", sans-serif' },
		h6: { fontFamily: '"Palanquin Dark", sans-serif' },
		body1: { fontFamily: '"Chivo", sans-serif' }
	},
	maxWidth: '940px'
});

/**
 * HeadeFooter should be used in everypage of the website.
 * Therefore, it is okay to put fonts dependencies here.
 */
function HeadFooter({ children }) {
	/**
	 * Overwrite the style object here
	 */
	return (
		<MuiThemeProvider theme={overwrittenTheme}>
			{/* Go to Material-UI docs to learn why we use CssBasline */}
			<CssBaseline />
			<Helmet>
				<link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css?family=Chivo:300,400|Palanquin+Dark|Palanquin" rel="stylesheet"/>
			</Helmet>
			<MenuBar />
			{children}
			<Footer />
		</MuiThemeProvider>
	);
}

HeadFooter.propTypes = {
	children: PropTypes.node.isRequired
};

export default HeadFooter;
