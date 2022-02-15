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
	},
	{
		name: 'Hack Sprint #1: Intro to Swift',
		date: getDateTime(2022, 01, 12, 18),
		location: 'Zoom',
		imgFilePath: 'event/2022w-hacksprint-banner.png',
		conferenceLink: 'https://ucla.zoom.us/j/93761587241?pwd=aWlsV3FxRzl6clVhRDQ0RHF4dmN6dz09',
		detailLink: 'https://fb.me/e/1AamI7NeY'
	},
	{
		name: 'Hack Sprint #2: Swift Fundamentals',
		date: getDateTime(2022, 01, 19, 18),
		location: 'Zoom',
		imgFilePath: 'event/2022w-hacksprint-banner.png',
		conferenceLink: 'https://ucla.zoom.us/j/93761587241?pwd=aWlsV3FxRzl6clVhRDQ0RHF4dmN6dz09',
		detailLink: 'https://fb.me/e/1tUUXAlUI'
	},
	{
		name: 'Hack Sprint #3: State and Bindings',
		date: getDateTime(2022, 01, 26, 18),
		location: 'Zoom',
		imgFilePath: 'event/2022w-hacksprint-banner.png',
		conferenceLink: 'https://ucla.zoom.us/j/93761587241?pwd=aWlsV3FxRzl6clVhRDQ0RHF4dmN6dz09',
		detailLink: 'https://fb.me/e/5a8xQLIpQ'
	},
	{
		name: 'Hack Sprint #4: Advanced Views',
		date: getDateTime(2022, 02, 02, 18),
		location: 'Zoom',
		imgFilePath: 'event/2022w-hacksprint-banner.png',
		conferenceLink: 'https://ucla.zoom.us/j/93761587241?pwd=aWlsV3FxRzl6clVhRDQ0RHF4dmN6dz09',
		detailLink: 'https://fb.me/e/2mfoAxupx'
	},
	{
		name: 'Hack Sprint #5: Data and Networking',
		date: getDateTime(2022, 02, 09, 18),
		location: 'Zoom',
		imgFilePath: 'event/2022w-hacksprint-banner.png',
		conferenceLink: 'https://ucla.zoom.us/j/93761587241?pwd=aWlsV3FxRzl6clVhRDQ0RHF4dmN6dz09',
		detailLink: 'https://fb.me/e/3z2IY6Dif'
	},
	{
		name: 'Hack Sprint #6: Mini-Talk + Work Session',
		date: getDateTime(2022, 02, 16, 18),
		location: 'Boelter Hall 2760',
		imgFilePath: 'event/2022w-hacksprint-banner.png',
		detailLink: 'https://fb.me/e/1Au0bckPy'
	},
	{
		name: 'Hack Sprint #7: Guest Speaker + Work Session',
		date: getDateTime(2022, 02, 23, 18),
		location: 'Boelter Hall 2760',
		imgFilePath: 'event/2022w-hacksprint-banner.png',
		detailLink: 'https://fb.me/e/1DWt36X25'
	},
	{
		name: 'Hack on the Hill 9',
		date: getDateTime(2022, 02, 26, 9),
		location: 'Hybrid',
		imgFilePath: 'event/2022w-hoth9-banner.png',
		detailLink: 'https://hoth.uclaacm.com/'
	},
	{
		name: 'Hack Sprint #8: Project Showcase',
		date: getDateTime(2022, 03, 02, 18),
		location: 'Boelter Hall 2760',
		imgFilePath: 'event/2022w-hacksprint-banner.png',
		detailLink: 'https://fb.me/e/1evDL3IKB'
	}
];

module.exports = events;
