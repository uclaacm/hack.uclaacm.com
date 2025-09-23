import React from 'react';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import { Link } from 'react-router-dom';
import whiteChevronDown from '../../images/white-chevron-down.svg';
import '../../styles/FAQSection.css';

const faqs = [
	{
		question: 'Where do I find the ACM YouTube channel?',
		answer: (
			<>
				We post all recordings of our workshops on the ACM YouTube channel,
				which can be found{' '}
				<Link to='https://www.youtube.com/c/ACMUCLA/videos'>here</Link>!
			</>
		),
	},
	{
		question: 'How do I participate?',
		answer: (
			<>
				We recommend attending some of our events or asking us questions in the{' '}
				<Link to='https://discord.gg/3GSPECbCnE'>ACM Hack Discord</Link>. Check
				out the events page for more information about the events we&apos;re
				holding this quarter. Everyone is welcome!
			</>
		),
	},
	{
		question: 'Your past workshops seem interesting, how can I learn more?',
		answer: (
			<>
				Check out our <Link to='/workshops'>workshops</Link> page, where we keep a
				record of all of our past workshops!
			</>
		),
	},
	{
		question: 'How do I join your team?',
		answer: (
			<>
				We start recruitment for internship positions every fall, following the
				ACM general meeting (which you should attend)! After a quarter of
				shadowing officers, interns may have the opportunity to become full-time
				officers. All of our current officers started as interns and we highly
				encourage you to look out for applications in the fall!
			</>
		),
	},
	{
		question: 'I have some other questions!',
		answer: (
			<>
				Send us an email at{' '}
				<Link to='mailto:hack@uclaacm.com'>hack@uclaacm.com</Link> or message us
				through the{' '}
				<Link to='https://discord.gg/3GSPECbCnE'>ACM Hack Discord</Link>!
			</>
		),
	},
];

const AccordionItem = ({ header, ...rest }) => (
	<Item
		{...rest}
		header={
			<>
				{header}
				<img className='chevron' src={whiteChevronDown} alt='Expand/Collapse' />
			</>
		}
		className='item'
		buttonProps={{
			className: ({ isEnter }) => `itemBtn ${isEnter ? 'itemBtnExpanded' : ''}`,
		}}
		contentProps={{ className: 'itemContent' }}
		panelProps={{ className: 'itemPanel' }}
	/>
);

export default function FAQSection() {
	return (
		<section className='faq-section'>
			<div className='faq-header'>
				<h1 className='section-title'>FAQs</h1>
			</div>
			<Accordion transition transitionTimeout={250}>
				{faqs.map((faq, index) => (
					<AccordionItem key={index} header={faq.question}>
						{faq.answer}
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
}
