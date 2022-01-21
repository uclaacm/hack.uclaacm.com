import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

/*
 * A version of gatsby-image's React component that works with SVGs. Only the
 * URL needs to be provided, and there is no need to go though the GraphQL
 * steps to generate such an image.
 *
 * Most of the time, if the SVG is small, then it should just be inlined using
 * SVGR:
 *
 *     import { ReactComponent as MySVGElement } from './image.svg';
 *
 * This component is useful for larger SVG images that should be loaded lazily.
 */

// width and height should be gotten from the <svg> element in the SVG files.
export default function SVGImg({ width, height, src, ...props }) {
	return (
		<GatsbyImage
			image={{
				aspectRatio: width / height,
				src,
				srcSet: src,
				sizes: ''
			}}
			{...props} />
	);
}

SVGImg.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired
};
