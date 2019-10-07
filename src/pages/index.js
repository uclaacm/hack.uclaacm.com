import React from 'react';

import HeadFooter from '../components/headfooter/headfooter';
import HomePageComponent from '../components/homepage/homepage';
import SEO from '../components/seo';

function HomePage() {
	return (
		<HeadFooter>
			<SEO title='Home' />
			<HomePageComponent />
		</HeadFooter>
	);
}

export default HomePage;
