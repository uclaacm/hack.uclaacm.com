import React, { useRef, useEffect } from 'react';
import '../../styles/Events.css';
import EventsSVG from './EventsSVG'
import firstEventGraphic from '../../images/swift-school-2026.jpg';
import secondEventGraphic from '../../images/hoth-logo.png';
import { gsap } from 'gsap';

const firstEventAlt = 'SwiftSchool';
const firstEventDescription = 'Join us this quarter for SwiftSchool, a hands-on workshop series designed to teach you how to build SwiftUI mobile apps for Apple platforms.';
const secondEventAlt = 'Hack on the Hill';
const secondEventDescription = 'Join us on Saturday, February 28th for a 12-hour beginner-friendly hackathon open to all skill levels. See you there!';

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
