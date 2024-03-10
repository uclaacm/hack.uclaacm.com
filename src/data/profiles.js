const teamIntro = `We are a group of hackers, designers, and engineers all working to improve UCLA's
hacking community. We believe in moving fast, having fun, and being passionate
about using technology to solve problems that are relevant to us. We have a high
bar for success, and are willing to work incredibly hard, balancing school and
many other things, to improve the experience of other students around us.`;

/* eslint-disable max-len */
// The id field must be sync'd with the name of the file.
const officers = [
	{
		role: 'Co-President',
		name: 'Jenna Wang',
		pronouns: 'she/her',
		id: 'jenna',
		description: `Hi, I'm Jenna, a 2nd year interested in CS. I enjoy reading manhwa, playing
		video games (mostly Overwatch and Genshin), and listening to kpop. I also really like cats.`
	},
	{
		role: 'Co-President',
		name: 'Shiyu Ye',
		pronouns: 'she/her',
		id: 'shiyu',
		description: `Hihi, I'm Shiyu, a 2nd-year Math of Comp major from Shanghai! In my spare time,
		I love reading, badminton, and photography. Besides, I watch a ton of anime, movies, and TV dramas.
		I'm also constantly struggling to keep my Japanese knowledge fresh in my mind. My dream pet is a
		border collie.`
	},
	{
		role: 'Officer',
		name: 'Andy Lewis',
		pronouns: 'he/him',
		id: 'andy',
		description: `Heyo! I'm Andy, a 2nd-year EE major from Colorado, interested in cybersecurity
		and web dev. When I'm not crying over physics, I enjoy grinding MMOs/gacha, hanging out with
		people, and playing guitar/attempting to make music. Some of my favorite genres are math rock,
		prog, and alt/indie. :>`
	},
	{
		role: 'Officer',
		name: 'Thomas McGall',
		pronouns: 'he/him',
		id: 'thomas',
		description: `Hi guys! My name is Thomas McGall and I am a 3rd-year CS major. Other than programming
		I like hiking, eating brunch and watching movies. I love to explore whether it's the outdoors, new
		interests or new foods!`
	},
	{
		role: 'Officer',
		name: 'Jonathan Si',
		pronouns: 'he/him',
		id: 'jonathan',
		description: `Hey guys! My name is Jonathan and I am a 4th-year CS transfer from East LA.
		Specifically, I am pursuing a career in software engineering! Outside of Hack and software dev,
		I love powerlifting, shredding the slopes snowboarding, boxing, and brazilian jiu jitsu.`
	},
	{
		role: 'Officer',
		name: 'Satyen Subramaniam',
		pronouns: 'he/him',
		id: 'satyen',
		description: `Hello All! I'm Satyen, a 3rd-year CSE major looking to explore web and app
		development and their intersection with cloud computing! My hobbies include playing chess,
		gardening, tutoring, and gaming (anything from Nintendo).`
	},
	{
		role: 'Officer',
		name: 'Abigail Tran',
		pronouns: 'she/her',
		id: 'abigail',
		description: `Hihi my name is Abigail, and I am a 3rd-year Linguistics and Computer Science
		major from Boston, making me bicoastal and exotic. I love to read, do pull ups, thrift dresses,
		take long long walks, watch Jackie Chan movies, and cook yummy dumplings.`
	},
	{
		role: 'Officer',
		name: 'Anakin Trotter',
		pronouns: 'he/him',
		id: 'anakin',
		description: `Greetings. I am a senior in Linguistics and Computer Science major with a passion
		for ChatGPT and full stack development. I enjoy making piano covers and partying with friends. I
		also commonly take late night walks on the UCLA campus.`
	},
	{
		role: 'Officer',
		name: 'Sneha Agarwal',
		pronouns: 'she/her',
		id: 'sneha',
		description: `Hi! I’m Sneha and I’m a first-year CS major interested in learning more about data science and full stack development. 
		In my free time I love to go biking, listen to music, dance, and spend time with friends!`
	},
	{
		role: 'Officer',
		name: 'Kaylin Chung',
		pronouns: 'she/her',
		id: 'kaylin',
		description: `Hii! My name is Kaylin Chung, and I'm a 2nd year CS major from Irvine. 
		I love SZA, hot yoga, baking, and painting. I'm also a certified sweet treat enthusiast✊🏼`
	},
	{
		role: 'Officer',
		name: 'Lillian Gonick',
		pronouns: 'she/her',
		id: 'lillian',
		description: `hihi! my name is lillian and i'm first year ling/cs major! 
		when i'm not studying, i'm either buying sonny angels, eating marugame, watching la la land, or sleeping. 
		if you see me on my phone, i am on pinterest or playing wordle/connections (or scrolling on reels).`
	},
	{
		role: 'Officer',
		name: 'Kayla Hamakawa',
		pronouns: 'she/her',
		id: 'kayla',
		description: `Hi! I’m Kayla, a first-year Linguistics and Computer Science major. 
		When I’m free, I love to read, play basketball, watch kdramas, perform, and vlog new moments with friends! 
		I strive to chase sunsets and further explore the world of CS. <3`
	},
	{
		role: 'Officer',
		name: 'Hannah Kendall',
		pronouns: 'she/her',
		id: 'hannah',
		description: `Hi!! My name is Hannah and I am a second-year CS major! Outside of school I love to read, play volleyball, 
		and do pretty much anything outside! I am also a tea enthusiast and spend an absurd amount of money on Yogi tea :)`
	},
	{
		role: 'Officer',
		name: 'Max Akira Lee',
		pronouns: 'he/him',
		id: 'max',
		description: `Hey! My name is Max and I'm a first year CS student. I love Hack! 
		I also love working out, playing soccer, anything all you can eat, bumping Yeat, watching Kdramas/Jmovies, and Bplate.`
	},
	{
		role: 'Officer',
		name: 'Samuel Perrott',
		pronouns: 'he/him',
		id: 'sam',
		description: `Hi! I'm Sam, a junior CS major with a passion for integrating full stack and ML. 
		In my free time, I like to run through the city, read funny magazine articles, and play OSTs on the piano.`
	},
	{
		role: 'Officer',
		name: 'Aazel Tan',
		pronouns: 'she/her',
		id: 'aazel',
		description: `Hi! I'm Aazel, a 1st-year Math of Comp Major from Singapore! I enjoy watching kdramas, window shopping and drinking coffee :)`
	},
	{
		role: 'Advisor',
		name: 'Einar Balan',
		pronouns: 'he/him',
		id: 'einar',
		description: `Hey, I'm Einar and I'm a 4th-year CS major! When I'm not working on
		projects for school or ACM, you can find me working out, playing video games ( <3 botw),
		obsessing over avatar, or forcing myself to be an extrovert :)`
	},
	{
		role: 'Advisor',
		name: 'Maggie Li',
		pronouns: 'she/her',
		id: 'maggie',
		description: `Hi! I'm Maggie, a 4th-year CS major, and I am passionate about connecting
		people through code :) Outside of Hack, I love to rewatch my favorite TV shows, find the
		best hidden gems on Yelp, play badminton, and make my friends matcha lattes.`
	},
	{
		role: 'Advisor',
		name: 'Jakob Reinwald',
		pronouns: 'he/him',
		id: 'jakob',
		description: `Hi, my name is Jakob and I'm a 4th-year CSE major! I've been in Hack
		for the last couple quarters. :) Aside from school, I really like playing basketball,
		watching the lakers, hiking, playing games, and most importantly, hanging out with my cats! `
	},
	{
		role: 'Advisor',
		name: 'James Wu',
		pronouns: 'he/him',
		id: 'james',
		description: `My name is James. CS and business is my aim. This year, a third year I became. 
		I like playing games. Smash bros? Bowser's my main. These bars? My rise to fame. Hack is the best, 
		that is my claim. Hope to see you at our next event! We'll be glad you came!`
	},
	{
		role: 'Advisor',
		name: 'Katelyn Yu',
		pronouns: 'she/her',
		id: 'katelyn',
		description: `Hello! I'm Katelyn, and I'm a 4th-year CS major. My passions lie in making
		CS accessible to beginners and building strong communities. Otherwise, I'm a self-proclaimed
		boba connoisseur, who enjoys karate, reading, creative writing, falling down the YouTube rabbit hole,
		and staying up later than is probably wise :)`
	},
	{
		role: 'Advisor',
		name: 'Nathan Zhang',
		pronouns: 'he/him',
		id: 'nathan',
		description: `Hey! I'm Nathan, and I'm a 3rd-year Computer Science major. In my
		free time, I like to lose hours in the day by the piano, execute clean drop shots on the
		badminton court, and explore LA for the best food (and matcha lattes) the city has to offer.`
	}
];
/* eslint-enable max-len */

module.exports = { teamIntro, officers };
