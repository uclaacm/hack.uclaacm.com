import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './gallery.css';

const styles = theme => ({
	carouselImage: {
		height: '400px',
		position: 'center',
		display: 'block',
		marginRight: 'auto',
		marginLeft: 'auto',
		borderRadius: theme.shape.borderRadius * 2,
		[theme.breakpoints.down('xs')]: {
			height: '300px'
		}
	},
	carouselContainer: {
		position: 'center'
	}
});

function PhotoCarousel({ classes }) {
	const data = useStaticQuery(graphql`{
  carouselPhotos: allFile(filter: {relativePath: {glob: "carousel/*"}}) {
    nodes {
      id
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
}
`);

	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: 'slides'
	};

	const images = data.carouselPhotos.nodes.map(node => {
		return (
			<GatsbyImage
				image={{ ...node.childImageSharp.gatsbyImageData }}
				className={classes.carouselImage}
				key={node.id} />
		);
	});

	return (
		<Slider {...settings}>
			{images}
		</Slider>
	);
}

PhotoCarousel.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PhotoCarousel);


