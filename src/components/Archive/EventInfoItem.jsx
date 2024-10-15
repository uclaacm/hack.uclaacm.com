import React from 'react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import chevronDown from '../../images/chevron-down.svg';
import '../../styles/Archive.css';

const AccordionItem = ({ header, ...rest }) => (
	<Item
		{...rest}
		header={
			<>
				{header}
				<img className='chevron' src={chevronDown} alt='Expand/Collapse' />
			</>
		}
		className='item'
		buttonProps={{
			className: ({ isEnter }) => `itemBtn ${isEnter ? 'itemBtnExpanded' : ''}`,
		}}
		headerProps={{ className: 'itemHeader' }}
		contentProps={{ className: 'itemContent' }}
		panelProps={{ className: 'itemPanel' }}
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
										<a
											href={session.readme}
											target='_blank'
											rel='noopener noreferrer'
										>
											README
										</a>
									)}

									{session.readme && (session.slides || session.youtube) && (
										<span> • </span>
									)}

									{session.slides && (
										<a
											href={session.slides}
											target='_blank'
											rel='noopener noreferrer'
										>
											Slides
										</a>
									)}

									{session.slides && session.youtube && <span> • </span>}

									{session.youtube && (
										<a
											href={session.youtube}
											target='_blank'
											rel='noopener noreferrer'
										>
											YouTube
										</a>
									)}
								</div>

								<p>
									Taught by{' '}
									{session.presenters.map(
										(presenter, index) =>
											`${presenter}${
												index < session.presenters.length - 1 ? ' and ' : ''
											}`
									)}
								</p>
							</div>
						))}
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
