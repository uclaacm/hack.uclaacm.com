import React from 'react';
import '../../styles/Home.css';
import leftBanner from '../../images/leftbanner.svg';
import rightBanner from '../../images/rightbanner.svg';
import wordmark from '../../images/logo-wordmark-gradient.svg';

export default function Banner() {
	return (
		<div className='banner-container'>
			<div className='banner-content'>
				<img className='left-banner' src={leftBanner} alt='Left Banner' />
				<img className='wordmark' src={wordmark} alt='Wordmark' />
				<img className='right-banner' src={rightBanner} alt='Right Banner' />
			</div>
		</div>
	);
}
