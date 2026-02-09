import React, { useEffect, useState } from 'react';
import EventInfoItem from '../components/Workshops/EventInfoItem';
import { archiveData } from '../data/archive';
import { useWorkshopSearch } from '../hooks/useWorkshopSearch';
import '../styles/Workshops.css';
import useTitle from '../components/General/useTitle';

export default function Workshops() {
	useTitle(' | Workshops');

	const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const filteredData = useWorkshopSearch(data, searchQuery);

	useEffect(() => {
		setData(archiveData);
	}, []);

	return (
		<div className='workshops-container'>
			<h1 className='section-title'>Workshops</h1>
			<input
				type='text'
				className='workshop-search-input'
				placeholder='Search workshops by name, tag, or presenter...'
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
			/>
			{filteredData.map((quarter, index) => (
				<div key={index} className='quarter'>
					<h2>{quarter.quarter}</h2>
					<EventInfoItem key={index} events={quarter.events} />
				</div>
			))}
		</div>
	);
}
