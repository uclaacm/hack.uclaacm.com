import React, { useEffect, useState } from 'react';
import EventInfoItem from '../components/Archive/EventInfoItem';
import { archiveData } from '../data/archive';
import '../styles/Archive.css';
import useTitle from '../components/General/useTitle';
import PhotoCarousel from '../components/Archive/PhotoCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Archive() {
	useTitle(' | Archive');

	const [data, setData] = useState([]);

	useEffect(() => {
		setData(archiveData);
	}, []);

	return (
		<div className='archive-container'>
			<div className='archive-header'>
				<h1>Workshop Archive</h1>
			</div>
			<PhotoCarousel />
			{data.map((quarter, index) => (
				<div key={index} className='quarter'>
					<h2>{quarter.quarter}</h2>
					<EventInfoItem key={index} events={quarter.events} />
				</div>
			))}
		</div>
	);
}
