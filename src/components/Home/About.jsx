import React, { useRef, useEffect } from 'react';
import '../../styles/About.css';
import TeamSlideshow from './TeamSlideshow.jsx';
import TeamSlideshowSVG from './TeamSlideshowSVG';
import Alumni from './Alumni.jsx';
import useTitle from '../../components/General/useTitle.jsx';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export default function About() {
	useTitle(' | About');
	const duckScooterRef = useRef(null);

	useEffect(() => {
		const duck = duckScooterRef.current;
    if (!duck) return;

		const duckWidth = duck.getBoundingClientRect().width;
		const duckBox = duck.getBoundingClientRect();
		const screenWidth = window.innerWidth;

		// How far it needs to move left to disappear
		const exitLeftX = -duckBox.right;  

		// How far it needs to move right to disappear
		const exitRightX = screenWidth - duckBox.left + duckWidth * 2;

		const duckScooterMotion = gsap.timeline({ repeat: -1, });
		duckScooterMotion.to(duck, {
			x: exitLeftX,
			duration: 7,
			ease: 'none'
		})
		.to(duck, {
			scaleX: -1,
			ease: 'none'
		})
		.to(duck, {
			x: exitRightX,
			duration: 8,
			ease: 'none'
		})
		.to(duck, {
			scaleX: 1,
			duration: 0,
			ease: 'none'
		})
		.to(duck, {
			x: 0,
			duration: 3,
			ease: 'none'
		})
		
		return () => {
			duckScooterMotion.kill();
		};
	}, []);

	return (
		<div id='about'>
			<div className='about-container'>
				<div className='about-header'>
					<h1 className='about-title'>Who We Are</h1>
				</div>
				<div className='team-container'>
					<TeamSlideshow />
					<TeamSlideshowSVG duckScooterRef={duckScooterRef} />
				</div>
			</div>
			<div className='alumni-container'>
				<h1 className='section-title'>Alumni</h1>
				<Alumni />
			</div>
		</div>
	);
}
