import React from 'react';

import HeadFooter from '../components/HeadFooter/HeadFooter';
import PhotoPage from '../components/PhotoPage/PhotoPage';
import SEO from '../components/SEO';
import Alumni from '../data/events/alumni.js';

function About() {
	return (
		<HeadFooter>
			<SEO title='About' />
			<PhotoPage />
			<Alumni />
		</HeadFooter>
	);
}

export default About;
