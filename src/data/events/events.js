function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'JavaScript Chat with ACM Hack',
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
		name: 'JavaScript Chat with ACM Hack',
		date: getDateTime(2019, 10, 15, 16),
		location: 'Engineering VI 372',
		imgFilePath: 'event/2019f-js-chat.png'
	},
	{
		name: 'Hackschool Session 2',
		date: getDateTime(2019, 10, 16, 18),
		location: 'Boelter Hall 5249',
		imgFilePath: 'event/2019f-hackschool-week-03.png'
	}
];

module.exports = events;
