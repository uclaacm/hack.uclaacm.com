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
		name: 'ACM Fall GM',
		date: getDateTime(2022, 9, 26, 18),
		location: 'Ackerman Grand Ballroom',
		imgFilePath: 'event/2022f-acm-gm-banner.png',
		detailLink: 'https://fb.me/e/2gCxCwAsB'
	},
	{
		name: 'Hack Fall GM',
		date: getDateTime(2022, 9, 28, 18),
		location: 'Haines Hall A2',
		imgFilePath: 'event/hack-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	// {
	// 	name: 'Hack Kitchen',
	// 	date: getDateTime(2022, 11, 5, 10),
	// 	location: 'Palisades A-F, Carnesale Commons',
	// 	imgFilePath: 'event/2022f-hack-kitchen-banner.png',
	// 	detailLink: 'https://discord.gg/rup2p6fxA5',
	// 	rsvpLink: 'http://links.uclaacm.com/hack-kitchen-f22-application'
	// },
	{
		name: 'Hackschool #1: Intro to React/HTML',
		date: getDateTime(2022, 10, 5, 18),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2022f-hackschool-banner.png',
		detailLink: 'https://fb.me/e/2jIVJgX9j'
	},
	{
		name: 'Hackschool #2: CSS and Layout',
		date: getDateTime(2022, 10, 12, 18),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2022f-hackschool-banner.png',
		detailLink: 'https://fb.me/e/1UnT73NXu',
		rsvpLink: 'http://links.uclaacm.com/hackschool-f22-s2-rsvp'
	},
	{
		name: 'Hackschool #3: Components and Props',
		date: getDateTime(2022, 10, 19, 18),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2022f-hackschool-banner.png',
		detailLink: 'https://fb.me/e/1UpJekXg9',
		rsvpLink: 'http://links.uclaacm.com/hackschool-f22-s3-rsvp'
	},
	{
		name: 'Hackschool #4: JavaScript and Navigation',
		date: getDateTime(2022, 10, 26, 18),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2022f-hackschool-banner.png',
		detailLink: 'https://fb.me/e/2R34YOYpu',
		rsvpLink: 'http://links.uclaacm.com/hackschool-f22-s4-rsvp'
	},
	{
		name: 'Hackschool #5: Handling State and Events',
		date: getDateTime(2022, 11, 2, 18),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2022f-hackschool-banner.png',
		detailLink: 'https://fb.me/e/2dprNVNMx',
		rsvpLink: 'http://links.uclaacm.com/hackschool-f22-s5-rsvp'
	},
	{
		name: 'Hackschool #6: Lifecycle',
		date: getDateTime(2022, 11, 9, 18),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2022f-hackschool-banner.png',
		detailLink: 'https://fb.me/e/1UpJekXg9'
	},
	{
		name: 'Hackschool #7: Project Showcase',
		date: getDateTime(2022, 11, 16, 18),
		location: 'Haines Hall A2',
		imgFilePath: 'event/2022f-hackschool-banner.png',
		detailLink: 'https://fb.me/e/1UpJekXg9'
	}
];

module.exports = events;
