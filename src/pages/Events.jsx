import React from 'react';
import '../styles/Events.css';
import useTitle from '../components/General/useTitle';

import famimg from '../images/hack-fam-insta.png';
import hackimg from '../images/hack-school-insta.jpg';

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
				<h1>Fall 2024 Events</h1>
				<div className='event'>
					<div className='info-container'>
						<h2 className='event-title'>Hack School</h2>
						<p className='event-desc'>
							Brrrringgggg! Hackschool is now in session! Throughout the
							quarter, our beginner-friendly, flagship web development workshop
							series will help you learn and utilize skills such as HTML, CSS,
							and React.JS to build your very own website! All are welcome to
							learn, build, code, and eat with us, so pencil Hackschool into
							your schedule! We’ll see you there!
						</p>
					</div>
					<img className='event-img' src={hackimg} alt='Hack School Logo' />
				</div>
				<div className='event second'>
					<div className='info-container'>
						<h2 className='event-title'>Hack Fam</h2>
						<p className='event-desc'>
							Join us for Hack Fam, one of ACM Hack&apos;s exciting events of
							the quarter! Whether you&apos;re new to ACM Hack or looking to
							deepen your connection within the club, HackFam is your gateway to
							building meaningful relationships with fellow CS enthusiasts at
							UCLA. You&apos;ll be sorted into &apos;Fams&apos; led by our
							awesome officers, where you&apos;ll meet peers, make friends, and
							get introduced to the vibrant ACM Hack community. Don&apos;t miss
							this chance to find your Fam and kickstart your journey with ACM
							Hack!
						</p>
					</div>
					<img className='event-img' src={famimg} alt='Hack Fam Logo' />
				</div>
			</div>
		</div>
	);
}
