import React, { useRef, useState, useEffect } from 'react';
import '../../styles/Home.css';
import BannerSVG from './BannerSVG';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export default function Banner() {
  const wireRef = useRef(null);
  const lightRef = useRef(null);
	const [animationBegun, setAnimationBegun] = useState(false);

	const defaultMotionPath = (pathId) => ({
		motionPath: {
			path: `#${pathId}`,
			align: `#${pathId}`,
			alignOrigin: [0.5, 0.5],
			autoRotate: true
		},
	});

	const wireIdToDuration = {
		'wire1': 5,
		'wire2': 5,
		'wire3': 10,
		'wire4': 10,
		'wire5': 6,
		'wire6': 4,
		'wire7': 2,
		'wire8': 10
	};

	const createTimeline = (lightId, wireSequence) => {
		const timeline = gsap.timeline({ defaults: { ease: 'none' }, repeat: -1, delay: 2 })
		wireSequence.forEach(wireId => {
			timeline.to(`#${lightId}`, {
				...defaultMotionPath(wireId),
				duration: wireIdToDuration[wireId],
			});
		});
		return timeline;
	};

	useEffect(() => {
		const timeline1 = createTimeline('light1', ['wire1', 'wire2', 'wire3', 'wire4', 'wire5', 'wire6', 'wire7', 'wire8']);
		const timeline2 = createTimeline('light2', ['wire3', 'wire4', 'wire5', 'wire6', 'wire7', 'wire8', 'wire1', 'wire2']);
		const timeline3 = createTimeline('light3', ['wire5', 'wire6', 'wire7', 'wire8', 'wire1', 'wire2', 'wire3', 'wire4']);
		const timeline4 = createTimeline('light4', ['wire7', 'wire8', 'wire1', 'wire2', 'wire3', 'wire4', 'wire5', 'wire6']);

		const animationTimer = setTimeout(() => {
			if (lightRef.current) lightRef.current.classList.add('light-glow');
      if (wireRef.current) wireRef.current.classList.add('wire-glow');
			setAnimationBegun(true);
    }, 2000);

    return () => {
			clearTimeout(animationTimer);
			timeline1.kill;
			timeline2.kill;
			timeline3.kill;
			timeline4.kill;
		};
  }, []);

	return (
		<div className='banner-container'>
			<div className='banner-content'>
				<BannerSVG wireRef={wireRef} lightRef={lightRef} animationBegun={animationBegun}/>
			</div>
		</div>
	);
}
