import React from 'react';
import '../styles/Events.css';
import useTitle from '../components/General/useTitle';

import c2cimg from '../images/code2company.png';
import gptimg from '../images/hackgpt.png';

export default function Events() {
	useTitle(' | Events');
	return (
		<div id='events'>
			<div className='events-header'>
				<h1 className='events-title'>
					HackEvents<sup className='sup'>TM</sup>
				</h1>
				<p className='events-desc'>
					Hack offers workshops that focus on practical application, such as web
					development and mobile development. We also host fun one-time
					activities such as UCLA&apos;s biggest beginner-friendly Hackathon,
					Hack on the Hill. Regardless of background or experience, you can find
					an event that is just for you.
				</p>
			</div>
			<div className='current-events'>
				<h1>Spring 2025 Events</h1>
				<div className='event'>
					<div className='info-container'>
						<h2 className='event-title'>Code2Company</h2>
						<p className='event-desc'>
							Interested in software engineering and curious about the startup
							world? Join us for Code2Company, ACM Hack&apos;s entrepreneurship
							workshop where we&apos;ll walk you through building your first
							MVP, understanding financial basics, and how to get started in the
							startup world! We&apos;ll also provide an opportunity to
							collaborate with Linkd (YC X25) to get hands-on experience to
							build with a real YC-backed team!
						</p>
					</div>
					<img className='event-img' src={c2cimg} alt='C2C Logo' />
				</div>
				<div className='event second'>
					<div className='info-container'>
						<h2 className='event-title'>HackGPT</h2>
						<p className='event-desc'>
							ACM Hack is blasting off with HackGPT! Join us for a beginner to
							intermediate level one-off hacking day where we&apos;ll explore
							multi-agent retrieval chains and retrieval augmented generation
							(RAG) using Langchain, a chatbot library even WALL-E would&apos;ve
							kept in his treasure stash. Whether you&apos;re a robot , a probe,
							or a human , by the end of the workshop, you will be able to
							develop a multifunctional, personalized conversational chatbot!
						</p>
					</div>
					<img className='event-img' src={gptimg} alt='GPT Logo' />
				</div>
			</div>
		</div>
	);
}
