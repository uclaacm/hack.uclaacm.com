<<<<<<< HEAD
import Imgg from './combined.png';

/**
 * Month starts at 0!
 */
const events = [
	{
		name: 'Hackschool Session 1',
		date: new Date(2019, 8, 27, 18, 0),
		location: 'Boelter Hall 5249',
		imgURL: Imgg,
		detailLink: '/posts/fall2019/welcome/welcome'
	},
	{
		name: 'Hackschool Session 2',
		date: new Date(2019, 9, 3, 18, 0),
		location: 'Boelter Hall 5249',
		imgURL: Imgg,
		detailLink: '/posts/fall2019/welcome/welcome'
	},
	{
		name: 'Hack on the Hill',
		date: new Date(2019, 10, 3, 8, 0),
		location: 'Carnesale Commons',
		imgURL: Imgg,
		detailLink: '/posts/fall2019/welcome/welcome'
	},
	{
		name: 'Hackschool Session 3',
		date: new Date(2019, 9, 14, 19, 0),
		location: 'Boelter Hall 5249',
		imgURL: Imgg,
		detailLink: '/posts/fall2019/welcome/welcome'
=======
function getDateTime(year, month = 1, day = 1, hour = 0, minute = 0, second = 0) {
	// Month start at 0 for the Date constructor.
	return new Date(year, month - 1, day, hour, minute, second);
}

const events = [
	{
		name: 'JavaScript Chat with ACM Hack',
		date: getDateTime(2019, 10, 8, 16),
		location: 'Engineering VI 372',
		imgFilePath: 'event/2019f-js-chat.png',
		detailLink: 'https://www.facebook.com/events/517868152322071/'
	},
	{
		name: 'Hackschool Session 1',
		date: getDateTime(2019, 10, 9, 18),
		location: 'WG Young Hall CS50',
		imgFilePath: 'event/2019f-hackschool-week-02.png',
		detailLink: 'https://www.facebook.com/events/761474130984313/'
	},
	{
		name: 'JavaScript Chat with ACM Hack',
		date: getDateTime(2019, 10, 15, 16),
		location: 'Engineering VI 372',
		imgFilePath: 'event/2019f-js-chat.png'
	},
	{
		name: 'Hackschool Session 2',
		date: getDateTime(2019, 10, 16, 18),
		location: 'Boelter Hall 5249',
		imgFilePath: 'event/2019f-hackschool-week-03.png'
>>>>>>> master
	}
];

module.exports = events;
