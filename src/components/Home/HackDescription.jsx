import React from 'react';
import '../../styles/Home.css';
import logo from '../../images/acm-hack-logo.svg';

const hackDescription = `We are a student-run organization whose mission is to
empower the community by providing the means to build amazing things and explore
what is possible through code. We teach quarterly workshops and host events for
students to expand their knowledge and apply their creativity to projects. Our
events are for coders of all skills levels, so whether you've been to 10 hackathons
or you just learned "Hello World," we're happy to have you.`;

export default function HackDescription() {
	return (
		<div className='hack-description-container'>
			<img src={logo} className='home-hack-logo' alt='Hack Logo' />
			<div className='hack-description'>
				<h4 className='hack-title'>What is Hack?</h4>
				<p>{hackDescription}</p>
			</div>
		</div>
	);
}
