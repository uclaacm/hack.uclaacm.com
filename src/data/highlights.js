const hackcloudDescription = `
	Atten-sun please! Are you ready to t-rain your cloud computing skills
	with another hack workshop that's going to blow you away? HackCloud
	is a workshop series designed to build a strong intuition
	for cloud computing fundamentals and best practices. Complementing
	the theory, each workshop will feature practical and thorough
	hands-on demos with AWS, so coming by every Thursday might just be the
	strat-us!
`;

const minionhackDescription = `
	Ready to go bananas and learn programming tools that aren’t
	taught in university curricula? Introducing MiniHack: a one-day
	event filled with super fun minion-themed workshops and puzzles
	that covers topics including Git, shell, Vim, and LaTeX. Join us
	for a day of learning and fun as you tackle programming challenges
	and pick up valuable skills while Gru-ping up with fellow minions!
`;

const highlightedEvents = [
	{
		name: 'HackCloud',
		description: hackcloudDescription,
		imgFilePath: 'event/2023s-hackcloud-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'MinionHack',
		description: minionhackDescription,
		imgFilePath: 'event/hack-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	}
];

module.exports = highlightedEvents;
