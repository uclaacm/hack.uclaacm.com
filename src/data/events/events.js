function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'JavaScript Chats',
		date: getDateTime(2021, 4, 6, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-js-chats.png',
		detailLink: 'https://www.facebook.com/events/3812752948779971',
		conferenceLink: 'https://ucla.zoom.us/j/99965619189?pwd=TmlwWHBBenYxWjI1dHRlcGtkanBZdz09'
	},
	{
		name: 'learn.py: Intro to Python',
		date: getDateTime(2021, 4, 7, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		detailLink: 'https://www.facebook.com/events/821281995127541',
		conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'learn.py: Data Structures',
		date: getDateTime(2021, 4, 14, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		// detailLink: 'https://www.facebook.com/events/821281995127541',
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'learn.py: Classes',
		date: getDateTime(2021, 4, 21, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		// detailLink: 'https://www.facebook.com/events/821281995127541',
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'learn.py: Automation',
		date: getDateTime(2021, 4, 28, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		// detailLink: 'https://www.facebook.com/events/821281995127541',
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'learn.py: Web Scraping',
		date: getDateTime(2021, 5, 5, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		// detailLink: 'https://www.facebook.com/events/821281995127541',
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'learn.py: Web Development',
		date: getDateTime(2021, 5, 12, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		// detailLink: 'https://www.facebook.com/events/821281995127541',
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'learn.py: Web API\'s',
		date: getDateTime(2021, 5, 19, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		// detailLink: 'https://www.facebook.com/events/821281995127541',
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'learn.py: Standard Library',
		date: getDateTime(2021, 5, 26, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		// detailLink: 'https://www.facebook.com/events/821281995127541',
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	}
];

module.exports = events;
