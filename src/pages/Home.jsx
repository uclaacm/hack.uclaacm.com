import React from 'react';
import Banner from '../components/Home/Banner';
import HackDescription from '../components/Home/HackDescription';

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
				<p>This is content inside Container2 (transparent background).</p>
			</Container2>

			<Container1>
				<p>This is more content inside Container1.</p>
			</Container1>
		</div>
	);
}
