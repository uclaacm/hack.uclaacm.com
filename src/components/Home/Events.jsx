import React, { useRef, useEffect } from 'react';
import '../../styles/Events.css';
import EventsSVG from './EventsSVG'
import firstEventGraphic from '../../images/hack-invaders.png';
import secondEventGraphic from '../../images/python-flyer.png';
import { gsap } from 'gsap';

const firstEventAlt = 'Hack Invaders';
const firstEventDescription = 'Join us this Saturday, May 16th for Hack Invaders, a beginner-friendly mini-hackathon where you’ll build a modern version of a retro game.';
const secondEventAlt = 'poker.py';
const secondEventDescription = 'Join us on Tuesday, May 12th for poker.py, a hands-on Python workshop where you’ll learn poker fundamentals and build your own beginner poker bot.';

const eventsData = [
	{
		id: 'hack-invaders',
		title: 'Hack Invaders',
		alt: firstEventAlt,
		graphic: firstEventGraphic,
		description: firstEventDescription,
	},
	{
		id: 'poker-py',
		title: 'poker.py',
		alt: secondEventAlt,
		graphic: secondEventGraphic,
		description: secondEventDescription,
	},
];

export default function Events() {
	const starsRef = useRef(null);
	const duckUFORef = useRef(null);

	useEffect(() => {
		let starsTwinkle = null;
		let duckUFOMotion = null;

		const stars = starsRef.current;
		if (stars) {
			starsTwinkle = gsap.to(stars.querySelectorAll('path'), {
				opacity: () => gsap.utils.random(0.5, 1),
				scale: () => gsap.utils.random(0.9, 1.1),
				transformOrigin: '50% 50%',
				duration: () => gsap.utils.random(0.2, 0.4),
				repeat: -1,
				yoyo: true,
				stagger: {
					amount: 3,
					from: 'random'
				}
			});
		}

		const duck = duckUFORef.current;
		if (duck) {
			duckUFOMotion = gsap.to({}, {
				duration: 30,
				repeat: -1,
				ease: 'none',
				onUpdate: function () {
					const t = this.progress() * Math.PI * 2;
					const radiusX = 300;
					const radiusY = 50;

					const x = Math.sin(t * 2) * radiusX;
					const y = Math.sin(t) * radiusY - 50;

					gsap.set(duck, { x, y });
				}
			});
		}

		return () => {
			if (stars && starsTwinkle) starsTwinkle.kill();
			if (duck && duckUFOMotion) duckUFOMotion.kill();
		}
	}, []);

	return (
		<div className='events-section'>
			<div className='events-container'>
				<div className='events-header'>
					<h1 className='events-title' data-aos='fade-right'>
						HackEvents<sup className='sup'>TM</sup>
					</h1>
				</div>
				<div className='events-mobile-cards'>
					{eventsData.map((event) => (
						<div key={event.id} className='events-mobile-card'>
							<div className='events-mobile-card-image-wrapper'>
								<img
									src={event.graphic}
									alt={event.alt}
									className='events-mobile-card-image'
								/>
							</div>
							<div className='events-mobile-card-content'>
								<h2 className='events-mobile-card-title'>{event.title}</h2>
								<p className='events-mobile-card-description'>
									{event.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<EventsSVG
				className='events-bg-svg'
				starsRef={starsRef}
				duckUFORef={duckUFORef}
				leftBoardImage={<img src={firstEventGraphic} alt={firstEventAlt} />}
				rightBoardImage={<img src={secondEventGraphic} alt={secondEventAlt} />}
				leftBoardText={firstEventDescription}
				rightBoardText={secondEventDescription}
			/>
		</div>
	);
}
