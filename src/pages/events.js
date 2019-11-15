import React from 'react';
import EventPage from '../components/EventPage/EventPage';
import HeadFooter from '../components/HeadFooter/HeadFooter';
import SEO from '../components/SEO';

function EventStaticPage() {
	return (
		<HeadFooter>
			<SEO title='Events' />
			<EventPage />
		</HeadFooter>
	);
}

export default EventStaticPage;
