import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { officers } from '../../data/profiles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/About.css';

export default function TeamSlideshow() {
	const sliderRef = useRef(null);
	const containerRef = useRef(null);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (sliderRef.current) {
					if (entry.isIntersecting) {
						sliderRef.current.slickPlay();
					} else {
						sliderRef.current.slickPause();
					}
				}
			},
			{
				root: null,
				threshold: 0.8,
			}
		);

		if (containerRef.current) observer.observe(containerRef.current);

		return () => {
			if (containerRef.current) observer.unobserve(containerRef.current);
		};
	}, []);

	return (
		<div ref={containerRef} className='team-slideshow-container'>
			<Slider ref={sliderRef} {...settings}>
				{officers.map(officer => (
					<TeamMemberSlide key={officer.id} officer={officer} />
				))}
			</Slider>
		</div>
	);
}

function TeamMemberSlide({ officer }) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleTeamCardClick = () => {
		setIsFlipped(prevState => !prevState);
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
			<div className='team-member-slideshow' onClick={handleTeamCardClick}>
				<div className='profile-image-slideshow'>
					<div className={`fade-container ${isFlipped ? 'fade' : ''}`}>
						<LazyLoadImage
							src={normalImage}
							alt={`${officer.name}`}
							className={`normal-image ${isFlipped ? 'hidden-image' : ''}`}
							effects='blur'
						/>
						<LazyLoadImage
							src={easterEggImage}
							alt={`${officer.name}`}
							className={`easter-egg-image ${isFlipped ? '' : 'hidden-image'}`}
							effects='blur'
						/>
					</div>
				</div>
				<div className={`team-info-slideshow ${isFlipped ? 'hidden-text' : ''}`}>
					<h3 className='team-name-slideshow'>{officer.name}</h3>
					<p className='team-pronouns-slideshow'>{officer.pronouns}</p>
				</div>
				<p className={`team-role-slideshow ${isFlipped ? 'hidden-text' : ''}`}>{officer.role}</p>
				<div className={`team-description-slideshow ${isFlipped ? '' : 'hidden-text'}`}>
					<p className='team-description-text-slideshow'>{officer.description}</p>
				</div>
			</div>
		</div>
	);
}
