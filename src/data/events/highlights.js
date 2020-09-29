const bloomDescription = `
	Bloom is a quarter-long fellowship designed to give people the foundations to
	become experienced designers and web developers. Partipants will be put in a
	developer+designer pair and by the end of the program, will have a
	portfolio-ready project demonstrating skill in type, color, and web development!
	No prior experience in web dev or design is needed!
`;

const hackFamDescription = `
	It’s hard to make friends and stay in touch during quarantine, but ACM Hack is
	here to make it better. HackFam is a family system for people to hang out,
	study, go to ~virtual~ events, and make friends in :) With a family head and
	your family members, you will be able to make it through pandemic with plenty
	of smiles and happy memories.
`;

const bruinQuestDescription = `
	Ready for the ultimate quest of the school year? Get ready for Bruin Quest,
	where you will get to explore a virtual UCLA campus to complete puzzles and
	challenges to win prizes. On this adventure, you and a team will have to combine
	your wits and creativity to try maximize your points and come out on top as the
	Bruin Quest champion.
`;

const highlightedEvents = [
	{
		name: 'Bloom: Hackschool',
		description: bloomDescription,
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png', // TODO: change
		button: 'Website',
		link: 'https://bloom.creativelabsucla.com/'
	},
	{
		name: 'HackFam',
		description: hackFamDescription,
		imgFilePath: 'event/2020f-hack-fam-banner.jpg',
		button: 'Sign Up',
		link: 'https://forms.gle/QRWgCPSqUY18riXJ6'
	},
	{
		name: 'Bruin Quest',
		description: bruinQuestDescription,
		imgFilePath: 'event/2020f-bquest-banner.png',
		button: 'Coming Soon'
	}
];

module.exports = highlightedEvents;
