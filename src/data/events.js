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
		name: 'ACM Hack Fall GMM',
		date: getDateTime(2023, 10, 5, 18),
		location: 'Kaplan Hall A65',
		imgFilePath: 'event/hack-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5',
		rsvpLink: 'https://forms.gle/LypLnQuQxNoeRpSV6'
	},
	{
		name: 'Meet the Hack Fam Heads',
		date: getDateTime(2023, 10, 6, 18),
		location: 'Courtyard in front of Royce Hall',
		imgFilePath: 'event/2023f-hackfam-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hack Fam Head Reveal',
		date: getDateTime(2023, 10, 9, 18),
		location: 'Ackerman Bruin Reception Room',
		imgFilePath: 'event/2023f-hackfam-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Arts and Crafts Social',
		date: getDateTime(2023, 10, 21, 14),
		location: 'Ouside of Saxon Lounge',
		imgFilePath: 'event/2023f-hackfam-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Gaming Social',
		date: getDateTime(2023, 11, 19, 14),
		location: 'Saxon Lounge',
		imgFilePath: 'event/2023f-hackfam-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5',
		rsvpLink: 'https://forms.gle/t8Gck1Xcg67hdV7L8'
	},
	{
		name: 'Closing Ceremony',
		date: getDateTime(2023, 12, 6, 18),
		location: 'Ackerman Bruin Reception Room',
		imgFilePath: 'event/2023f-hackfam-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hackschool #1: Intro to HTML/CSS/JS',
		date: getDateTime(2023, 10, 12, 18),
		location: 'Kaplan Hall A65',
		imgFilePath: 'event/2023f-hackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hackschool #2: Intro to React',
		date: getDateTime(2023, 10, 19, 18),
		location: 'Kaplan Hall A65',
		imgFilePath: 'event/2023f-hackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hackschool #3: Events and State',
		date: getDateTime(2023, 10, 26, 18),
		location: 'Kaplan Hall A65',
		imgFilePath: 'event/2023f-hackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hackschool #4: Navigation',
		date: getDateTime(2023, 11, 2, 18),
		location: 'Kaplan Hall A65',
		imgFilePath: 'event/2023f-hackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hackschool #5: Servers',
		date: getDateTime(2023, 11, 9, 18),
		location: 'Kaplan Hall A65',
		imgFilePath: 'event/2023f-hackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hackschool #6: APIs + Copilot / GPT',
		date: getDateTime(2023, 11, 16, 18),
		location: 'Kaplan Hall A65',
		imgFilePath: 'event/2023f-hackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hackschool #7: Showcase',
		date: getDateTime(2023, 11, 30, 18),
		location: 'Kaplan Hall A65',
		imgFilePath: 'event/2023f-hackschool-banner.png',
		detailLink: 'https://discord.gg/rup2p6fxA5'
	}
];

module.exports = events;
