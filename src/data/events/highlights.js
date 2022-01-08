const hackSprintDescription = `
	Come out to ACM Hack's Hack Sprint, a beginner-friendly mobile
	development workshop series! We'll be covering everything in
	Swift from building your app from scratch to publishing a fully
	functional app on the App Store. Our series will end with a
	chance for each of you to create your own apps while guided by
	our mentors.
`;

const hothDescription = `
	Hack on the Hill (HOTH 9) is our annual hackathon.
	This beginner-friendly hackathon is designed to give you a
	glimpse of a real hackathon. There will be food, workshops,
	mentors, and fun prizes for the best hacks!
`;


// TODO: Fix links & button names on highlightedEvents

const highlightedEvents = [
	{
		name: 'Hack Sprint',
		description: hackSprintDescription,
		imgFilePath: 'event/2022w-hacksprint-banner.png',
		button: 'Curriculum',
		// link: '' TODO: Will update when the repo is created
	},
	{
		name: 'Hack on the Hill 9',
		description: hothDescription,
		imgFilePath: 'event/2022w-temp-hoth-banner.png',
		button: 'More Info',
		// link: '' TODO: Will update when more details arrive
	},
];

module.exports = highlightedEvents;
