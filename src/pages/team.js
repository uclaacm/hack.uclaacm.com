import React from 'react';

import HeadFooter from '../components/HeadFooter/HeadFooter';
import PhotoPage from '../components/PhotoPage/PhotoPage';
import SEO from '../components/SEO';

function Team() {
	return (
		<HeadFooter>
			<SEO title='Team' />
			<PhotoPage />
		</HeadFooter>
	);
}

export default Team;
