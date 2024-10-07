import React from 'react';
import '../../styles/About.css';
import { alumni } from '../../data/alumni';

export default function Alumni() {
	const alumniGradYears = Object.keys(alumni).sort((a, b) => b - a);

	return (
		<div className='alumni-section'>
			<p className='alumni-desc'>
				Hack wouldn&apos;t be what it is today without our awesome alumni! Even
				though these officers have graduated, they will always be part of the
				Hack family.
			</p>
			<div className='alumni-grid'>
				{alumniGradYears.map(year => (
					<div className='alumni-year' key={year}>
						<h3 className='alumni-year-title'>{year}</h3>
						<ul className='alumni-names'>
							{alumni[year].map(name => (
								<li key={name} className='alumni-name'>
									{name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
