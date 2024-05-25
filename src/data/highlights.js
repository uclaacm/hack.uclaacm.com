const hackcraftDescription = `
	Come and learn how to develop your very own Chrome extension and Discord bot in
	our newest event HackCraft! This spring event consists of one-off workshops that
	will walk you through how to build a productivity Chrome extension or a music 
	Discord bot that you can customize to your own liking.
`;

const learnpyDescription = `
	This quarter, for our new iteration of this Python workshop series, we will be 
	presenting two mini-workshops with project guides for 2 extremely useful Python
	Python topics: object detection with OpenCV and web scraping! One of our main 
	goals is to make this event useful for people of all skill levels in Python, and 
	for all students to come out of the event with their own fully implemented 
	project!
`;

const highlightedEvents = [
	{
		name: 'HackCraft',
		description: hackcraftDescription,
		imgFilePath: 'event/2024s-hackcraft-banner.png',
		button: 'Github',
		link: 'https://github.com/uclaacm/hackcraft'
	},
	{
		name: 'learn.py',
		description: learnpyDescription,
		imgFilePath: 'event/2024s-learnpy-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	}
];

module.exports = highlightedEvents;
