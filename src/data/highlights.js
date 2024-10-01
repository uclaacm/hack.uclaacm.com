const hackSchoolDescription = `
	Brrrringgggg! Hackschool is now in session! Throughout the quarter, our beginner-friendly, flagship web development workshop series will help you learn and utilize skills such as HTML, CSS, and React.JS to build your very own website! All are welcome to learn, build, code, and eat with us, so pencil Hackschool into your schedule! We’ll see you there!
`;

const hackFamDescription = `
	Join us for Hack Fam, one of ACM Hack's exciting events of the quarter! Whether you're new to ACM Hack or looking to deepen your connection within the club, HackFam is your gateway to building meaningful relationships with fellow CS enthusiasts at UCLA. You'll be sorted into 'Fams' led by our awesome officers, where you'll meet peers, make friends, and get introduced to the vibrant ACM Hack community. Don't miss this chance to find your Fam and kickstart your journey with ACM Hack!
`;

const highlightedEvents = [
	{
		name: 'HackSchool',
		description: hackSchoolDescription,
		imgFilePath: 'event/2022f-hackschool-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	},
	{
		name: 'HackFam',
		description: hackFamDescription,
		imgFilePath: 'event/2023f-hackfam-banner.png',
		button: 'Discord',
		link: 'https://discord.gg/rup2p6fxA5'
	}
];

module.exports = highlightedEvents;
