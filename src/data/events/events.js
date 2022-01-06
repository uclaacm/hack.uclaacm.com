function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

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
		imgFilePath: 'event/2021f-hackschool.png',
		detailLink: 'https://fb.me/e/4Qj7XuuOV'
	},
	{
		name: 'Hackschool #2: Intro to Javascript',
		date: getDateTime(2021, 10, 13, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/2021f-hackschool.png',
		detailLink: 'https://fb.me/e/cqKQ0nOIz'
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
		name: 'Hackschool #5: Events and State',
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
		date: getDateTime(2021, 11, 17, 19),
		location: 'Perloff 1102',
		imgFilePath: 'event/2021f-hackschool.png',
		rsvpLink: 'https://forms.gle/1hFQ4knWdxu1SHqq6',
		detailLink: 'https://fb.me/e/1ROTf2lg8'
	},
	{
		name: 'Hackschool #8: Wrap-Up + Pizza Party',
		date: getDateTime(2021, 12, 1, 19),
		location: 'Perloff 1102',
		rsvpLink: 'https://forms.gle/9pS4rpRwXGvDcG6r5',
		detailLink: 'https://fb.me/e/4s15zJkR2',
		imgFilePath: 'event/2021f-hackschool.png'
	},
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
		imgFilePath: 'event/2020f-hack-fam-banner.jpg',
		detailLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfTTfhOqDnd8XUAFvoCanP2ooLhxA6cs99AHktUr3fOhcEbMg/viewform'
	},
	{
		name: 'Hack Fam Member Apps Due',
		date: getDateTime(2021, 10, 7, 0),
		imgFilePath: 'event/2020f-hack-fam-banner.jpg',
		detailLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf3yv_JtF2sIDDddEreT33C7oVFhCSGB4l8oOGySLTqcwxzbQ/viewform'
	},
	{
		name: 'ACM Intern Apps Due',
		date: getDateTime(2021, 10, 29, 23, 59),
		imgFilePath: 'event/2021f-intern-app-banner.png',
		detailLink: 'https://forms.gle/nGEPFjSRzvNaciwC6'

	},
	{
		name: 'Passion Talks #2: Web Accessibility',
		date: getDateTime(2021, 11, 9, 19),
		location: 'Royce Hall 190',
		imgFilePath: 'event/2021f-passion-talks.png',
		rsvpLink: 'http://links.uclaacm.com/passiontalksf21-webaccessibility-rsvp',
		detailLink: 'https://fb.me/e/1a6fTPA7k'
	},
	{
		name: 'Hotseat: Scraping UCLA at Scale',
		date: getDateTime(2021, 11, 8, 19),
		location: 'Zoom',
		imgFilePath: 'event/2021f-hotseat.png',
		conferenceLink: 'https://ucla.zoom.us/j/93858581122?pwd=L3VDK0o5UjJNN2dSZTN0Y0xLclpQUT09',
		detailLink: 'https://fb.me/e/62TWNqDZs'
	},
	{
		name: 'Passion Talks #3: Music Technology',
		date: getDateTime(2021, 11, 18, 18),
		location: 'Kaplan Hall A65',
		imgFilePath: 'event/2021f-passion-talks.png',
		rsvpLink: 'http://links.uclaacm.com/passiontalksf21-musictech-rsvp',
		detailLink: 'https://facebook.com/events/s/acm-hack-passion-talks-music-t/1163073977555977/'
	},
	{
		name: 'ACM Winter GM',
		date: getDateTime(2022, 01, 06, 18, 30),
		location: 'Zoom',
		imgFilePath: 'event/winter-gm.jpg',
		rsvpLink: 'http://links.uclaacm.com/wintergm-rsvp-22',
		detailLink: 'https://fb.me/e/4QIpqlopc'
	}
];

module.exports = events;
