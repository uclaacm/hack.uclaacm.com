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
		detailLink: 'https://www.facebook.com/events/821281985127542',
		conferenceLink: 'https://ucla.zoom.us/j/96479714488?pwd=U0k1ZTdNWFJqTVhyRGN5NXpIZC9hQT09'
	},
	{
		name: 'learn.py: Classes',
		date: getDateTime(2021, 4, 21, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		detailLink: 'https://www.facebook.com/events/821282008460873',
		conferenceLink: 'https://ucla.zoom.us/j/92644186152?pwd=L1FPaVJkNTVHc2Exays0MzhvVmppUT09'
	},
	{
		name: 'learn.py: Automation',
		date: getDateTime(2021, 4, 28, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		detailLink: 'https://www.facebook.com/events/821281998460874',
		conferenceLink: 'https://ucla.zoom.us/j/95505612857?pwd=dGFvY3AvUnAycjErcVNhckNRaEdVZz09'
	},
	{
		name: 'learn.py: Web Scraping',
		date: getDateTime(2021, 5, 5, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		detailLink: 'https://www.facebook.com/events/821281991794208'
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'learn.py: Web Development',
		date: getDateTime(2021, 5, 12, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		detailLink: 'https://www.facebook.com/events/821282011794206'
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'learn.py: Web API\'s',
		date: getDateTime(2021, 5, 19, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		detailLink: 'https://www.facebook.com/events/821282001794207'
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'learn.py: Standard Library',
		date: getDateTime(2021, 5, 26, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-learnpy.png',
		detailLink: 'https://www.facebook.com/events/821282005127540'
		// conferenceLink: 'https://ucla.zoom.us/j/93051736523?pwd=NWZtMldieDZDY1ZtVnhERDdDWGsxdz09'
	},
	{
		name: 'JavaScript Chats',
		date: getDateTime(2021, 4, 13, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-js-chats.png',
		detailLink: 'https://www.facebook.com/events/3812752955446637',
		conferenceLink: 'https://ucla.zoom.us/j/96645107188?pwd=NlVSZjlPS2VjS1pXRXV1STBWM2dxdz09'
	},
	{
		name: 'JavaScript Chats',
		date: getDateTime(2021, 4, 20, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-js-chats.png',
		detailLink: 'https://www.facebook.com/events/3812752958779970',
		conferenceLink: 'https://ucla.zoom.us/j/97774200865?pwd=UGo0NndUVG1teWF4SFp1c2Jxaithdz09'
	},
	{
		name: 'JavaScript Chats',
		date: getDateTime(2021, 4, 27, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-js-chats.png',
		detailLink: 'https://www.facebook.com/events/3812752962113303',
		conferenceLink: 'https://ucla.zoom.us/j/94864002032?pwd=aXVQZzhybTJSN05rTE5oc3c4WWxjQT09'
	},
	{
		name: 'JavaScript Chats',
		date: getDateTime(2021, 5, 4, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-js-chats.png',
		detailLink: 'https://www.facebook.com/events/3812752965446636'
	},
	{
		name: 'JavaScript Chats',
		date: getDateTime(2021, 5, 11, 18),
		location: 'Zoom',
		imgFilePath: 'event/2021s-js-chats.png',
		detailLink: 'https://www.facebook.com/events/3812752952113304'
	},
	{
		name: 'Hack Kitchen',
		date: getDateTime(2021, 5, 8, 9),
		location: 'Discord',
		imgFilePath: 'event/2021s-hack-kitchen.png',
		detailLink: 'https://fb.me/e/2dL59eGz1'
	}
];

module.exports = events;
