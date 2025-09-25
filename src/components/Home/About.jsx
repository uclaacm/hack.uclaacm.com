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
				<h2 className='about-subheader'>Alumni</h2>
				<Alumni />
			</div>
		</div>
	);
}
