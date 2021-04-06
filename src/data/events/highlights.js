const learnpyDescription = `
    Learn.py is a quarter-long Python course with weekly sessions. Our goal is to
    make learning coding, specifically in Python, easy and accessible to everyone
    and while introducing you to cool Python applications such as automation, 
	web dev, and more! No prior Python experience is required, but basic 
	programming knowledge is recommended (CS30/CS31/PIC10A or equivalent).
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
		imgFilePath: 'event/2021s-learnpy.png',
		button: 'Learn More',
		link: 'https://www.facebook.com/events/821281995127541'
	},
	{
		name: 'Hack Kitchen',
		description: hackKitchenDescription,
		imgFilePath: 'event/hackkitchenTemp.png',
		button: 'Coming Soon'
		// link: TODO: add link
	},
	{
		name: 'JavaScript Chats',
		description: jsChatsDescription,
		imgFilePath: 'event/2021s-js-chats.png',
		button: 'Coming Soon',
		link: 'https://www.facebook.com/events/3812752948779971'
	}
];

module.exports = highlightedEvents;
