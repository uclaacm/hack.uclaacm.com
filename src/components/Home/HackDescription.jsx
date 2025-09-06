import React, { useRef, useState, useEffect } from 'react';
import '../../styles/Home.css';
// import pigeon from '../../images/pigeon.svg';
import HackDescriptionSVG from './HackDescriptionSVG';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const hackDescription = `We are a student-run organization whose mission is to
empower the community by providing the means to build amazing things and explore
what is possible through code. We teach quarterly workshops and host events for
students to expand their knowledge and apply their creativity to projects. Our
events are for coders of all skills levels, so whether you've been to 10 hackathons
or you just learned "Hello World," we're happy to have you.`;

export default function HackDescription() {
	const [isSnapping, setIsSnapping] = useState(false);
	const [upScrollThreshold] = useState(0.6); // % of viewport height needed to scroll back to banner
	const [downScrollThreshold] = useState(0.6); // % of viewport height needed to scroll past this section
	const [textScrollThreshold] = useState(0.2); // % of viewport height needed to make text appear
	const [textVisible, setTextVisible] = useState(false);
	const [isTextDelayActive, setIsTextDelayActive] = useState(false);
	const sectionRef = useRef(null);
	const hasTriggeredText = useRef(false);

	useEffect(() => {
		let accumulatedUpScroll = 0;
		let accumulatedDownScroll = 0;
		let accumulatedTextScroll = 0;
		
		const handleWheel = (e) => {
			if (isSnapping || isTextDelayActive) {
				e.preventDefault();
				return;
			}

			const currentScrollY = window.scrollY;
			const viewportHeight = window.innerHeight;
			const bannerHeight = viewportHeight;
			const sectionTop = bannerHeight;
			const sectionHeight = sectionRef.current?.offsetHeight || viewportHeight;
			const sectionBottom = sectionTop + sectionHeight;
			const upThresholdDistance = viewportHeight * upScrollThreshold;
			const downThresholdDistance = viewportHeight * downScrollThreshold;
			const textThresholdDistance = viewportHeight * textScrollThreshold;

			// Handle section scrolling
			if (currentScrollY >= sectionTop && currentScrollY < sectionBottom) {

				if (e.deltaY > 0) {
					accumulatedTextScroll += Math.abs(e.deltaY);
				}

				if (!hasTriggeredText.current && accumulatedTextScroll >= textThresholdDistance) {
					hasTriggeredText.current = true;
					setTextVisible(true);
					
					// Start text delay for scrolling past description
					setIsTextDelayActive(true);
					setTimeout(() => {
						setIsTextDelayActive(false);
					}, 1000);
				}

				// Handle upward scrolling in the first part of this section
				if (currentScrollY < sectionTop + Math.min(200, sectionHeight * 0.3) && e.deltaY < 0) {
					e.preventDefault();
					
					accumulatedUpScroll += Math.abs(e.deltaY);
					accumulatedDownScroll = 0;
					
					// Check if enough scroll to snap back to banner
					if (accumulatedUpScroll >= upThresholdDistance) {
						setIsSnapping(true);
						gsap.to(window, {
							scrollTo: 0,
							duration: 0.6,
							ease: 'power2.out',
							onComplete: () => {
								setIsSnapping(false);
								accumulatedUpScroll = 0;
							}
						});
					}
				}
				// Handle downward scroll
				else if (e.deltaY > 0) {
					e.preventDefault();
					
					accumulatedDownScroll += Math.abs(e.deltaY);
					accumulatedUpScroll = 0; 
					
					// Check if enough scroll to continue past section
					if (accumulatedDownScroll >= downThresholdDistance) {
						setIsSnapping(true);
						gsap.to(window, {
							scrollTo: sectionBottom,
							duration: 0.6,
							ease: 'power2.out',
							onComplete: () => {
								setIsSnapping(false);
								accumulatedDownScroll = 0;
							}
						});
					}
				}

				else if (e.deltaY < 0) {
					accumulatedDownScroll = Math.max(0, accumulatedDownScroll - Math.abs(e.deltaY) * 0.5);
				}
			}
			else {

				accumulatedUpScroll = 0;
				accumulatedDownScroll = 0;
			}
		};

		window.addEventListener('wheel', handleWheel, { passive: false });
		
		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, [isSnapping, isTextDelayActive, upScrollThreshold, downScrollThreshold, textScrollThreshold]);

	return (
		<div className='hack-description-section' ref={sectionRef}>
			<div className='hack-description-content'>
				<div className='hack-description-container'>
					<div className={`hack-description ${textVisible ? 'text-visible' : 'text-hidden'}`}>
						<h1 className='hack-title'>What is Hack?</h1>
						<p className='hack-description-para'>{hackDescription}</p>
					</div>
				</div>
			</div>
			<HackDescriptionSVG className="hack-bg-svg" />
		</div>
	);
}