import React from 'react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import whiteChevronDown from '../../images/white-chevron-down.svg';
import { Youtube, Monitor, FileText, User } from '@geist-ui/icons';
import '../../styles/Workshops.css';

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
		contentProps={{ className: 'archiveItemContent' }}
		panelProps={{ className: 'archiveItemPanel' }}
	/>
);

export default function EventInfoItem({ events, isSearching }) {
	return (
		<div className='event-details'>
			<Accordion
				key={isSearching} 
				transition 
				transitionTimeout={250}
				allowMultiple
			>
				{events.map((event, index) => (
					<AccordionItem key={index} header={event.eventName} initialEntered={isSearching}>
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
										<a
											href={session.readme}
											target='_blank'
											rel='noopener noreferrer'
										>
											<div className='workshopIconContainer'>
												<FileText className='readMeIcon workshopIcon' size={20} alt="readMe-icon"></FileText>
												<p>README</p>
											</div>
										</a>
									)}

									{session.slides && (
										<a
											href={session.slides}
											target='_blank'
											rel='noopener noreferrer'
										>
											<div className='workshopIconContainer'>
												<Monitor className='slideIcon workshopIcon' size={20} alt="slide-icon"></Monitor>
												<p>Slides</p> 
											</div>
										</a>
									)}

									{session.youtube && (
										<a
											href={session.youtube}
											target='_blank'
											rel='noopener noreferrer'
										>
											<div className='workshopIconContainer'>
												<Youtube className='videoIcon workshopIcon' size={20} alt="video-icon"></Youtube>
												<p>YouTube</p>
											</div>
										</a>
									)}
								</div>

								<div className='presentersContainer'>
									<User className='personIcon workshopIcon' color="var(--pink)" size={20} alt="person-icon"></User>
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
