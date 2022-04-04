const hackspaceDescription = `
	HackSpace is ACM Hack's beginner-friendly, group-project-based
	series! We'll help you take an app idea and turn it into reality
	step-by-step with dedicated mentorship, work sessions, and mini-workshops
	on project management and technical skills. By the end of this,
	you will have built a project that you can be proud of (and will
	look like a star on your resume).
`;

const httDescription = `
	Hot Tech Tour is ACM Hack's new workshop/competition series!
	Throughout the quarter, we'll introduce several technologies,
	and then let you compete in our fast paced competition sessions!
	If you're interested in cool technologies that go beyond what you'll
	learn in class and challenging puzzles that will test your new
	knowledge, then come on out to Hot Tech Tour Wednesdays 6-8 PM
	in Boelter 9436.
`;


// TODO: Fix links & button names on highlightedEvents

const highlightedEvents = [
	{
		name: 'HackSpace',
		description: hackspaceDescription,
		imgFilePath: 'event/2022s-hackspace-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'Hot Tech Tour',
		description: httDescription,
		imgFilePath: 'event/2022s-htt-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	}
];

module.exports = highlightedEvents;
