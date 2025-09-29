import React, { useRef, useLayoutEffect } from 'react';
import '../../styles/Home.css';
import HackDescriptionSVG from './HackDescriptionSVG';
import { gsap } from 'gsap';

const hackDescription = `We are a student-run organization whose mission is to
empower the community by providing the means to build amazing things and explore
what is possible through code. We teach quarterly workshops and host events for
students to expand their knowledge and apply their creativity to projects. Our
events are for coders of all skills levels, so whether you've been to 10 hackathons
or you just learned "Hello World," we're happy to have you.`;

export default function HackDescription() {
	const sectionRef = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.set(
				['#surfer', '#duck', '#surfboard', '#duck-feet', '#duck-torso'],
				{
					transformBox: 'fill-box',
					transformOrigin: '50% 50%',
				}
			);

			gsap.set('#duck-torso', { transformOrigin: '50% 92%' });

			const tl = gsap.timeline({
				repeat: -1,
				yoyo: true,
				defaults: { ease: 'sine.inOut', duration: 1.8 },
			});

			tl.to('#surfer', { y: -2, rotation: -1.8 }, 0);

			tl.to('#surfer', { x: 0.2, duration: 1.4 }, 0.1)
				.to('#duck-torso', { rotation: 0.1, x: 0.8, duration: 1.4 }, '<')

				.to('#surfer', { x: -0.2, duration: 1.4 })
				.to('#duck-torso', { rotation: -0.2, x: -0.8, duration: 1.4 }, '<');

			gsap.to('#duck-torso', {
				scaleY: 0.985,
				duration: 1.2,
				ease: 'sine.inOut',
				yoyo: true,
				repeat: -1,
			});

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
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<div className='hack-description-section' ref={sectionRef}>
			<div className='hack-description-content'>
				<div className='hack-description-container'>
					<div className='hack-description' data-aos='fade-up'>
						<h1 className='hack-title'>What is Hack?</h1>
						<p className='hack-description-para'>{hackDescription}</p>
					</div>
				</div>
			</div>
			<HackDescriptionSVG className='hack-bg-svg' />
		</div>
	);
}