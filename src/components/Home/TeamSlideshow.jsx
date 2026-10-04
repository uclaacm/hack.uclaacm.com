import React, { useState, useRef, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import { officers } from '../../data/profiles';
import { portraits } from '../../images/optimized/images';
import useNearViewport from '../../hooks/useNearViewport';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/About.css';

const layouts = [
	{ query: '(max-width: 768px)', count: 1 },
	{ query: '(max-width: 1024px)', count: 2 },
	{ query: '(max-width: 1800px)', count: 3 },
];

function visibleSlideCount() {
	return layouts.find(layout => window.matchMedia(layout.query).matches)?.count ?? 4;
}

// Prepare the current group and its neighbors, including across the wraparound.
function prepareSlides(prepared, index, count) {
	const next = new Set(prepared);
	for (let offset = -count; offset < count * 2; offset++) {
		next.add((index + offset + officers.length) % officers.length);
	}
	return next;
}

export default function TeamSlideshow() {
	const sliderRef = useRef(null);
	const containerRef = useRef(null);
	const isVisible = useRef(false);
	const isHovered = useRef(false);
	const isNear = useNearViewport(containerRef);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slidesToShow, setSlidesToShow] = useState(visibleSlideCount);
	const [preparedSlides, setPreparedSlides] = useState(() => prepareSlides([], 0, slidesToShow));

	useEffect(() => {
		const queries = layouts.map(layout => window.matchMedia(layout.query));
		const updateLayout = () => setSlidesToShow(visibleSlideCount());
		queries.forEach(query => query.addEventListener('change', updateLayout));
		return () => queries.forEach(query => query.removeEventListener('change', updateLayout));
	}, []);

	useEffect(() => {
		setPreparedSlides(prepared => prepareSlides(prepared, currentSlide, slidesToShow));
	}, [currentSlide, slidesToShow]);

	const syncAutoplay = useCallback(() => {
		if (isVisible.current && !isHovered.current) {
			sliderRef.current?.slickPlay();
		} else {
			sliderRef.current?.slickPause();
		}
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow,
		slidesToScroll: slidesToShow,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		beforeChange: (_current, next) => {
			setCurrentSlide(next);
		},
	};

	useEffect(() => {
		syncAutoplay();
		const observer = new IntersectionObserver(
			([entry]) => {
				isVisible.current = entry.isIntersecting && entry.intersectionRatio >= 0.8;
				syncAutoplay();
			},
			{
				root: null,
				threshold: 0.8,
			}
		);

		if (containerRef.current) observer.observe(containerRef.current);

		return () => {
			observer.disconnect();
		};
	}, [syncAutoplay]);

	return (
		<div
			ref={containerRef}
			className='team-slideshow-container'
			onMouseEnter={() => {
				isHovered.current = true;
				syncAutoplay();
			}}
			onMouseLeave={() => {
				isHovered.current = false;
				syncAutoplay();
			}}
		>
			<Slider ref={sliderRef} {...settings}>
				{officers.map((officer, index) => (
					<TeamMemberSlide
						key={officer.id}
						officer={officer}
						loadPortrait={isNear && preparedSlides.has(index)}
						isCurrent={(index - currentSlide + officers.length) % officers.length < slidesToShow}
					/>
				))}
			</Slider>
		</div>
	);
}

function TeamMemberSlide({ officer, loadPortrait, isCurrent }) {
	const [wantsFlip, setWantsFlip] = useState(false);
	const [portraitLoaded, setPortraitLoaded] = useState(false);
	const [alternateLoaded, setAlternateLoaded] = useState(false);
	const isFlipped = wantsFlip && alternateLoaded;

	const handleTeamCardClick = () => {
		setWantsFlip(previous => !previous);
	};

	const { normal, alternate } = portraits[officer.id];
	const sizes = '(max-width: 1024px) 200px, (max-width: 1400px) 12vw, 200px';

	return (
		<div className='team-slide'>
			<div className='team-member-slideshow' onClick={handleTeamCardClick}>
				<div className='profile-image-slideshow'>
					<div className={`fade-container ${isFlipped ? 'fade' : ''}`}>
						{loadPortrait && (
							<img
								{...normal}
								sizes={sizes}
								alt={officer.name}
								className={`normal-image ${isFlipped ? 'hidden-image' : ''}`}
								decoding='async'
								onLoad={() => setPortraitLoaded(true)}
							/>
						)}
						{portraitLoaded && (isCurrent || wantsFlip || alternateLoaded) && (
							<img
								{...alternate}
								sizes={sizes}
								alt={officer.name}
								className={`easter-egg-image ${isFlipped ? '' : 'hidden-image'}`}
								decoding='async'
								fetchpriority='low'
								onLoad={() => setAlternateLoaded(true)}
							/>
						)}
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
