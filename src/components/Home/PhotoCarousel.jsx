import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Gallery.css';

import image1 from '../../images/carousel/image1.jpg';
import image2 from '../../images/carousel/image2.jpg';
import image3 from '../../images/carousel/image3.jpg';
import image4 from '../../images/carousel/image4.jpg';
import image5 from '../../images/carousel/image5.jpg';
import image6 from '../../images/carousel/image6.jpg';
import image7 from '../../images/carousel/image7.jpg';
import image8 from '../../images/carousel/image8.jpg';

export default function PhotoCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'slides',
	};

	const images = [
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
	];

	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<img
					src={image}
					alt={`Carousel ${index + 1}`}
					className='carousel-image'
					key={index}
				/>
			))}
		</Slider>
	);
}
