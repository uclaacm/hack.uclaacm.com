import React from 'react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import whiteChevronDown from '../../images/white-chevron-down.svg';
import slideIcon from '../../images/workshop/slide.svg';
import videoIcon from '../../images/workshop/video.svg';
import personIcon from '../../images/workshop/person.svg';
import readMeIcon from '../../images/workshop/read-me.svg';
import '../../styles/Archive.css';

const AccordionItem = ({ header, ...rest }) => (
	<Item
		{...rest}
		header={
			<>
				{header}
				<img className='chevron' src={whiteChevronDown} alt='Expand/Collapse' />
			</>
		}
		className='archiveItem'
		buttonProps={{
			className: ({ isEnter }) =>
				`archiveItemBtn ${isEnter ? 'archiveItemBtnExpanded' : ''}`,
		}}
		headerProps={{ className: 'archiveItemHeader' }}
		contentProps={{ className: 'archiveItemContent' }}
		panelProps={{ className: 'archiveItemPanel' }}
	/>
);

export default function EventInfoItem({ events }) {
	return (
		<div className='event-details'>
			<Accordion transition transitionTimeout={250}>
				{events.map((event, index) => (
					<AccordionItem key={index} header={event.eventName}>
						<p className='directors'>
							Directed by{' '}
							{event.directors.map(
								(director, index) =>
									`${director}${
										index < event.directors.length - 1 ? ' and ' : ''
									}`
							)}
						</p>
						{event.sessions.map((session, index) => (
							<div key={index} className='session'>
								<div className='session-header'>
									<h3>{session.sessionName}</h3>
									<div className='session-tags'>
										{session.sessionTags.map((tag, index) => (
											<span key={index} className='tag'>
												{tag}
											</span>
										))}
									</div>
								</div>

								<div className='event-links'>
									{session.readme && (
										<div className='workshopIconContainer'>
											<img src={readMeIcon} className='readMeIcon workshopIcon' alt="readMe-icon"/>
											<a
												href={session.readme}
												target='_blank'
												rel='noopener noreferrer'
											>
												README
											</a>
										</div>
									)}

									{session.slides && (
										<div className='workshopIconContainer'>
											<img src={slideIcon} className='slideIcon workshopIcon' alt="slide-icon"/>
											<a
												href={session.slides}
												target='_blank'
												rel='noopener noreferrer'
											>
												Slides
											</a>
										</div>
									)}

									{session.youtube && (
										<div className='workshopIconContainer'>
											<img src={videoIcon} className='videoIcon workshopIcon' alt="video-icon"/>
											<a
												href={session.youtube}
												target='_blank'
												rel='noopener noreferrer'
											>
												YouTube
											</a>
										</div>
									)}
								</div>

								<div className='presentersContainer'>
									<img src={personIcon} className='personIcon workshopIcon' alt="person-icon"/>
									<p className='presenters'>
										Taught by{' '}
										{session.presenters.map(
											(presenter, index) =>
												`${presenter}${
													index < session.presenters.length - 1 ? ' and ' : ''
												}`
										)}
									</p>
								</div>
							</div>
						))}
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
