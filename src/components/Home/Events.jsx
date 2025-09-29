import React, { useRef, useEffect } from 'react';
import '../../styles/Events.css';
import EventsSVG from './EventsSVG'
import firstEventGraphic from '../../images/hack-school-2024.png';
import secondEventGraphic from '../../images/hack-fam-insta.png';
import { gsap } from 'gsap';

const firstEventAlt = 'HackSchool';
const firstEventDescription = 'Join us in our beginner-friendly web development workshop series, where you build a website using tools such as HTML, CSS, and ReactJS!';
const secondEventAlt = 'HackFam';
const secondEventDescription = 'Get placed in fam groups to meet people in the Hack community through smaller group socials!';

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
