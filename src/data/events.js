function getDateTime(
	year,
	month = 1,
	day = 1,
	hour = 0,
	minute = 0,
	second = 0
) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	// {
	// 	name: 'MiniHack',
	// 	date: getDateTime(2023, 4, 20, 9, 30),
	// 	location: 'Carnesale Commons Palisades Room',
	// 	imgFilePath: 'event/hack-banner.png',
	// 	detailLink: 'https://hoth.uclaacm.com/',
	// 	rsvpLink: 'https://forms.gle/n7Do1oZv7noBYqt18'
	// },
	{
		name: 'HackCloud #1: Intro and Storage',
		date: getDateTime(2023, 4, 20, 19, 30),
		location: 'Engineering VI 289',
		imgFilePath: 'event/2023s-hackcloud-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'HackCloud #2: VM Computing',
		date: getDateTime(2023, 4, 27, 19, 30),
		location: 'Engineering VI 289',
		imgFilePath: 'event/2023s-hackcloud-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'HackCloud #3: Serverless Computing',
		date: getDateTime(2023, 5, 4, 19, 30),
		location: 'Engineering VI 289',
		imgFilePath: 'event/2023s-hackcloud-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'HackCloud #4: DevOps and Cloud',
		date: getDateTime(2023, 5, 11, 19, 30),
		location: 'Engineering VI 289',
		imgFilePath: 'event/2023s-hackcloud-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'HackCloud #5: Machine Learning',
		date: getDateTime(2023, 5, 18, 19, 30),
		location: 'Engineering VI 289',
		imgFilePath: 'event/2023s-hackcloud-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'HackCloud #6: Data Science',
		date: getDateTime(2023, 5, 25, 19, 30),
		location: 'Engineering VI 289',
		imgFilePath: 'event/2023s-hackcloud-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	}
];

module.exports = events;
