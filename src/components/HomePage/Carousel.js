import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const IMAGE_WIDTH = 360;
const SECTION_ITEMS = 4;

const styles = theme = ({
	carousel: {
		height: '480px',
		minWidth: '100%',
		overflow: 'hidden',
		position: 'relative'
	},
	innerCarousel: {
		width: '1600px'
	},
	carouselSection: {
		position: 'absolute',
		width: '1600px',
		top: '0',
		div: {
			width: '360px',
			height: '240px',
			opacity: '0.7',
			backgroundSize: 'cover',
			display: 'inline-block',
			verticalAlign: 'top',
			margin: '0',
			padding: '0',
			transition: '0.35s cubic-bezier(0.05, 1.04, 0.72, 0.98)'
		}

	}
})

function Carousel(props, { classes }) {
	const numItems = props.images.length
	const sections = []
	const sectionWidth = (IMAGE_WIDTH * SECTION_ITEMS / 2);

	for (let i = 0; i < numItems; i += SECTION_ITEMS) {
		sections.push({
			left: (i / SECTION_ITEMS) * sectionWidth,
			width: sectionWidth,
			items: props.images.slice(i, i + 4).map((item, i) =>
				<a href={item} target="_BLANK" key={i}><div style={{ backgroundImage: 'url(' + item + ')' }} /></a>),
			// Makes the image open up the image link when clicked on
		});
	}

	timer = null;

	timer = setInterval(() => {
		setState({
			sections: state.sections.map(section => {
				section.left -= 1;
				if (section.left < -sectionWidth) {
					section.left = (state.sections.length - 1) * sectionWidth - 1
				}
				return section;
			})
		});
	}, 90);

	return (
		<div classes={{ root: classes.carousel }}>
			<div classes={{ root: classes.innerCarousel }}>
				{state.sections.map((section, i) =>
					<div classes={{ root: classes.carouselSection }} style={{ left: section.left + 'px', width: section.width + 'px' }} key={i}>
						{section.items}
					</div>
				)}
			</div>
		</div>
	)
}

export default withStyles(styles)(Carousel);

export default {
	images: [
		'/images/carousal/01.jpg',
		'/images/carousal/02.jpg',
		'/images/carousal/03.jpg',
		'/images/carousal/04.jpg',
		'/images/carousal/05.jpg',
		'/images/carousal/06.jpg',
		'/images/carousal/07.jpg',
		'/images/carousal/08.jpg',
		'/images/carousal/09.jpg',
		'/images/carousal/10.jpg',
		'/images/carousal/11.jpg',
		'/images/carousal/12.jpg',
		'/images/carousal/13.jpg',
		'/images/carousal/14.jpg',
		'/images/carousal/15.jpg',
		'/images/carousal/16.jpg'
	]
}


