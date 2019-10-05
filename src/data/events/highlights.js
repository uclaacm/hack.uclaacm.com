const hothDescription = `
	Hack on the Hill (HOTH) is a 12 hour, beginner-friendly hackathon designed to
	give beginners a glimpse into what a real hackathon would be and feel like.
	During HOTH, there are workshops, mentors, and amazing prizes for the best
	hacks! We also provide a selection of hardware for hackers to rent out and
	hack with.
`;

const hackschoolDescription = `
	It's easy to feel lost in the world of tech or not know where to start. We
	created Hackschool, our introductory web development workshop series, to give
	you a place to start in this wonderful universe of possibilities. By the end,
	we hope to get you excited about CS, equip you with basic tools to build your
	own web applications, and provide a community to learn from, bond with, and
	hack with.
`;

const learnpyDescription = `
	Learn.py is a quarter-long Python course with weekly sessions. Our goal is to
	make learning coding, specifically in Python, easy and accessible to everyone
	and while introducing you to cool Python applications such as data science,
	gaming, web dev, and more! No programming/Python background is required.
`;

const highlightedEvents = [
	{
		name: 'Hackschool',
		description: hackschoolDescription,
		imgFilePath: 'event/2019f-hackschool.png'
	},
	{
		name: 'Hack on the Hill',
		description: hothDescription,
		imgFilePath: 'event/2019w-hoth-banner.png'
	},
	{
		name: 'Learn.py',
		description: learnpyDescription,
		imgFilePath: 'event/2019s-learnpy.png'
	}
];

module.exports = highlightedEvents;
