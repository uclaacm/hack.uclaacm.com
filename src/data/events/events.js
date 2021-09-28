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
		name: 'Hackschool Week One',
		date: getDateTime(2021, 10, 6, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/2021f-hackschool.png'
	},
	// {
	// 	name: 'Passion Talks',
	// 	date: getDateTime(2021, 9, 29, 19),
	// 	location: 'Court of Sciences',
	// 	imgFilePath: 'event/2020f-hack-fam-banner.jpg',
	// 	detailLink: 'https://www.facebook.com/events/275484680297266/'
	// },
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
