const hackschoolDescription = `
	Come out and learn how to make websites in our beginner-friendly Fall
	Hackschool series! We will be teaching the basics of web development
	with React.js, a popular framework of Javascript. No previous experience
	is necessary!
`;

const passionTalksDescription = `
	Passion Talks is all about inspiring individuals to dig deeper into the
	world of tech through empowerment and guided exploration. This is a speaker
	series led by students who will share their passion for specific fields,
	topics, or technologies in the hopes of helping others navigate the vast
	world of tech to find their own passions.
`;

const hackFamDescription = `
	After over a year of quarantine, we are all ready to meet people and
	make new friends. Hack Fam is all about forming those close connections
	with new friends. We will be pairing students into families, which will
	be led by a family head, so you can make lifelong memories and friends!
`;

// TODO: Fix links & button names on highlightedEvents

const highlightedEvents = [
	{
		name: 'Hackschool',
		description: hackschoolDescription,
		imgFilePath: 'event/2021f-hackschool.png',
		button: 'Coming Soon'
	},
	{
		name: 'Passion Talks',
		description: passionTalksDescription,
		imgFilePath: 'event/2021f-passion-talks.png',
		button: 'Coming Soon'
	},
	{
		name: 'HackFam',
		description: hackFamDescription,
		imgFilePath: 'event/2021f-hackfam.png',
		button: 'Sign Up',
		link: 'https://docs.google.com/forms/d/e/1FAIpQLSf3yv_JtF2sIDDddEreT33C7oVFhCSGB4l8oOGySLTqcwxzbQ/viewform'
	}
];

module.exports = highlightedEvents;
