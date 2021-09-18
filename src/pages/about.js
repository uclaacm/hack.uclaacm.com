import React from 'react';

import HeadFooter from '../components/HeadFooter/HeadFooter';
import PhotoPage from '../components/PhotoPage/PhotoPage';
import SEO from '../components/SEO';

function About() {
	return (
		<HeadFooter>
			<SEO title='About' />
			<PhotoPage />
		</HeadFooter>
	);
}

export default About;
