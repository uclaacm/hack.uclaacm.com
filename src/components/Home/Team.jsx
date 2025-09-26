// import React, { useState } from 'react';
// import '../../styles/About.css';
// import { officers } from '../../data/profiles';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// export default function Team() {
// 	return (
// 		<div className='team-grid'>
// 			{officers.map(officer => (
// 				<TeamMember key={officer.id} officer={officer} />
// 			))}
// 		</div>
// 	);
// }

// function TeamMember({ officer }) {
// 	const [isEasterEgg, setIsEasterEgg] = useState(false);

// 	const handleImageClick = () => {
// 		setIsEasterEgg(prevState => !prevState);
// 	};

// 	const normalImage = new URL(
// 		`../../images/team/${officer.id}.jpg`,
// 		import.meta.url
// 	).href;
// 	const easterEggImage = new URL(
// 		`../../images/team-easter-egg/${officer.id}.jpg`,
// 		import.meta.url
// 	).href;

// 	return (
// 		<div className='team-member'>
// 			<div className='profile-image' onClick={handleImageClick}>
// 				<div className={`fade-container ${isEasterEgg ? 'fade' : ''}`}>
// 					<LazyLoadImage
// 						src={normalImage}
// 						alt={`${officer.name}`}
// 						className={`normal-image ${isEasterEgg ? 'hidden' : ''}`}
// 						effects='blur'
// 					/>
// 					<LazyLoadImage
// 						src={easterEggImage}
// 						alt={`${officer.name}`}
// 						className={`easter-egg-image ${isEasterEgg ? '' : 'hidden'}`}
// 						effects='blur'
// 					/>
// 				</div>
// 			</div>
// 			<h3 className='team-name'>{officer.name}</h3>
// 			<p className='team-pronouns'>{officer.pronouns.toUpperCase()}</p>
// 			<p className='team-role'>{officer.role}</p>
// 			<p className='team-description'>{officer.description}</p>
// 		</div>
// 	);
// }
