import React, { useEffect, useState } from 'react';
import EventInfoItem from '../components/Workshops/EventInfoItem';
import { archiveData } from '../data/archive';
import '../styles/Workshops.css';
import useTitle from '../components/General/useTitle';

export default function Workshops() {
	useTitle(' | Workshops');

	const [data, setData] = useState([]);

	useEffect(() => {
		setData(archiveData);
	}, []);

	return (
		<div className='workshops-container'>
			<h1 className='section-title'>Workshops</h1>
			{data.map((quarter, index) => (
				<div key={index} className='quarter'>
					<h2>{quarter.quarter}</h2>
					<EventInfoItem key={index} events={quarter.events} />
				</div>
			))}
		</div>
	);
}
