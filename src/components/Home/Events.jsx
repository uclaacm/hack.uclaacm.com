import React, { useRef, useState, useEffect } from 'react';
import '../../styles/Events.css';
import useTitle from '../../components/General/useTitle';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

import EventsSVG from './EventsSVG'

export default function Events() {
	useTitle(' | Events');
	const [isSnapping, setIsSnapping] = useState(false);
	const sectionRef = useRef(null);
	const upScrollThreshold = 0.6; // Viewport height % needed to scroll back

	useEffect(() => {
		let accumulatedUpScroll = 0;
		
		const handleWheel = (e) => {
			if (isSnapping) {
				e.preventDefault();
				return;
			}

			const currentScrollY = window.scrollY;
			const viewportHeight = window.innerHeight;
			
			// Calculate section boundaries
			const bannerHeight = viewportHeight * 1.4;
			const hackDescriptionHeight = document.querySelector('.hack-description-section')?.offsetHeight || viewportHeight;
			const sectionTop = bannerHeight + hackDescriptionHeight;
			const sectionHeight = sectionRef.current?.offsetHeight || 400;
			const sectionBottom = sectionTop + sectionHeight;
			const upThresholdDistance = viewportHeight * upScrollThreshold;

			// Handle section scrolling
			if (currentScrollY >= sectionTop && currentScrollY < sectionBottom) {
				const topThresholdZone = sectionTop + 50; // Top zone for upward scroll
				
				// Handle upward scroll in top zone
				if (currentScrollY < topThresholdZone && e.deltaY < 0) {
					e.preventDefault();
					
					accumulatedUpScroll += Math.abs(e.deltaY);
					
					// Check if enough scroll accumulated to snap back
					if (accumulatedUpScroll >= upThresholdDistance) {
						setIsSnapping(true);
						gsap.to(window, {
							scrollTo: bannerHeight, // Snap to HackDescription start
							duration: 0.6,
							ease: 'power2.out',
							onComplete: () => {
								setIsSnapping(false);
								accumulatedUpScroll = 0;
							}
						});
					}
				}
				// Free scrolling - reset accumulators
				else {
					accumulatedUpScroll = 0;
					// Allow normal scrolling
				}
			}
			else {
				// Reset accumulated scroll when outside section
				accumulatedUpScroll = 0;
			}
		};

		window.addEventListener('wheel', handleWheel, { passive: false });
		
		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, [isSnapping, upScrollThreshold]);

	return (
		<div className='events-section' ref={sectionRef}>
			<EventsSVG className='events-bg-svg' />
		</div>
	);
}
