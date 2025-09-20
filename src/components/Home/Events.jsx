import React, { useRef, useState, useEffect } from 'react';
import '../../styles/Events.css';
import useTitle from '../../components/General/useTitle';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

import hothimg from '../../images/hoth-logo.png';
import stackimg from '../../images/stackschool-logo.jpg';
import Announcement from './Announcement';

export default function Events() {
	useTitle(' | Events');
	const [isSnapping, setIsSnapping] = useState(false);
	const sectionRef = useRef(null);
	const upScrollThreshold = 0.6; // Viewport height % needed to scroll back

	useEffect(() => {
		let accumulatedUpScroll = 0;
		
		const handleWheel = (e) => {
			if (isSnapping) {
				e.preventDefault();
				return;
			}

			const currentScrollY = window.scrollY;
			const viewportHeight = window.innerHeight;
			
			// Calculate section boundaries
			const bannerHeight = viewportHeight * 1.4;
			const hackDescriptionHeight = document.querySelector('.hack-description-section')?.offsetHeight || viewportHeight;
			const sectionTop = bannerHeight + hackDescriptionHeight;
			const sectionHeight = sectionRef.current?.offsetHeight || 400;
			const sectionBottom = sectionTop + sectionHeight;
			const upThresholdDistance = viewportHeight * upScrollThreshold;

			// Handle section scrolling
			if (currentScrollY >= sectionTop && currentScrollY < sectionBottom) {
				const topThresholdZone = sectionTop + 50; // Top zone for upward scroll
				
				// Handle upward scroll in top zone
				if (currentScrollY < topThresholdZone && e.deltaY < 0) {
					e.preventDefault();
					
					accumulatedUpScroll += Math.abs(e.deltaY);
					
					// Check if enough scroll accumulated to snap back
					if (accumulatedUpScroll >= upThresholdDistance) {
						setIsSnapping(true);
						gsap.to(window, {
							scrollTo: bannerHeight, // Snap to HackDescription start
							duration: 0.6,
							ease: 'power2.out',
							onComplete: () => {
								setIsSnapping(false);
								accumulatedUpScroll = 0;
							}
						});
					}
				}
				// Free scrolling - reset accumulators
				else {
					accumulatedUpScroll = 0;
					// Allow normal scrolling
				}
			}
			else {
				// Reset accumulated scroll when outside section
				accumulatedUpScroll = 0;
			}
		};

		window.addEventListener('wheel', handleWheel, { passive: false });
		
		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, [isSnapping, upScrollThreshold]);

	return (
		<div id='events' ref={sectionRef}>
			<Announcement />
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
