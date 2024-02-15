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
	{
		name: 'Stackschool #1: Intro to Full Stack Mobile Dev',
		date: getDateTime(2024, 1, 18, 18),
		location: 'Kaplan Hall 135',
		imgFilePath: 'event/2024w-stackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Stackschool #2: Frontend',
		date: getDateTime(2024, 1, 25, 18),
		location: 'Kaplan Hall 135',
		imgFilePath: 'event/2024w-stackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Stackschool #3: SQL',
		date: getDateTime(2024, 2, 1, 18),
		location: 'Kaplan Hall 135',
		imgFilePath: 'event/2024w-stackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Stackschool #4: Servers',
		date: getDateTime(2024, 2, 8, 18),
		location: 'Kaplan Hall 135',
		imgFilePath: 'event/2024w-stackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Stackschool #5: Linking Frontend & User Auth (Part 1)',
		date: getDateTime(2024, 2, 15, 18),
		location: 'Kaplan Hall 135',
		imgFilePath: 'event/2024w-stackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Stackschool #6: User Auth (Part 2)',
		date: getDateTime(2024, 2, 22, 18),
		location: 'Kaplan Hall 135',
		imgFilePath: 'event/2024w-stackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Stackschool #7: External APIs',
		date: getDateTime(2024, 2, 29, 18),
		location: 'Kaplan Hall 135',
		imgFilePath: 'event/2024w-stackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Stackschool #8: Project Showcase',
		date: getDateTime(2024, 3, 7, 18),
		location: 'Kaplan Hall 135',
		imgFilePath: 'event/2024w-stackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hack On The Hill XI',
		date: getDateTime(2024, 3, 2, 8),
		location: 'Location to be announced!',
		imgFilePath: 'event/2024w-hoth-XI-banner.png',
		detailLink: 'https://hoth.uclaacm.com/'
	}
];

module.exports = events;
