export const blogs = [
	{
		id: 'fall2023-future-interns',
		title: 'Hey Future Interns!',
		author: 'Nathan Zhang and James Wu',
		date: 'September 2, 2023',
		readTime: '8 min read',
		summary:
			'An Overview of the ACM Hack Internship Program as Told by Our 2023 Interns',
		markdown: new URL(
			'/blogPosts/fall2023/hey-future-interns/index.md',
			import.meta.url
		).href,
	},
	{
		id: 'spring2021-year-in-review',
		title: '2020-2021 year: a reflection',
		author: 'Jody Lin',
		date: 'July 30, 2021',
		readTime: '7 min read',
		summary: 'a look back on the past year in quarantine',
		markdown: new URL(
			'/blogPosts/spring2021/year-in-review/index.md',
			import.meta.url
		).href,
	},
	{
		id: 'fall2019-welcome',
		title: 'Welcome to ACM Hack!',
		author: 'ACM Hack',
		date: 'September 7, 2019',
		readTime: '1 min read',
		summary: 'Welcome to ACM Hack!',
		markdown: new URL('/blogPosts/fall2019/welcome/index.md', import.meta.url)
			.href,
	},
	{
		id: 'fall2018-hackschool-session-3-frontend',
		title: 'Hackschool: JavaScript and the DOM',
		author: 'Galen Wong',
		date: 'October 24, 2018',
		readTime: '21 min read',
		summary:
			'Today, we\'ll be making a super cool web page and exploring the DOM!',
		markdown: new URL(
			'/blogPosts/fall2018/hackschool-session-3-frontend/index.md',
			import.meta.url
		).href,
	},
];
