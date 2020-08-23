import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { withStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
const styles = theme => ({
	carouselImage: {
		height: '500px',
		position: 'center',
		display: 'block',
		marginRight: 'auto',
		marginLeft: 'auto',
		[theme.breakpoints.down('xs')]: {
			height: '350px'
		}
	},
	carouselContainer: {
		position: 'center'
	}
});

function PhotoCarousel({ classes }) {
	const data = useStaticQuery(graphql`
		{
			profilePhotos: allFile(filter: {relativePath: {glob: "carousel/*" }}) {
				nodes {
					childImageSharp {
						fluid {
							base64
							aspectRatio
							src
							srcSet
							sizes
						}
					}
				}
			}
		}
	`);

	const images = [];

	for (const { childImageSharp } of data.profilePhotos.nodes) {
		images.push(childImageSharp.fluid);
	}

	return (
		<Carousel className={classes.carouselContainer}>
			{
				images.map((image, i) => <Img className={classes.carouselImage} key={i} fluid={image} alt='photo' />)
			}
		</Carousel>
	);
}

PhotoCarousel.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PhotoCarousel);


