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
		name: 'Hackschool: Intro HTML/CSS',
		date: getDateTime(2020, 10, 14, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/1514039708805331'
	},
	{
		name: 'Hackschool: Intro JavaScript',
		date: getDateTime(2020, 10, 21, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153423967007',
		zoomLink: 'https://ucla.zoom.us/j/95779724102?pwd=MkRVbWxzOFBUUXlCTWFicW0reWZ6dz09'
	},
	{
		name: 'Hackschool: DOM API',
		date: getDateTime(2020, 10, 28, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153430633673',
		zoomLink: 'https://ucla.zoom.us/j/98651086587?pwd=Nkg0UG42QnNmcG1iVzBUUWV0dCtXZz09'
	},
	{
		name: 'Hackschool: Advanced CSS',
		date: getDateTime(2020, 11, 4, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153427300340'
		// zoomLink: TODO
	},
	{
		name: 'Hackschool: Async JS & APIs',
		date: getDateTime(2020, 11, 11, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153440633672'
		// zoomLink: TODO
	},
	{
		name: 'Hackschool: Accessibility',
		date: getDateTime(2020, 11, 18, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153433967006'
		// zoomLink: TODO
	},
	{
		name: 'Bruin Quest',
		date: getDateTime(2020, 11, 21),
		imgFilePath: 'event/2020f-bquest-banner.png'
		// detailLink: TODO
		// zoomLink: TODO
	}
];

module.exports = events;
