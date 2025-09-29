import React from 'react';
import Banner from '../components/Home/Banner';
import HackDescription from '../components/Home/HackDescription';
import PhotoCarousel from '../components/Home/PhotoCarousel';
import FAQSection from '../components/Home/FAQSection';
import useTitle from '../components/General/useTitle';
import About from '../components/Home/About';
import Events from '../components/Home/Events';
import '../styles/Home.css';

export default function Home() {
	useTitle('');

	return (
		<div id='home'>
			<Banner />
			<HackDescription />
			<Events />
			<About />
			<div className='lower-container'>
				<PhotoCarousel />
				<FAQSection />
			</div>
		</div>
	);
}
