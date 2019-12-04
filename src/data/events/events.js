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
		imgFilePath: 'event/2019f-js-chat-3.png',
		detailLink: 'https://www.facebook.com/events/529605677827973/'
	},
	{
		name: 'Hackschool Session 3',
		date: getDateTime(2019, 10, 23, 6),
		location: 'Boelter Hall 5249',
		imgFilePath: 'event/2019f-hackschool-week-04.png',
		detailLink: 'https://www.facebook.com/events/2191970381095971/'
	},
	{
		name: 'Hackschool Session 4',
		date: getDateTime(2019, 10, 30, 18),
		location: 'Boelter Hall 5249',
		imgFilePath: 'event/2019f-hackschool-week-05.png',
		detailLink: 'https://www.facebook.com/events/2538988146197728/'
	},
	{
		name: 'JavaScript Chats',
		date: getDateTime(2019, 11, 5, 16),
		location: 'Engineering VI 372',
		imgFilePath: 'event/2019f-js-chat.png',
		detailLink: 'https://www.facebook.com/events/2218345428466168/'
	},
	{
		name: 'Hackschool Session 5',
		date: getDateTime(2019, 11, 6, 18),
		location: 'Boelter Hall 5249',
		imgFilePath: 'event/2019f-hackschool.png',
		detailLink: 'https://www.facebook.com/events/498786154057552/'
	},
	{
		name: 'JavaScript Chats',
		date: getDateTime(2019, 11, 12, 16),
		location: 'Engineering VI 372',
		imgFilePath: 'event/2019f-js-chat.png',
		detailLink: 'https://www.facebook.com/events/2394274167555554/'
	},
	{
		name: 'Hackschool Session 6',
		date: getDateTime(2019, 11, 13, 18),
		location: 'Boelter Hall 5249',
		imgFilePath: 'event/2019f-hackschool.png',
		detailLink: 'https://www.facebook.com/events/1485123381635887/'
	},
	{
		name: 'JavaScript Chats',
		date: getDateTime(2019, 11, 19, 16),
		location: 'Engineering VI 372',
		imgFilePath: 'event/2019f-js-chat.png',
		detailLink: 'https://www.facebook.com/events/507793176477627/'
	},
	{
		name: 'Hackschool Session 7',
		date: getDateTime(2019, 11, 20, 18),
		location: 'Boelter Hall 5249',
		imgFilePath: 'event/2019f-hackschool.png',
		detailLink: 'https://www.facebook.com/events/438677036841201/'
	},
	{
		name: 'Hack Kitchen',
		date: getDateTime(2019, 11, 24, 10),
		location: 'De Neve Plaza Rooms',
		imgFilePath: 'event/2019f-hack-kitchen.png',
		detailLink: 'https://www.facebook.com/events/543973229769879/'
	},
	{
		name: 'Hackschool Celebration',
		date: getDateTime(2019, 12, 4, 18),
		location: 'Boelter Hall 5249',
		imgFilePath: 'event/2019f-hackschool-week-10.png',
		detailLink: 'https://www.facebook.com/events/2366461950273095/'
	}
];

module.exports = events;
