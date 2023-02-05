const stackschoolDescription = `
	Want to create the next Twitter or Instagram? Stackschool is the place
	for you! This weekly workshop series will guide you through the necessary
	concepts and code to make your very own full-stack social media app! With
	each workshop only an hour long and recorded, our team will answer all of
	your questions as we learn the MERN tech stack. Hope to see you there!
`;

const HOTHXDescription = `
	Hack on the Hill (HOTH X), our annual, beginner-friendly hackathon, returns!
	With this year's theme of intersections, flex your galaxy brains as you
	explore unique solutions to interdisciplinary issues. With scrumptious food,
	workshops galore, skilled mentors, and fun prizes for the best hacks, we
	hope you're as x-cited as we are!
`;

const highlightedEvents = [
	{
		name: 'StackSchool',
		description: stackschoolDescription,
		imgFilePath: 'event/2023w-stackschool-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hack on the Hill X',
		description: HOTHXDescription,
		imgFilePath: 'event/2023w-hoth-x-banner.png',
		button: 'More Info',
		link: 'https://hoth.uclaacm.com/'
	}
];

module.exports = highlightedEvents;
