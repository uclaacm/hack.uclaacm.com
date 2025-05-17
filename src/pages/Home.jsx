import React from 'react';
import Banner from '../components/Home/Banner';
import HackDescription from '../components/Home/HackDescription';
import FAQSection from '../components/Home/FAQSection';
import Announcement from '../components/Home/Announcement';
import useTitle from '../components/General/useTitle';
import About from '../components/Home/About';
import Events from '../components/Home/Events';

export default function Home() {
	useTitle('');

	const Container1 = ({ children }) => (
		<section className='white-container'>
			<div className='container-md'>{children}</div>
		</section>
	);

	const Container2 = ({ children }) => (
		<section className='transparent-container'>
			<div className='container-md'>{children}</div>
		</section>
	);

	return (
		<div id='home'>
			<Banner />
			<HackDescription />
			<Announcement />

			<Container2>
				<Events />
			</Container2>

			<Container1>
				<About />
			</Container1>

			<Container2>
				<FAQSection />
			</Container2>
		</div>
	);
}
