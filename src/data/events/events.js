function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'ACM Winter GM',
		date: getDateTime(2022, 01, 06, 18, 30),
		location: 'Zoom',
		imgFilePath: 'event/2022w-acm-winter-gm.jpg',
		rsvpLink: 'http://links.uclaacm.com/wintergm-rsvp-22',
		detailLink: 'https://fb.me/e/4QIpqlopc'
	}
];

module.exports = events;
