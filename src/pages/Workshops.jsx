import React, { useEffect, useRef, useState } from 'react';
import EventInfoItem from '../components/Workshops/EventInfoItem';
import { archiveData } from '../data/archive';
import { useWorkshopSearch } from '../hooks/useWorkshopSearch';
import '../styles/Workshops.css';
import useTitle from '../components/General/useTitle';

export default function Workshops() {
	useTitle(' | Workshops');

	const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const searchInputRef = useRef(null);
	const filteredData = useWorkshopSearch(data, searchQuery);

	useEffect(() => {
		setData(archiveData);
	}, []);

	return (
		<div className='workshops-container'>
			<h1 className='section-title'>Workshops</h1>
			<input
				ref={searchInputRef}
				type='text'
				className='workshop-search-input'
				placeholder='Search workshops by name, tag, or presenter...'
				aria-label='Search workshops by series, session, tag, or presenter'
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
			/>
			{searchQuery.trim() && filteredData.length === 0 && (
				<div className='workshop-search-empty'>
					<p role='status'>No workshops match your search. Try another name, tag, or presenter.</p>
					<button
						type='button'
						className='workshop-search-reset'
						onClick={() => {
							setSearchQuery('');
							searchInputRef.current.focus();
						}}
					>
						Clear search
					</button>
				</div>
			)}
			{filteredData.map((quarter, index) => (
				<div key={index} className='quarter'>
					<h2>{quarter.quarter}</h2>
					<EventInfoItem key={index} events={quarter.events} isSearching={searchQuery.trim().length > 0} />
				</div>
			))}
		</div>
	);
}
