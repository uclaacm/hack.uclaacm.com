import React from 'react';
import '../styles/About.css';
import Team from '../components/About/Team';
import Alumni from '../components/About/Alumni';
import { teamIntro } from '../data/profiles.js';
import useTitle from '../components/General/useTitle.jsx';

export default function About() {
	useTitle(' | About');
	return (
		<div id='about'>
			<div className='about-header'>
				<h1 className='about-title'>Who We Are</h1>
				<p className='about-desc'>{teamIntro}</p>
			</div>
			<h2 className='about-subheader'>The Team</h2>
			<Team />
			<h2 className='about-subheader'>Alumni</h2>
			<Alumni />
		</div>
	);
}
