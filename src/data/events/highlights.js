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

const toolingseriesDescription = `
	In Tooling Series, we teach you how to take 
	advantage of various tools that may help you save time and improve your 
	workflow. You'll learn about text editors, version control, the command-line, 
	and more! The recommended level of experience will vary depending on the workshop.
`;

const passiontalksDescription = `
	Ever wondered how you can break into tech?   
	Spend some quality time at Passion Talks learning about mind-blowing applications
	of tech in different industries from passionate UCLA students! Whether you’re 
	south or north campus, a complete newbie or a coding genius, tech is for everyone, 
	and we’re bringing it to you!
`;

const highlightedEvents = [
	{
		name: 'Hackschool',
		description: hackschoolDescription,
		imgFilePath: 'event/2019f-hackschool.png',
		button: 'Curriculum',
		link: 'https://github.com/uclaacm/hackschool-f19'
	},
	{
		name: 'Hack on the Hill',
		description: hothDescription,
		imgFilePath: 'event/2019w-hoth-banner.png',
		button: 'Learn More',
		link: 'https://hoth.splashthat.com/'
	},
	{
		name: 'Learn.py',
		description: learnpyDescription,
		imgFilePath: 'event/2019s-learnpy.png',
		button: 'Curriculum',
		link: 'https://github.com/uclaacm/learn.py-s19'
	},
	{
		name: 'Tooling Series',
		description: toolingseriesDescription,
		imgFilePath: 'event/2020s-toolingseries.png',
		button: 'Curriculum',
		link: 'https://github.com/uclaacm/hack-tooling-series'
	},
	{
		name: 'Passion Talks',
		description: passiontalksDescription,
		imgFilePath: 'event/2020s-passiontalks.png',
		button: 'Recordings',
		link: 'https://www.youtube.com/watch?v=BB9uzqJgeMg&list=PLPO7_kXilXFartXh7vu7OI6zq8JOF5k5u&index=2'

	}
];

module.exports = highlightedEvents;
