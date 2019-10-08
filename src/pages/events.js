import React from 'react';
import EventPage from '../components/eventpage/eventpage';
import HeadFooter from '../components/headfooter/headfooter';
import SEO from '../components/seo';

function EventStaticPage() {
	return (
		<HeadFooter>
			<SEO title='Events' />
			<EventPage />
		</HeadFooter>
	);
}

export default EventStaticPage;
