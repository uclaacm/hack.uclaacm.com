import React from 'react';
import Banner from '../components/Home/Banner';
import HackDescription from '../components/Home/HackDescription';
import PhotoCarousel from '../components/Home/PhotoCarousel';
import FAQSection from '../components/Home/FAQSection';

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
				<HackDescription />
			</Container1>

			<Container2>
				<h1>Fall 2024 Events</h1>
			</Container2>

			<Container1>
				<PhotoCarousel />
			</Container1>

			<Container2>
				<FAQSection />
			</Container2>
		</div>
	);
}
