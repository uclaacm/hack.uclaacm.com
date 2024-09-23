import React, { useState } from 'react';
import '../../styles/About.css';
import { officers } from '../../data/profiles';

export default function Team() {
	return (
		<div className='team-grid'>
			{officers.map(officer => (
				<TeamMember key={officer.id} officer={officer} />
			))}
		</div>
	);
}

function TeamMember({ officer }) {
	const [isEasterEgg, setIsEasterEgg] = useState(false);

	const handleImageClick = () => {
		setIsEasterEgg(prevState => !prevState);
	};

	return (
		<div className='team-member'>
			<div className='profile-image' onClick={handleImageClick}>
				<div className={`fade-container ${isEasterEgg ? 'fade' : ''}`}>
					<img
						src={`/src/images/team/${officer.id}.jpg`}
						alt={`${officer.name}`}
						className={`normal-image ${isEasterEgg ? 'hidden' : ''}`}
					/>
					<img
						src={`/src/images/team-easter-egg/${officer.id}.jpg`}
						alt={`${officer.name}`}
						className={`easter-egg-image ${isEasterEgg ? '' : 'hidden'}`}
					/>
				</div>
			</div>
			<h3 className='team-name'>{officer.name}</h3>
			<p className='team-pronouns'>{officer.pronouns.toUpperCase()}</p>
			<p className='team-role'>{officer.role}</p>
			<p className='team-description'>{officer.description}</p>
		</div>
	);
}
