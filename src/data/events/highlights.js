const hackSprintDescription = `
	Hack Sprint is our beginner-friendly workshop series on mobile development with
	React Native. Through React Native, you'll be able to build apps for both Android
	and iOS devices at the same time! You’ll also get to build and present your very
	own app in our final showcase. No previous mobile development experience is needed!
`;

const hackFamDescription = `
	It’s hard to make friends and stay in touch during quarantine, but ACM Hack is
	here to make it better. HackFam is a family system for people to hang out,
	study, go to ~virtual~ events, and make friends in :) With a family head and
	your family members, you will be able to make it through pandemic with plenty
	of smiles and happy memories.
`;

const hothDescription = `
	Hack off the Hill (HOTH 8) is the virtual edition of our annual hackathon.
	This 2-day long beginner-friendly hackathon is designed to give you a
	glimpse of a real hackathon. There will be workshops, mentors, and fun
	prizes for the best hacks!
`;

const highlightedEvents = [
	{
		name: 'Hack Sprint',
		description: hackSprintDescription,
		imgFilePath: 'event/2021w-hack-sprint-banner.png',
		button: 'Join the Discord'
	},
	{
		name: 'HackFam',
		description: hackFamDescription,
		imgFilePath: 'event/2020f-hack-fam-banner.jpg',
		button: 'Sign Up',
		link: 'https://docs.google.com/forms/d/e/1FAIpQLSdfobRwKHUg6PNhlCWEGx8hTWFJ_7Vvk6CevnNtl4WGMSQZtQ/viewform?usp=sf_link'
	},
	{
		name: 'Hack Off the Hill 8',
		description: hothDescription,
		imgFilePath: 'event/temporary-placeholder-hoth.png',
		button: 'Application coming soon'
	}
];

module.exports = highlightedEvents;
