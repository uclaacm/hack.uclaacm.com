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
	// 	name: 'HOTH X',
	// 	date: getDateTime(2023, 3, 4, 9), //TODO: get time for HOTH
	// 	location: 'De Neve Plaza Rooms A and B',
	// 	imgFilePath: 'event/2023w-hoth-x-banner.png',
	// 	detailLink: 'https://discord.gg/rup2p6fxA5',
	// 	rsvpLink: 'http://links.uclaacm.com/hack-kitchen-f22-application'
	// },
	{
		name: 'StackSchool #1: Intro to Full Stack',
		date: getDateTime(2023, 1, 19, 18, 30),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2023w-stackschool-banner.png',
		detailLink: 'https://fb.me/e/2jb25JTVD'
	},
	{
		name: 'StackSchool #2: Databases',
		date: getDateTime(2023, 1, 26, 18, 30),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2023w-stackschool-banner.png',
		detailLink: 'https://fb.me/e/2dk6RkKiW'
	},
	{
		name: 'StackSchool #3: Servers and APIs',
		date: getDateTime(2023, 2, 2, 18, 30),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2023w-stackschool-banner.png',
		detailLink: 'https://fb.me/e/3il51S8WO'
	},
	{
		name: 'StackSchool #4: Backend Integration',
		date: getDateTime(2023, 2, 16, 18, 30),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2023w-stackschool-banner.png',
		detailLink: 'https://fb.me/e/2jb25JTVD'
	},
	{
		name: 'StackSchool #5: Prettifying the React App',
		date: getDateTime(2023, 2, 23, 18, 30),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2023w-stackschool-banner.png',
		detailLink: 'https://fb.me/e/2jb25JTVD'
	},
	{
		name: 'StackSchool #6: Project Finish',
		date: getDateTime(2023, 3, 2, 18, 30),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2023w-stackschool-banner.png',
		detailLink: 'https://fb.me/e/2jb25JTVD'
	}
];

module.exports = events;
