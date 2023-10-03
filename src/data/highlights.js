const hackFamDescription = `
	Hey fam! Here to (pumpkin) spice up your fall quarter is Hack Fam,
	our one-and-only, fam-tastic family system! Join us for a quarter
	of unbe-leaf-able fun as we make new friends, build tight-knit
	connections with people of similar interests, play games, and learn
	from each other. Whether you're looking for mentorship or a
	community, Hack Fam is the pick of the patch!
`;

const hackschoolDescription = `
	Brrrringgggg! Hackschool is now in session! Throughout the quarter,
	our beginner-friendly, flagship web development workshop series
	will help you learn and utilize skills such as HTML, CSS, and
	React.JS to build your very own website! All are welcome to learn,
	build, code, and eat with us, so pencil Hackschool into your schedule!
	We’ll see you there!
`;

const highlightedEvents = [
	{
		name: 'Hackschool',
		description: hackschoolDescription,
		imgFilePath: 'event/2023f-hackschool-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'HackFam',
		description: hackFamDescription,
		imgFilePath: 'event/2023f-hackfam-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	}
];

module.exports = highlightedEvents;
