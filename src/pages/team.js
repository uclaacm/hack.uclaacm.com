import React from 'react';

import HeadFooter from '../components/headfooter/headfooter';
import PhotoPage from '../components/photopage/photopage';
import SEO from '../components/seo';

function Team() {
	return (
		<HeadFooter>
			<SEO title='Team' />
			<PhotoPage />
		</HeadFooter>
	);
}

export default Team;
