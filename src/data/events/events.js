function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

// ACM GM, Hack gm, hackschool 1, passion talks, hack fam head apps, hack fam members apps

const events = [
	{
		name: 'ACM Fall GM',
		date: getDateTime(2021, 9, 27, 18),
		location: 'Court of Sciences',
		imgFilePath: 'event/acm-fall21-gm.png'
	},
	{
		name: 'Hack Fall GM',
		date: getDateTime(2021, 9, 29, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/hack-banner.png',
		detailLink: 'https://fb.me/e/48zlbkg9O'
	},
	{
		name: 'Hackschool #1: Intro to HTML/CSS',
		date: getDateTime(2021, 10, 6, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/2021f-hackschool.png'
	},
	{
		name: 'Hackschool #2: Intro to Javascript',
		date: getDateTime(2021, 10, 13, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/2021f-hackschool.png'
	},
	{
		name: 'Hackschool #3: Intro to React',
		date: getDateTime(2021, 10, 20, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/2021f-hackschool.png',
		detailLink: 'https://fb.me/e/18T2DTn4a'
	},
	{
		name: 'Hackschool #4: Props and Layout',
		date: getDateTime(2021, 10, 27, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/2021f-hackschool.png',
		rsvpLink: 'https://forms.gle/kvhUxn39thsVVWgJ8',
		detailLink: 'https://fb.me/e/453ukoUs8'
	},
	{
		name: 'Hackschool #5: State',
		date: getDateTime(2021, 11, 3, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/2021f-hackschool.png',
		rsvpLink: 'https://forms.gle/rn5CxAByps4KgVLp6',
		detailLink: 'https://fb.me/e/Qo35cnxP'
	},
	{
		name: 'Hackschool #6: Async & Web API',
		date: getDateTime(2021, 11, 10, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/2021f-hackschool.png',
		rsvpLink: 'https://forms.gle/95c5NWAcjNxh2SqA6',
		detailLink: 'https://fb.me/e/1l7ecAk5X'
	},
	{
		name: 'Hackschool #7: Lifecycle',
		date: getDateTime(2021, 11, 24, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/2021f-hackschool.png',
		rsvpLink: 'https://forms.gle/1hFQ4knWdxu1SHqq6',
		detailLink: 'https://fb.me/e/1ROTf2lg8'
	},
	// {
	// 	name: 'Hackschool #8: TBD',
	// 	date: getDateTime(2021, 11, 24, 19),
	// 	location: 'Perloff 1102',
	// 	imgFilePath: 'event/2021f-hackschool.png'
	// },
	{
		name: 'Passion Talks #1: Blockchain',
		date: getDateTime(2021, 10, 21, 18),
		location: 'Dodd Hall Room 121',
		imgFilePath: 'event/2021f-passion-talks.png',
		detailLink: 'https://www.facebook.com/events/367557915098698'
	},
	{
		name: 'Hack Fam Head Apps Due',
		date: getDateTime(2021, 9, 25, 0),
		// location: 'Court of Sciences',
		imgFilePath: 'event/2020f-hack-fam-banner.jpg',
		detailLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfTTfhOqDnd8XUAFvoCanP2ooLhxA6cs99AHktUr3fOhcEbMg/viewform'
	},
	{
		name: 'Hack Fam Member Apps Due',
		date: getDateTime(2021, 10, 7, 0),
		// location: 'Court of Sciences',
		imgFilePath: 'event/2020f-hack-fam-banner.jpg',
		detailLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf3yv_JtF2sIDDddEreT33C7oVFhCSGB4l8oOGySLTqcwxzbQ/viewform'
	}
];

module.exports = events;
