import React from 'react';
import '../../styles/Home.css';
// import pigeon from '../../images/pigeon.svg';
import HackDescriptionSVG from './HackDescriptionSVG';

const hackDescription = `We are a student-run organization whose mission is to
empower the community by providing the means to build amazing things and explore
what is possible through code. We teach quarterly workshops and host events for
students to expand their knowledge and apply their creativity to projects. Our
events are for coders of all skills levels, so whether you've been to 10 hackathons
or you just learned "Hello World," we're happy to have you.`;

export default function HackDescription() {
	return (
		<div className='hack-description-section'>
			<div className='hack-description-content'>
				<div className='hack-description-container'>
					<div className='hack-description' data-aos='fade-right'>
						<h1 className='hack-title'>What is Hack?</h1>
						<p>{hackDescription}</p>
					</div>
				</div>
			</div>
			<HackDescriptionSVG className="hack-bg-svg" />
		</div>
	);
}
