import React from 'react';
import '../../styles/Events.css';
import useTitle from '../../components/General/useTitle';
import EventsSVG from './EventsSVG'
import nishant from '../../images/team/nishant.jpg';

export default function Events() {
	useTitle(' | Events');

	return (
		<div className='events-section'>
				<div className='events-container'>
					<div className='events-header'>
						<h1 className='events-title' data-aos='fade-right'>
							HackEvents<sup className='sup'>TM</sup>
						</h1>
					</div>
			</div>
			<EventsSVG
				className='events-bg-svg'
				leftBoardImage={<img src={nishant} alt='Event poster left' />}
				rightBoardImage={<img src={nishant} alt='Event poster right' />}
				leftBoardText={'Interested in software engineering and curious about the startup world? Join us for Code2Company, our entrepreneurship workshop where we’ll learn how to build your first MVP and provide hands‑on experience with our collab with Linkd (YC X25), a real YC‑backed team!'}
				rightBoardText={'Interested in software engineering and curious about the startup world? Join us for Code2Company, our entrepreneurship workshop where we’ll learn how to build your first MVP and provide hands‑on experience with our collab with Linkd (YC X25), a real YC‑backed team!'}
			/>
		</div>
	);
}
