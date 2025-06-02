import React, { useState } from 'react';
import Slider from 'react-slick';
import { officers } from '../../data/profiles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/TeamSlideshow.css';

export default function TeamSlideshow() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className='team-slideshow-container'>
			<Slider {...settings}>
				{officers.map(officer => (
					<TeamMemberSlide key={officer.id} officer={officer} />
				))}
			</Slider>
		</div>
	);
}

function TeamMemberSlide({ officer }) {
	const [isEasterEgg, setIsEasterEgg] = useState(false);

	const handleImageClick = () => {
		setIsEasterEgg(prevState => !prevState);
	};

	const normalImage = new URL(
		`../../images/team/${officer.id}.jpg`,
		import.meta.url
	).href;
	const easterEggImage = new URL(
		`../../images/team-easter-egg/${officer.id}.jpg`,
		import.meta.url
	).href;

	return (
		<div className='team-slide'>
			<div className='team-member-slideshow'>
				<div className='profile-image-slideshow' onClick={handleImageClick}>
					<div className={`fade-container ${isEasterEgg ? 'fade' : ''}`}>
						<LazyLoadImage
							src={normalImage}
							alt={`${officer.name}`}
							className={`normal-image ${isEasterEgg ? 'hidden' : ''}`}
							effects='blur'
						/>
						<LazyLoadImage
							src={easterEggImage}
							alt={`${officer.name}`}
							className={`easter-egg-image ${isEasterEgg ? '' : 'hidden'}`}
							effects='blur'
						/>
					</div>
				</div>
				<div className='team-info-slideshow'>
					<h3 className='team-name-slideshow'>{officer.name}</h3>
					<p className='team-pronouns-slideshow'>
						{officer.pronouns.toUpperCase()}
					</p>
					<p className='team-role-slideshow'>{officer.role}</p>
					<p className='team-description-slideshow'>{officer.description}</p>
				</div>
			</div>
		</div>
	);
}
