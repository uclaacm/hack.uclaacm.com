import React from 'react';
import '../../styles/Events.css';
import '../../styles/Home.css';
import hfamimg from '../../images/hack-fam-insta.png';
import schoolimg from '../../images/hack-school-insta.jpg';

const firstDescription =
	'Join us in our beginner-friendly web development workshop series, where you build a website using tools such as HTML, CSS, and ReactJS!';

const secondDescription =
	'Get placed in fam groups to meet people in the Hack community through smaller group socials!';

export default function CurrEvents() {
	return (
		<div>
			<h1 className='section-title'>Current Events</h1>
			<div className='events-container'>
				<div className='event-column'>
					<h2 className='event-title'>Hack School</h2>
					<img className='event-img' src={schoolimg} alt='HackSchool' />
					<p className='hack-description'>{firstDescription}</p>
				</div>
				<div className='event-column'>
					<h2 className='event-title'>Hack Fam</h2>
					<img className='event-img' src={hfamimg} alt='HackFam' />
					<p className='hack-description'>{secondDescription}</p>
				</div>
			</div>
		</div>
	);
}
