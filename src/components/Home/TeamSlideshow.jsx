import React, { useState, useRef, useEffect, useCallback, useId } from 'react';
import Slider from 'react-slick';
import { officers } from '../../data/profiles';
import { portraits } from '../../images/optimized/images';
import useNearViewport from '../../hooks/useNearViewport';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/About.css';

// Prepare the current, next, and previous groups for both three- and four-card layouts.
function prepareSlides(prepared, index) {
	const next = new Set(prepared);
	for (let offset = -4; offset < 8; offset++) {
		next.add((index + offset + officers.length) % officers.length);
	}
	return next;
}

export default function TeamSlideshow() {
	const sliderRef = useRef(null);
	const containerRef = useRef(null);
	const isVisible = useRef(false);
	const isHovered = useRef(false);
	const isFocused = useRef(false);
	const isNear = useNearViewport(containerRef);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [preparedSlides, setPreparedSlides] = useState(() => prepareSlides([], 0));

	const syncAutoplay = useCallback(() => {
		if (isVisible.current && !isHovered.current && !isFocused.current) {
			sliderRef.current?.slickPlay();
		} else {
			sliderRef.current?.slickPause();
		}
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		beforeChange: (_current, next) => {
			setCurrentSlide(next);
			setPreparedSlides(prepared => prepareSlides(prepared, next));
		},
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
			onFocusCapture={() => {
				isFocused.current = true;
				syncAutoplay();
			}}
			onBlurCapture={event => {
				if (!event.currentTarget.contains(event.relatedTarget)) {
					isFocused.current = false;
					syncAutoplay();
				}
			}}
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
						isCurrent={(index - currentSlide + officers.length) % officers.length < 4}
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
	const biographyId = useId();

	const handleTeamCardClick = () => {
		setWantsFlip(previous => !previous);
	};

	const { normal, alternate } = portraits[officer.id];
	const sizes = '(max-width: 1400px) 12vw, 200px';

	return (
		<div className='team-slide'>
			<div className='team-member-slideshow'>
				<button
					type='button'
					className='team-card-toggle'
					aria-label={`${wantsFlip ? 'Hide' : 'Show'} biography for ${officer.name}`}
					aria-expanded={isFlipped}
					aria-controls={biographyId}
					aria-busy={wantsFlip && !alternateLoaded}
					onClick={handleTeamCardClick}
				/>
				<div className='profile-image-slideshow'>
					<div className={`fade-container ${isFlipped ? 'fade' : ''}`}>
						{loadPortrait && (
							<img
								{...normal}
								sizes={sizes}
								alt={officer.name}
								aria-hidden={isFlipped}
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
								aria-hidden={!isFlipped}
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
				<div id={biographyId} className={`team-description-slideshow ${isFlipped ? '' : 'hidden-text'}`}>
					<p className='team-description-text-slideshow'>{officer.description}</p>
				</div>
			</div>
		</div>
	);
}
