import React from 'react';
import '../../styles/About.css';
import TeamSlideshow from './TeamSlideshow.jsx';
import TeamSlideshowSVG from './TeamSlideshowSVG';
import Alumni from './Alumni.jsx';
import useTitle from '../../components/General/useTitle.jsx';

export default function About() {
	useTitle(' | About');
	return (
		<div id='about'>
			<div className='about-container'>
				<div className='about-header'>
					<h1 className='about-title'>Who We Are</h1>
				</div>
				<div className='team-container'>
					<TeamSlideshow />
					<TeamSlideshowSVG />
				</div>
			</div>
			<div className='alumni-container'>
				<h1 className='section-title'>Alumni</h1>
				<Alumni />
			</div>
		</div>
	);
}
