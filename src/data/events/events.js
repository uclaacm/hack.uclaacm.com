function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'ACM Fall GM',
		date: getDateTime(2020, 10, 5, 18, 30),
		location: 'Gather Town',
		imgFilePath: 'event/2020f-acm-fall-gm-banner.jpg',
		detailLink: 'https://www.facebook.com/events/334129687838885'
	},
	{
		name: 'Hack Fall GM',
		date: getDateTime(2020, 10, 6, 19),
		location: 'Zoom',
		imgFilePath: 'event/hack-banner.png',
		detailLink: 'https://www.facebook.com/events/634709293879004'
	},
	{
		name: 'Bloom Info Session',
		date: getDateTime(2020, 10, 7, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-banner.jpg',
		detailLink: 'https://www.facebook.com/events/1017939351953490'
	},
	{
		name: 'HackFam Family Kickoff',
		date: getDateTime(2020, 10, 10, 19),
		location: 'Zoom',
		imgFilePath: 'event/2020f-hack-fam-banner.jpg'
		// detailLink: TODO
	},
	{
		name: 'Hackschool: HTML/CSS',
		date: getDateTime(2020, 10, 14, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png'
		// detailLink: TODO
	},
	{
		name: 'Bruin Quest',
		date: getDateTime(2020, 11, 21),
		imgFilePath: 'event/2020f-bquest-banner.png'
		// detailLink: TODO
	}
];

module.exports = events;
