import React from 'react';
import Banner from '../components/Home/Banner';
import HackDescription from '../components/Home/HackDescription';
import PhotoCarousel from '../components/Home/PhotoCarousel';
import FAQSection from '../components/Home/FAQSection';
import Announcement from '../components/Home/Announcement';
import CurrEvents from '../components/Home/CurrEvents';

export default function Home() {
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
			<Container1>
				<Announcement />
				<HackDescription />
			</Container1>

			<Container2>
				<CurrEvents />
				<PhotoCarousel />
			</Container2>

			<Container1>
				<FAQSection />
			</Container1>
		</div>
	);
}
