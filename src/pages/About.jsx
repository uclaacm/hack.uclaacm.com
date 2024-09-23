import React from 'react';
import '../styles/About.css';

const aboutDescription = `We are a group of hackers, designers, and 
engineers all working to improve UCLA's hacking community. We believe 
in moving fast, having fun, and being passionate about using technology 
to solve problems that are relevant to us. We have a high bar for success, 
and are willing to work incredibly hard, balancing school and many other 
things, to improve the experience of other students around us.`;

export default function About() {
	return (
		<div id='about'>
			<div className='about-header'>
				<h1 className='about-title'>Who We Are</h1>
				<p className='about-desc'>{aboutDescription}</p>
			</div>
			<h2 className='about-subheader'>The Team</h2>
			<h2 className='about-subheader'>Alumni</h2>
		</div>
	);
}
