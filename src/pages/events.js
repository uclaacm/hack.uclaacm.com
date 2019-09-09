import React from 'react';
import EventPage from '../components/eventpage/eventpage';
import HeadFooter from '../components/headfooter/headfooter';

function EventStaticPage() {
	return (
		<HeadFooter>
			<EventPage />
		</HeadFooter>
	);
}

export default EventStaticPage;
