import React from 'react';
import '../../styles/Home.css';
import img1 from '../../images/code2company.png';
import img2 from '../../images/hackgpt.png';

const firstDescription =
	'Interested in software engineering and curious about the startup world? Join us for Code2Company, our entrepreneurship workshop where we\'ll learn how to build your first MVP and provide hands-on experience with our collab with Linkd (YC X25), a real YC-backed team!';

const secondDescription =
	'Join us for a beginner to intermediate level one-off hacking day where we\'ll explore multi-agent retrieval chains and retrieval augmented generation (RAG) using Langchain!';

export default function CurrEvents() {
	return (
		<div>
			<h1 className='section-title'>Current Events</h1>
			<div className='events-container'>
				<div className='event-column'>
					<h2 className='event-title'>Code2Company</h2>
					<img className='event-img' src={img1} alt='Code2Company' />
					<p className='event-description'>{firstDescription}</p>
				</div>
				<div className='event-column'>
					<h2 className='event-title'>HackGPT</h2>
					<img className='event-img' src={img2} alt='GPT' />
					<p className='event-description'>{secondDescription}</p>
				</div>
			</div>
		</div>
	);
}
