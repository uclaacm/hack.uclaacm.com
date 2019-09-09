
import Imgg from './combined.png';
import HOTH from './hoth.png';
/**
 * Month starts at 0!
 */
const events = [
	{
		name: 'HackSchool Session 1',
		date: new Date(2019, 8, 27, 18, 0),
		location: 'Engineering VI 256',
		imgURL: Imgg,
		detailLink: '/posts/spring2019/learnpy3'
	},
	{
		name: 'HackSchool Session 2',
		date: new Date(2019, 9, 3, 18, 0),
		location: 'Engineering VI 256',
		imgURL: Imgg,
		detailLink: '/posts/spring2019/learnpy3'
	},
	{
		name: 'Hack on the Hill',
		date: new Date(2019, 10, 3, 8, 0),
		location: 'Carnesale Commons',
		imgURL: Imgg,
		detailLink: '/posts/spring2019/learnpy3'
	},
	{
		name: 'Learn.py Session 4',
		date: new Date(),
		detailLink: 'https://www.google.com',
		location: 'Covel 227',
		imgURL: HOTH
	},
	{
		name: 'HackSchool Session 3',
		date: new Date(2019, 9, 14, 19, 0),
		location: 'Engineering VI 256',
		imgURL: Imgg
	}
];

export default events;
