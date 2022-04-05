function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'HackSpace: Ideathon',
		date: getDateTime(2022, 4, 6, 18),
		location: 'Franz Hall 1260',
		imgFilePath: 'event/2022s-hackspace-banner.png',
		detailLink: 'https://fb.me/e/6883dungt'
	},
];

module.exports = events;
