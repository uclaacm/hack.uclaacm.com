function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'ACM Winter GM',
		date: getDateTime(2021, 1, 7, 18, 30),
		location: 'Zoom',
		imgFilePath: 'event/2021w-acm-gm.png',
		detailLink: 'https://www.facebook.com/events/243560777169052'
	},
	{
		name: 'Hack Fam Sign-Ups Close',
		date: getDateTime(2021, 1, 10, 23, 59),
		imgFilePath: 'event/2020f-hack-fam-banner.jpg',
		detailLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdfobRwKHUg6PNhlCWEGx8hTWFJ_7Vvk6CevnNtl4WGMSQZtQ/viewform?usp=sf_link'
	},
	{
		name: 'Hack Sprint: React Native',
		date: getDateTime(2021, 1, 13, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021w-hack-sprint-banner.png',
		detailLink: 'https://www.facebook.com/events/843742153026219',
		conferenceLink: 'https://ucla.zoom.us/j/96853716602?pwd=bmc2RUJka3RVRmgvZk1yVUU2czM4UT09'
	},
	{
		name: 'Hack Sprint: Components 1',
		date: getDateTime(2021, 1, 20, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021w-hack-sprint-banner.png',
		detailLink: 'https://www.facebook.com/events/843742153026219',
		conferenceLink: 'https://ucla.zoom.us/j/92235173757?pwd=WHBIekthQWxOUG9IclhYMGdMMXh2Zz09'
	},
	{
		name: 'Hack Sprint: Components 2',
		date: getDateTime(2021, 1, 27, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021w-hack-sprint-banner.png',
		detailLink: 'https://www.facebook.com/events/1320951744938709',
		conferenceLink: 'https://ucla.zoom.us/j/98491678473?pwd=V0pGMVp1UUNXMHg1cXJ2eXFZTU1wUT09'
	},
	{
		name: 'HOTH 8 Applications Close',
		date: getDateTime(2021, 2, 1, 18),
		imgFilePath: 'event/2021w-hoth-banner.png',
		detailLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc2JFWIcGheumXcnACx-eVe1n4jRgo4BzXovX2lxqUFgTYnFg/viewform?usp=sf_link'
	},
	{
		name: 'Hack Sprint: Navigation Pt.1',
		date: getDateTime(2021, 2, 3, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021w-hack-sprint-banner.png',
		detailLink: 'https://www.facebook.com/events/119980543268468',
		conferenceLink: 'https://ucla.zoom.us/j/98725940306?pwd=aGRWYzc5aEVjWmZvMmZ3dmQ3bk9mdz09'
	},
	{
		name: 'Hack Off the Hill 8',
		date: getDateTime(2021, 2, 5, 9),
		location: 'Discord',
		imgFilePath: 'event/2021w-hoth-banner.png'
		// TODO: add facebook link
		// TODO: conferenceLink: add discord link when ready
	},
	{
		name: 'Hack Sprint: Life Cycle & Async',
		date: getDateTime(2021, 2, 10, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021w-hack-sprint-banner.png',
		detailLink: 'https://www.facebook.com/events/119980559935133/'
		// TODO: add zoom link
	},
	{
		name: 'Hack Sprint: Navigation Pt.2',
		date: getDateTime(2021, 2, 17, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021w-hack-sprint-banner.png',
		detailLink: 'https://www.facebook.com/events/119980556601800/'
		// TODO: add zoom link
	},
	{
		name: 'Hack Sprint: Firebase',
		date: getDateTime(2021, 2, 24, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021w-hack-sprint-banner.png',
		detailLink: 'https://www.facebook.com/events/119980546601801/'
		// TODO: add zoom link
	}
];

module.exports = events;
