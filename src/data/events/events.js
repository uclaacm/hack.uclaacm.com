import HackSchoolWeek2 from './images/week-02.png';
import HackSchoolWeek3 from './images/week-03.png';
import JSChat from './images/js-chat.png';

/**
 * Month starts at 0!
 */
const events = [
	{
		name: 'JavaScript Chat with ACM Hack',
		date: new Date(2019, 9, 8, 16, 0),
		location: 'Engineering 6 Room 372',
		imgURL: JSChat
	},
	{
		name: 'Hackschool Session 1',
		date: new Date(2019, 9, 9, 18, 0),
		location: 'Boelter Hall 5249',
		imgURL: HackSchoolWeek2
		// detailLink: '/posts/fall2019/welcome'
	},
	{
		name: 'JavaScript Chat with ACM Hack',
		date: new Date(2019, 9, 15, 16, 0),
		location: 'Engineering 6 Room 372',
		imgURL: JSChat
	},
	{
		name: 'Hackschool Session 2',
		date: new Date(2019, 9, 16, 18, 0),
		location: 'Boelter Hall 5249',
		imgURL: HackSchoolWeek3
		// detailLink: '/posts/fall2019/welcome'
	}
];

export default events;
