function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'JavaScript Chats',
		date: getDateTime(2019, 10, 8, 16),
		location: 'Engineering VI 372',
		imgFilePath: 'event/2019f-js-chat.png',
		detailLink: 'https://www.facebook.com/events/517868152322071/'
	},
	{
		name: 'Hackschool Session 1',
		date: getDateTime(2019, 10, 9, 18),
		location: 'WG Young Hall CS50',
		imgFilePath: 'event/2019f-hackschool-week-02.png',
		detailLink: 'https://www.facebook.com/events/761474130984313/'
	},
	{
		name: 'JavaScript Chats',
		date: getDateTime(2019, 10, 15, 16),
		location: 'Engineering VI 372',
		imgFilePath: 'event/2019f-js-chat-2.png',
		detailLink: 'https://www.facebook.com/events/475926219661264/'
	},
	{
		name: 'Hackschool Session 2',
		date: getDateTime(2019, 10, 16, 18),
		location: 'Boelter Hall 5249',
		imgFilePath: 'event/2019f-hackschool-week-03.png',
		detailLink: 'https://www.facebook.com/events/2427000610907217/'
	},
	{
		name: 'JavaScript Chats',
		date: getDateTime(2019, 10, 22, 16),
		location: 'Engineering VI 372',
		imgFilePath: 'event/2019f-js-chat.png'
	},
	{
		name: 'Hackschool Session 3',
		date: getDateTime(2019, 10, 23, 6),
		location: 'Boelter Hall 5249',
		imgFilePath: 'event/2019f-hackschool.png'
	}
];

module.exports = events;
