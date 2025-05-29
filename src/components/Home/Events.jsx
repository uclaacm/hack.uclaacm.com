import React from 'react';
import '../../styles/Events.css';
import useTitle from '../../components/General/useTitle';

import hothimg from '../../images/hoth-logo.png';
import stackimg from '../../images/stackschool-logo.jpg';

export default function Events() {
	useTitle(' | Events');
	return (
		<div id='events'>
			<div className='events-header'>
				<h1 className='events-title'>
					HackEvents<sup className='sup'>TM</sup>
				</h1>
				<p className='events-desc'>
					Hack offers workshops that focus on practical application, such as web
					development and mobile development. We also host fun one-time
					activities such as UCLA&apos;s biggest beginner-friendly Hackathon,
					Hack on the Hill. Regardless of background or experience, you can find
					an event that is just for you.
				</p>
			</div>
			<div className='current-events'>
				<h1>Winter 2024 Events</h1>
				<div className='event'>
					<div className='info-container'>
						<h2 className='event-title'>StackSchool</h2>
						<p className='event-desc'>
							Good things come in stacks—Money, Pancakes, and Tech! Join us this
							quarter for Stackschool, a beginner-to-intermediate full stack
							mobile development workshop where we&apos;ll build an app using
							Swift on the frontend and MongoDB on the backend. Whether
							you&apos;re new to iOS development or looking to level up, this
							hands-on session will guide you through all parts of frontend,
							backend integration, and launching a fully functional app. Come
							learn, code, and stack up your skills with us!
						</p>
					</div>
					<img className='event-img' src={stackimg} alt='StackSchool Logo' />
				</div>
				<div className='event second'>
					<div className='info-container'>
						<h2 className='event-title'>Hack on the Hill</h2>
						<p className='event-desc'>
							Looking for a beginner-friendly hackathon? HOTH XII is a 12-hour
							hackathon that welcomes programmers of all levels, especially
							beginners, to create a project from start to finish. Learn from
							workshops, receive technical help from mentors, meet new friends,
							eat free food, and get the chance to win amazing prizes. See you
							there on Sunday March 2nd at Grand Horizon!
						</p>
					</div>
					<img className='event-img' src={hothimg} alt='HOTH logo' />
				</div>
			</div>
		</div>
	);
}
