import React, { useRef, useLayoutEffect } from 'react';
import '../../styles/Home.css';
// import pigeon from '../../images/pigeon.svg';
import HackDescriptionSVG from './HackDescriptionSVG';
import { gsap } from 'gsap';

const hackDescription = `We are a student-run organization whose mission is to
empower the community by providing the means to build amazing things and explore
what is possible through code. We teach quarterly workshops and host events for
students to expand their knowledge and apply their creativity to projects. Our
events are for coders of all skills levels, so whether you've been to 10 hackathons
or you just learned "Hello World," we're happy to have you.`;

export default function HackDescription() {
	const root = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// predictable SVG transform math
			gsap.set(['#surfer', '#duck', '#surfboard', '#eye-left', '#eye-right'], {
				transformBox: 'fill-box',
				transformOrigin: '50% 50%',
			});
			// make duck pivot a tad lower (feels like body balance)
			gsap.set('#duck', { transformOrigin: '50% 80%' });

			// master surf motion (tiny so nothing separates)
			const tl = gsap.timeline({
				repeat: -1,
				yoyo: true,
				defaults: { ease: 'sine.inOut', duration: 1.8 },
			});

			// move board+duck together
			tl.to('#surfer', { y: -6, rotation: -2.2 }, 0);

			// duck counter-rotation + teeny follow-through
			tl.to('#duck', { y: -1.5, rotation: 1.6, delay: 0.08 }, 0);

			// optional micro drift (kept very small)
			gsap.to('#surfer', {
				x: 4,
				duration: 3.2,
				ease: 'sine.inOut',
				yoyo: true,
				repeat: -1,
			});

			// blinks (random cadence)
			const blink = () => {
				gsap
					.timeline()
					.to(['#eye-left', '#eye-right'], {
						scaleY: 0.12,
						duration: 0.07,
						ease: 'power1.in',
						transformOrigin: '50% 50%',
					})
					.to(['#eye-left', '#eye-right'], {
						scaleY: 1,
						duration: 0.06,
						ease: 'power1.out',
					})
					.add(() => gsap.delayedCall(gsap.utils.random(2, 5), blink));
			};
			blink();
		}, root);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={root} className='hack-description-section'>
			<div className='hack-description-content'>
				<div className='hack-description-container'>
					<div className='hack-description' data-aos='fade-right'>
						<h1 className='hack-title'>What is Hack?</h1>
						<p className='hack-description-para'>{hackDescription}</p>
					</div>
				</div>
			</div>
			<HackDescriptionSVG className='hack-bg-svg' />
		</div>
	);
}
