import React, { useRef, useState, useEffect } from 'react';
import '../../styles/Home.css';
import BannerSVG from './BannerSVG';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin);

export default function Banner() {
  const wireRef = useRef(null);
  const lightRef = useRef(null);
	const textRef = useRef(null);
	const [animationBegun, setAnimationBegun] = useState(false);
	const [startFlicker, setStartFlicker] = useState(false);
	const [isSnapping, setIsSnapping] = useState(false);
	const [isLightDelayActive, setIsLightDelayActive] = useState(false);
	const [scrollThreshold] = useState(0.6); // % of viewport height needed to scroll past banner
	const [lightScrollThreshold] = useState(0.05); // % of viewport height needed to turn on lights
	const lastScrollY = useRef(0);
	const hasTriggeredLights = useRef(false);

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

    return () => {
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

  useEffect(() => {
    let accumulatedDownScroll = 0;
    
    const handleWheel = (e) => {
      if (isSnapping || isLightDelayActive) {
        e.preventDefault();
        return;
      }

      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const bannerHeight = viewportHeight;
      const downThresholdDistance = viewportHeight * scrollThreshold;
      const lightThresholdDistance = viewportHeight * lightScrollThreshold;

      // Check if we should turn on the lights (only trigger once)
      if (!hasTriggeredLights.current && accumulatedDownScroll >= lightThresholdDistance) {
        hasTriggeredLights.current = true;
        if (lightRef.current) lightRef.current.classList.add('light-glow');
        if (wireRef.current) wireRef.current.classList.add('wire-glow');
        if (textRef.current) textRef.current.classList.add('text-glow');
        setAnimationBegun(true);
        
        // Start the light delay period (Before you can scroll past banner)
        setIsLightDelayActive(true);
        setTimeout(() => {
          setIsLightDelayActive(false);
        }, 1000);
      }

      // Handle scrolling within banner
      if (currentScrollY < bannerHeight) {
        if (e.deltaY > 0) {
          e.preventDefault();
          
          accumulatedDownScroll += Math.abs(e.deltaY);
          
          // Check if we've accumulated enough scroll to meet threshold
          if (accumulatedDownScroll >= downThresholdDistance) {
            setIsSnapping(true);
            gsap.to(window, {
              scrollTo: bannerHeight,
              duration: 0.6,
              ease: 'power2.out',
              onComplete: () => {
                setIsSnapping(false);
                accumulatedDownScroll = 0;
              }
            });
          }
        }
      }
      else {
        // Reset accumulated scroll when we're far from banner
        accumulatedDownScroll = 0;
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSnapping, isLightDelayActive, scrollThreshold, lightScrollThreshold]);

	return (
		<div className='banner-container'>
			<div className='banner-content'>
				<div className={`overlay ${animationBegun? 'fade-out' : 'dark'}`} />
				<BannerSVG wireRef={wireRef} lightRef={lightRef} textRef={textRef} animationBegun={animationBegun} startFlicker={startFlicker} />
			</div>
		</div>
	);
}
