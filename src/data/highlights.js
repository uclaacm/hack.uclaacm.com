const hothXiDescription = `
	Hack on the Hill is back in its eleventh iteration! A beginner-friendly
	12-hour hackathon, HOTH is the perfect place to learn new skills, meet
	other hackers, and build something awesome. We'll have workshops, mentors,
	and prizes to help (and motivate) you along the way. Whether you're a 
	seasoned veteran looking to start something new or a first-timer who's
	ready to dive in, we have a place for you at HOTH XI. Hope to see you there!
`;

const stackschoolDescription = `
	Great things come in stacks. Pancakes. Money. And technology! This Winter 
	quarter, we are proud to present Stackschool, a weekly workshop series
	that will guide you in building your very own full-stack mobile application.
	We'll be teaching the PERN stack-- PostgreSQL, Express, React, and Node.js.
	Join us for a quarter of fun, learning, and building!
`;

const highlightedEvents = [
	{
		name: 'Stackschool',
		description: stackschoolDescription,
		imgFilePath: 'event/2024w-stackschool-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'HOTH XI',
		description: hothXiDescription,
		imgFilePath: 'event/hack-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	}
];

module.exports = highlightedEvents;
