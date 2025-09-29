import React, { useRef, useState, useEffect } from 'react';
import '../../styles/Banner.css';
import BannerSVG from './BannerSVG';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export default function Banner() {
  const wireRef = useRef(null);
  const lightRef = useRef(null);
	const textRef = useRef(null);
	const [animationBegun, setAnimationBegun] = useState(false);
	const [startFlicker, setStartFlicker] = useState(false);

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
		'wire7': 12,
		'wire8': 10
	};

	const createTimeline = (lightId, wireSequence) => {
		const timeline = gsap.timeline({ defaults: { ease: 'none' }, repeat: -1, delay: 2 });
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

    const duckEyeBlink = gsap.timeline({
      repeat: -1,
      repeatDelay: Math.random() * 3 + 2,
    });
    
    duckEyeBlink.to(['#Ellipse\\ 3869', '#Ellipse\\ 3870'], {
      scaleY: 0.1,
      duration: 0.2,
      transformOrigin: 'center',
    })
    .to(['#Ellipse\\ 3869', '#Ellipse\\ 3870'], {
      scaleY: 1,
      duration: 0.1,
      transformOrigin: 'center',
    });

		const duckTyping = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      yoyo: true
    });
    
    duckTyping.fromTo('#Vector\\ 2381', 
      {
        rotation: -15,
        transformOrigin: 'top left'
      },
      {
        rotation: 3,
        duration: 1.5,
        transformOrigin: 'top left',
        ease: 'power1.inOut'
      }
    );

		const cloud1Motion = gsap.timeline({
      repeat: -1,
    });

    cloud1Motion.to(['#cloud-1'], {
      translateX: -15,
      duration: 1,
			ease: 'none'
    })
    .to(['#cloud-1'], {
      translateX: 180,
      duration: 13,
			ease: 'none'
    })
		.to(['#cloud-1'], {
      translateX: 0,
      duration: 12,
			ease: 'none'
    });

		const cloud2Motion = gsap.timeline({
      repeat: -1,
    });

    cloud2Motion.to(['#cloud-2'], {
      translateX: 135,
      duration: 9,
			ease: 'none'
    })
    .to(['#cloud-2'], {
      translateX: -75,
      duration: 14,
			ease: 'none'
    })
		.to(['#cloud-2'], {
      translateX: 0,
      duration: 5,
			ease: 'none'
    });

    setStartFlicker(true);

		const animationTimer = setTimeout(() => {
			if (lightRef.current) lightRef.current.classList.add('light-glow');
      if (wireRef.current) wireRef.current.classList.add('wire-glow');
			if (textRef.current) textRef.current.classList.add('text-glow');
			setAnimationBegun(true);
    }, 2000);

    return () => {
      clearTimeout(animationTimer);
			timeline1.kill();
			timeline2.kill();
			timeline3.kill();
			timeline4.kill();
      duckEyeBlink.kill();
      duckTyping.kill();
			cloud1Motion.kill();
			cloud2Motion.kill();
		};
  }, []);

	return (
		<div className='banner-container'>
			<div className='banner-content'>
				<div className={`overlay ${animationBegun? 'fade-out' : 'dark'}`} />
				<BannerSVG wireRef={wireRef} lightRef={lightRef} textRef={textRef} animationBegun={animationBegun} startFlicker={startFlicker} />
			</div>
		</div>
	);
}
