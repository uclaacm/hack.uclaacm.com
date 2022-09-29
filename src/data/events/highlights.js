const hackschoolDescription = `
	Come out and learn how to make websites in our beginner-friendly Fall
	Hackschool series! We will be teaching the basics of web development
	with React.js, a popular framework of Javascript. No previous experience
	is necessary!
`;

const hackKitchenDescription = `
	Hack Kitchen is a beginner-friendly coding puzzle competition that encourages
	creativity in technology. Participants will be immersed in a full day of
	cooking-show themed puzzles, curveball surprises, and fan-favorite Gordon Ramsay
	references. Will you survive a dinner service from Hell's Kitchen, become
	the next MasterChef, or have your dish on the Chopping block?
`;

const bruinOdysseyDescription = `
	Bruin Odyssey is a quarter-long puzzle challenge hosted by ACM Hack and ACM Cyber.
	Every week from week 3 to week 9, we will be releasing a small set of puzzles
	for participants to solve. You don't need a computer science background to participate
	- just have fun! So flex your problem solving skills!
	Learn a little more about computer science! Challenge your friends!  There will even be
	prizes for the winners!
`;

// TODO: Fix links & button names on highlightedEvents

const highlightedEvents = [
	{
		name: 'Hackschool',
		description: hackschoolDescription,
		imgFilePath: 'event/2022f-hackschool-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5' // TODO: change to fb link if necessary
	},
	{
		name: 'Hack Kitchen',
		description: hackKitchenDescription,
		imgFilePath: 'event/2022f-hack-kitchen-banner.png',
		button: 'Sign Up'
		// link: '' TODO: change Hack Kitchen link
	},
	{
		name: 'Bruin Odyssey',
		description: bruinOdysseyDescription,
		imgFilePath: 'event/2022f-bruin-odyssey-banner.png',
		button: 'Sign Up'
		// link: '' TODO: change Bruin Odyssey link
	}
];

module.exports = highlightedEvents;
