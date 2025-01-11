import React from 'react';
import '../../styles/Home.css';
import img1 from '../../images/hack-school-insta.jpg';
import img2 from '../../images/hack-fam-insta.png';

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
					<img className='event-img' src={img1} alt='HackSchool' />
					<p className='event-description'>{firstDescription}</p>
				</div>
				<div className='event-column'>
					<h2 className='event-title'>Hack Fam</h2>
					<img className='event-img' src={img2} alt='HackFam' />
					<p className='event-description'>{secondDescription}</p>
				</div>
			</div>
		</div>
	);
}
