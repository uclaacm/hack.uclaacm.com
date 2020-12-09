function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'ACM Fall GM',
		date: getDateTime(2020, 10, 5, 18, 30),
		location: 'Gather Town',
		imgFilePath: 'event/2020f-acm-fall-gm-banner.jpg',
		detailLink: 'https://www.facebook.com/events/334129687838885'
	},
	{
		name: 'Hack Fall GM',
		date: getDateTime(2020, 10, 6, 19),
		location: 'Zoom',
		imgFilePath: 'event/hack-banner.png',
		detailLink: 'https://www.facebook.com/events/634709293879004'
	},
	{
		name: 'Bloom Info Session',
		date: getDateTime(2020, 10, 7, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-banner.jpg',
		detailLink: 'https://www.facebook.com/events/1017939351953490'
	},
	{
		name: 'HackFam Family Kickoff',
		date: getDateTime(2020, 10, 10, 19),
		location: 'Zoom',
		imgFilePath: 'event/2020f-hack-fam-banner.jpg'
		// detailLink: TODO
	},
	{
		name: 'Hackschool: Intro HTML/CSS',
		date: getDateTime(2020, 10, 14, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/1514039708805331'
	},
	{
		name: 'Hackschool: Intro JavaScript',
		date: getDateTime(2020, 10, 21, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153423967007',
		conferenceLink: 'https://ucla.zoom.us/j/95779724102?pwd=MkRVbWxzOFBUUXlCTWFicW0reWZ6dz09'
	},
	{
		name: 'Hackschool: DOM API',
		date: getDateTime(2020, 10, 28, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153430633673',
		conferenceLink: 'https://ucla.zoom.us/j/98651086587?pwd=Nkg0UG42QnNmcG1iVzBUUWV0dCtXZz09'
	},
	{
		name: 'ACM Intern Apps',
		date: getDateTime(2020, 10, 30, 23, 59),
		imgFilePath: 'event/2020f-intern-apps.jpg',
		detailLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfzD9WhcqgwRs8sVNvFzB-cJ4XJHdvLvhY8vLzz0823zLyOmA/viewform'
	},
	{
		name: 'Hackschool: Advanced CSS',
		date: getDateTime(2020, 11, 4, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153427300340',
		conferenceLink: 'https://ucla.zoom.us/j/91425978330?pwd=dEJmRTRlays4dmtsRVhtSjNRckhvdz09'
	},
	{
		name: 'Hackschool: Async JS & APIs',
		date: getDateTime(2020, 11, 11, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153440633672',
		conferenceLink: 'https://ucla.zoom.us/j/94952800508?pwd=LzJjcENid0dtSW9Sb3dFS1FYeVVYdz09'
	},
	{
		name: 'Bruin Quest: Pre-Social',
		date: getDateTime(2020, 11, 14, 19),
		location: 'BQuest Discord',
		imgFilePath: 'event/2020f-bquest-banner.png',
		detailLink: 'https://www.facebook.com/events/880552682480407',
		conferenceLink: 'https://discord.gg/P9SjcFT6MF'
	},
	{
		name: 'Hackschool: Accessibility',
		date: getDateTime(2020, 11, 18, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153433967006',
		conferenceLink: 'https://ucla.zoom.us/j/92195885363?pwd=cjZqTjExdXpQRXRPanN1UUN2U2txdz09'
	},
	{
		name: 'Bruin Quest',
		date: getDateTime(2020, 11, 21),
		imgFilePath: 'event/2020f-bquest-banner.png',
		detailLink: 'https://www.facebook.com/events/440637390288389',
		conferenceLink: 'https://discord.gg/P9SjcFT6MF'
	},
	{
		name: 'Hackschool: Intro React.js',
		date: getDateTime(2020, 11, 25, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=801153437300339',
		conferenceLink: 'https://ucla.zoom.us/j/96875211733?pwd=M1ZSSk5rOVZGNTFiT3czNmVsRE85dz09'
	},
	{
		name: 'Hackschool: Node.js',
		date: getDateTime(2020, 12, 2, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-hackschool-banner.png',
		detailLink: 'https://www.facebook.com/events/801150987300584/?event_time_id=827225341359815',
		conferenceLink: 'https://ucla.zoom.us/j/93956379872?pwd=em81YTk3amRvaVYza1ZhbHI4UTIwQT09'
	},
	{
		name: 'Bloom: Showcase',
		date: getDateTime(2020, 12, 9, 18),
		location: 'Zoom',
		imgFilePath: 'event/2020f-bloom-banner.jpg',
		detailLink: 'https://www.facebook.com/events/698562524364198',
		conferenceLink: 'https://ucla.zoom.us/j/91708547209?pwd=QUxFblNWUkdFSUorT2c2eHgxY1h4QT09'
	}
];

module.exports = events;
