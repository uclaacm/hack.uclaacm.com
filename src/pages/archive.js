import React from 'react';
import HeadFooter from '../components/HeadFooter/HeadFooter';
import SEO from '../components/SEO';
import ArchivePage from '../components/ArchivePage/ArchivePageTemplate';

function ArchiveStaticPage() {
	return (
		<HeadFooter>
			<SEO title='Workshop Archive' />
			<ArchivePage />
		</HeadFooter>
	);
}

export default ArchiveStaticPage;
