import React from 'react';

import HeadFooter from '../components/HeadFooter/HeadFooter';
import HomePageComponent from '../components/HomePage/HomePage';
import SEO from '../components/SEO';

function HomePage() {
	return (
		<HeadFooter>
			<SEO title='Home' />
			<HomePageComponent />
		</HeadFooter>
	);
}

export default HomePage;
