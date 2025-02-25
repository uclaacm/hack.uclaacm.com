import React from 'react';
import '../../styles/Home.css';
import img1 from '../../images/stackschool-logo.jpg';
import img2 from '../../images/hoth-logo.png';

const firstDescription =
	'Join us in our beginner-to-intermediate full stack mobile development workshop where we will build an app using Swift on the frontend and MongoDB on the backend!';

const secondDescription =
	'Join us on March 2nd for a 12-hour beginner-friendly hackathon open to all skill levels. See you there!';

export default function CurrEvents() {
	return (
		<div>
			<h1 className='section-title'>Current Events</h1>
			<div className='events-container'>
				<div className='event-column'>
					<h2 className='event-title'>StackSchool</h2>
					<img className='event-img' src={img1} alt='StackSchool' />
					<p className='event-description'>{firstDescription}</p>
				</div>
				<div className='event-column'>
					<h2 className='event-title'>Hack on the Hill</h2>
					<img className='event-img' src={img2} alt='HOTH' />
					<p className='event-description'>{secondDescription}</p>
				</div>
			</div>
		</div>
	);
}
