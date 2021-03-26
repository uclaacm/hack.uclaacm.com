const learnpyDescription = `
    Learn.py is a quarter-long Python course with weekly sessions. Our goal is to
    make learning coding, specifically in Python, easy and accessible to everyone
    and while introducing you to cool Python applications such as data science,
    gaming, web dev, and more! No programming/Python background is required.
`;

const hackKitchenDescription = `
	Hack Kitchen is a virtual coding puzzle competition where coders will participate 
	in a MasterChef style tournament. Each round will consist of a wacky coding puzzle 
	and some of your favorite Gordon Ramsay references. Your team will be judged on how 
	creative you are, how much you learned, and how gastronomically (or technically) 
	complex your final “dish” is.
`;

const jsChatsDescription = `
	Learning a language or a framework outside of class can be hard, especially past the 
	syntax and the standard APIs. Come out to JavaScript Chats with ACM Hack, a weekly 
	discussion on intermediate/advanced JavaScript. This series aims to deepen your 
	understanding of the language’s features and designs. We also plan to cover 
	frameworks related topics.
`;

// TODO: Fix links & button names on highlightedEvents

const highlightedEvents = [
	{
		name: 'learn.py',
		description: learnpyDescription,
		imgFilePath: 'event/learnpyTemp.png',
		button: 'Join the Discord',
		link: 'https://hack.uclaacm.com/'
	},
	{
		name: 'Hack Kitchen',
		description: hackKitchenDescription,
		imgFilePath: 'event/hackkitchenTemp.png',
		button: 'Sign Up',
		link: 'https://hack.uclaacm.com/'
	},
	{
		name: 'JavaScript Chats',
		description: jsChatsDescription,
		imgFilePath: 'event/jschatsTemp.png',
		button: 'Apply Now',
		link: 'https://hack.uclaacm.com/'
	}
];

module.exports = highlightedEvents;
