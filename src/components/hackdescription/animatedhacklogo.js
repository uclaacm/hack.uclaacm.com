/* eslint-disable no-await-in-loop */
import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const hackPurple = '#C960FF';
const hackBlack = '#352A3A';
const hackRed = '#ED3266';
const white = '#FFFFFF';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const myConfig = config.default;
function AnimatedHackLogo() {
	const changeColor = useSpring({
		config: myConfig,
		from: { fill: hackBlack },
		to: async next => {
			while (true) {
				await next({ fill: hackPurple });
				await sleep(1000);
				await next({ fill: hackRed });
				await sleep(1000);
				await next({ fill: hackBlack });
				await sleep(1000);
			}
		}
	});

	const rotation = useSpring({
		config: myConfig,
		from: { transform: 'rotate(0, 124, 124)' },
		to: async next => {
			while (true) {
				await next({ transform: 'rotate(90, 124, 124)' });
				await sleep(1000);
				await next({ transform: 'rotate(180, 124, 124)' });
				await sleep(1000);
				await next({ transform: 'rotate(270, 124, 124)' });
				await sleep(1000);
				await next({ transform: 'rotate(360, 124, 124)' });
				await sleep(1000);
			}
		}
	});

	/* eslint-disable max-len */
	return (
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			viewBox="0 0 248 248" style={{ width: '120px' }}>
			<animated.path
				fill={changeColor.fill}
				transform={rotation.transform}
				d="M242.5,110.8L137.2,5.5c-7.3-7.3-19.2-7.3-26.5,0L5.5,110.8c-7.3,7.3-7.3,19.2,0,26.5l105.3,105.3
				c7.3,7.3,19.2,7.3,26.5,0l105.3-105.3C249.8,129.9,249.8,118.1,242.5,110.8z"
			/>
			<animated.path
				fill={white}
				d="M124,61.6c-25,0-45.3,20.3-45.3,45.3c0,15.2,6,24.1,11.4,32.2c4.5,6.7,8.6,12.9,8.6,21.6
				c0,12.4,11.3,19.4,25.3,19.4s25.3-5.8,25.3-19.4c0-7,3.6-12.4,7.8-18.5c5.6-8.3,12.2-18,12.2-35.3C169.3,81.8,149,61.6,124,61.6z"
			/>
			<animated.path
				fill={changeColor.fill}
				d="M134.9,135.3v26c0,4.8-4,6.3-10.9,6.3s-10.9-1.9-10.9-6.3v-26c-5.7-3.6-9.5-10-9.5-17.3
				c0-6.3,2.8-11.9,7.3-15.7c1.2-1,1.6,2.2,2,5.9c0.5,3.8,1,8.3,2.5,9.7c3.2,2.8,14.1,3,17.2,0c1.4-1.3,1.7-5.3,2-9
				c0.3-4.4,0.7-8.3,2.6-6.6c4.5,3.7,7.3,9.4,7.3,15.7C144.5,125.3,140.7,131.7,134.9,135.3z"
			/>
			<animated.path
				fill={white}
				d="M135.9,182.5c-2.5,0.7-6.3,1.8-11.9,1.8c-5.6,0-9.4-1.2-12-1.9c-3.3-1-4.4-1.3-4.4,2.3
				c0,7.2,7.3,10.4,16.3,10.4s16.3-3.2,16.3-10.4C140.3,181.2,139.2,181.5,135.9,182.5z"
			/>
		</svg>
	);
}

export default AnimatedHackLogo;
