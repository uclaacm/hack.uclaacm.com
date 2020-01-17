function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'Hack Sprint',
		date: getDateTime(2020, 1, 16, 18),
		location: 'Covel 227',
		imgFilePath: 'event/2020w-hack-sprint-banner-01.png',
		detailLink: 'https://www.facebook.com/events/486474612057043/'
	},
	{
		name: 'Hack Sprint',
		date: getDateTime(2020, 1, 23, 18),
		location: 'Covel 227',
		imgFilePath: 'event/2020w-hack-sprint-banner-02.png'
	},
	{
		name: 'Hack Sprint',
		date: getDateTime(2020, 1, 30, 18),
		location: 'Covel 227',
		imgFilePath: 'event/2020w-hack-sprint-banner-03.png'
	},
	{
		name: 'Hack Sprint',
		date: getDateTime(2020, 2, 6, 18),
		location: 'Covel 227',
		imgFilePath: 'event/2020w-hack-sprint-banner-04.png'
	},
	{
		name: 'Hack Sprint',
		date: getDateTime(2020, 2, 13, 18),
		location: 'Covel 227',
		imgFilePath: 'event/2020w-hack-sprint-banner-05.png'
	},
	{
		name: 'Hack Sprint',
		date: getDateTime(2020, 2, 20, 18),
		location: 'Covel 227',
		imgFilePath: 'event/2020w-hack-sprint-banner-06.png'
	}
];

module.exports = events;
