function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'Tooling Series: vim',
		date: getDateTime(2020, 4, 9, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020s-tooling-series-banner.png',
		detailLink: 'https://www.facebook.com/events/538231893546659/'
	},
	{
		name: 'Tooling Series',
		date: getDateTime(2020, 4, 16, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020s-tooling-series-banner.png'
	},
	{
		name: 'Tooling Series',
		date: getDateTime(2020, 4, 23, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020s-tooling-series-banner.png'
	},
	{
		name: 'Tooling Series',
		date: getDateTime(2020, 4, 30, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020s-tooling-series-banner.png'
	},
	{
		name: 'Tooling Series',
		date: getDateTime(2020, 5, 7, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020s-tooling-series-banner.png'
	},
	{
		name: 'Tooling Series',
		date: getDateTime(2020, 5, 14, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020s-tooling-series-banner.png'
	},
	{
		name: 'Tooling Series',
		date: getDateTime(2020, 5, 21, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020s-tooling-series-banner.png'
	},
	{
		name: 'Tooling Series',
		date: getDateTime(2020, 5, 28, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020s-tooling-series-banner.png'
	}
];

module.exports = events;
