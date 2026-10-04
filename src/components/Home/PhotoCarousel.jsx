import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Gallery.css';

import { gallery } from '../../images/optimized/images';
import useNearViewport from '../../hooks/useNearViewport';

export default function PhotoCarousel() {
	const containerRef = useRef(null);
	const isNear = useNearViewport(containerRef);
	const [preparedImages, setPreparedImages] = useState(() => new Set([0, 1, gallery.length - 1]));

	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'slides',
		beforeChange: (_current, next) => {
			setPreparedImages(prepared => new Set([
				...prepared,
				(next - 1 + gallery.length) % gallery.length,
				(next + gallery.length) % gallery.length,
				(next + 1) % gallery.length,
			]));
		},
	};


	return (
		<div ref={containerRef}>
			<Slider {...settings}>
				{gallery.map((image, index) => (
					<div key={image.src}>
						{isNear && preparedImages.has(index) ? (
							<img
								{...image}
								sizes='100vw'
								alt={`Carousel ${index + 1}`}
								className='carousel-image'
								decoding='async'
							/>
						) : (
							<div className='carousel-image' />
						)}
					</div>
				))}
			</Slider>
		</div>
	);
}
