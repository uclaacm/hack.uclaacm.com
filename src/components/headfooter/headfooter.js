import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import MenuBar from '../menubar/menubar';

/**
 * HeadeFooter should be used in everypage of the website.
 * Therefore, it is okay to put fonts dependencies here.
 */
function HeadFooter({ children }) {
	return (
		<React.Fragment>
			<Helmet>
				<link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css?family=Chivo:300,400|Palanquin+Dark|Palanquin" rel="stylesheet"/>
			</Helmet>
			<MenuBar />
			{children}
		</React.Fragment>
	);
}

HeadFooter.propTypes = {
	children: PropTypes.node.isRequired
};

export default HeadFooter;
