import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { useTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Footer from '../footer/footer';
import MenuBar from '../menubar/menubar';

const overwriteTheme = defaultTheme => {
	const { palette } = defaultTheme;
	const newPalette = {
		...palette,
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
	};
	const { typography } = defaultTheme;
	const newTypography = {
		...typography,
		useNextVariants: true,
		fontSize: 16,
		fontFamily: '"Chivo", sans-serif',
		h1: { ...typography.h1, fontFamily: '"Palanquin", sans-serif' },
		h2: { ...typography.h2, fontFamily: '"Palanquin", sans-serif' },
		h3: { ...typography.h3, fontFamily: '"Palanquin Dark", sans-serif' },
		h4: { ...typography.h4, fontFamily: '"Palanquin Dark", sans-serif' },
		h5: { ...typography.h5, fontFamily: '"Palanquin Dark", sans-serif' },
		h6: { ...typography.h6, fontFamily: '"Palanquin Dark", sans-serif' },
		body1: { ...typography.body1, fontFamily: '"Chivo", sans-serif' }
	};
	const theme = {
		...defaultTheme,
		palette: newPalette,
		typography: newTypography,
		// governs the maxWidth of all content
		maxWidth: '940px'
	};
	return theme;
};

/**
 * HeadeFooter should be used in everypage of the website.
 * Therefore, it is okay to put fonts dependencies here.
 */
function HeadFooter({ children }) {
	/**
	 * Overwrite the style object here
	 */
	const defaultTheme = useTheme();
	const theme = overwriteTheme(defaultTheme);

	return (
		<MuiThemeProvider theme={theme}>
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
