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
		name: "HackSpace: Ideathon",
		date: getDateTime(2022, 4, 6, 18),
		location: "Franz Hall 1260",
		imgFilePath: "event/2022s-hackspace-banner.png",
		detailLink: "https://fb.me/e/6883dungt",
	},
	{
		name: "Hot Tech Tours: Git/VS Code/Shell Scripting",
		date: getDateTime(2022, 4, 13, 18),
		imgFilePath: "event/2022s-htt-banner.png",
		location: "Boelter Hall 9436",
		detailLink: "https://fb.me/e/1JS1j6ske",
	},
	{
		name: "HackSpace: Project Management & Git",
		date: getDateTime(2022, 4, 14, 18),
		imgFilePath: "event/2022s-hackspace-banner.png",
		location: "Math Sciences 6229",
		detailLink: "https://fb.me/e/1abuEJLFD",
	},
	{
		name: "Hot Tech Tours: Puzzle Night",
		date: getDateTime(2022, 4, 20, 18),
		imgFilePath: "event/2022s-htt-banner.png",
		location: "Boelter Hall 9436",
		detailLink: "https://fb.me/e/1JS1j6ske",
	},
	{
		name: "HackSpace: Work Session",
		date: getDateTime(2022, 4, 21, 18),
		imgFilePath: "event/2022s-hackspace-banner.png",
		location: "Math Sciences 6229",
		detailLink: "https://fb.me/e/1abuEJLFD",
	},
	{
		name: "Hot Tech Tours: Svelte",
		date: getDateTime(2022, 5, 4, 18),
		imgFilePath: "event/2022s-htt-banner.png",
		location: "Boelter Hall 9436",
		detailLink: "https://fb.me/e/1JS1j6ske",
	},
	{
		name: "HackSpace: Figma & Further",
		date: getDateTime(2022, 4, 28, 18),
		imgFilePath: "event/2022s-hackspace-banner.png",
		location: "Math Sciences 6229",
		detailLink: "https://fb.me/e/1GGKX9O3e",
	},
	{
		name: "Hot Tech Tours: Puzzle Night",
		date: getDateTime(2022, 5, 10, 18),
		imgFilePath: "event/2022s-htt-banner.png",
		location: "Young Hall CS24",
		detailLink: "https://fb.me/e/1JS1j6ske",
	},
	{
		name: "HackSpace: Work Session",
		date: getDateTime(2022, 5, 5, 18),
		imgFilePath: "event/2022s-hackspace-banner.png",
		location: "Math Sciences 6229",
		detailLink: "https://fb.me/e/1abuEJLFD",
	},
	{
		name: "Hot Tech Tours: Firebase",
		date: getDateTime(2022, 5, 18, 18),
		imgFilePath: "event/2022s-htt-banner.png",
		location: "Boelter Hall 9436",
		detailLink: "https://fb.me/e/1JS1j6ske",
	},
	{
		name: "HackSpace: Work Session",
		date: getDateTime(2022, 5, 12, 18),
		imgFilePath: "event/2022s-hackspace-banner.png",
		location: "Math Sciences 6229",
		detailLink: "https://fb.me/e/1abuEJLFD",
	},
	{
		name: "Hot Tech Tours: Puzzle Night",
		date: getDateTime(2022, 5, 25, 18),
		imgFilePath: "event/2022s-htt-banner.png",
		location: "Boelter Hall 9436",
		detailLink: "https://fb.me/e/1JS1j6ske",
	},
	{
		name: "HackSpace: Work Session",
		date: getDateTime(2022, 5, 19, 18),
		imgFilePath: "event/2022s-hackspace-banner.png",
		location: "Math Sciences 6229",
		detailLink: "https://fb.me/e/1abuEJLFD",
	},
	{
		name: "HackSpace: Project Showcase",
		date: getDateTime(2022, 5, 26, 18),
		imgFilePath: "event/2022s-hackspace-banner.png",
		location: "Math Sciences 6229",
		detailLink: "https://fb.me/e/1abuEJLFD",
	},
];

module.exports = events;
