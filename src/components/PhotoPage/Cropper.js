import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { GatsbyImage } from "gatsby-plugin-image";

// This cropper only crops landscape-oriented/square image.
const useStyles = makeStyles({
	cropper: {
		borderRadius: "50%",
		overflow: "hidden",
		display: "flex",
		justifyContent: "center",
	},
	gatsbyBorderRadius: {
		borderRadius: "50%",
	},
});

/**
 * Cropper takes an imageFixed object for use with gatsby-image, and crops it to
 * a circle. The diameter of the circle is controlled by the image. The
 * easterEggImageFixed is an imageFixed object that is displayed when the user
 * clicks on the image. As the name implies, it is an easter egg.
 */
function Cropper({ imageFixed, easterEggImageFixed }) {
	const classes = useStyles();
	const [showEasterEgg, setShowEasterEgg] = useState(false);
	return (
		<div
			className={classes.cropper}
			onClick={() => setShowEasterEgg((prev) => !prev)}
		>
			<div style={{ display: showEasterEgg ? "none" : null }}>
				<GatsbyImage
					image={imageFixed}
					placeholder="blurred"
					// imgStyle={{ borderRadius: classes.gatsbyBorderRadius }} //For iOS img borders
				/>
			</div>
			<div style={{ display: showEasterEgg ? null : "none" }}>
				<GatsbyImage
					image={easterEggImageFixed}
					placeholder="blurred"
					// imgStyle={{ borderRadius: classes.gatsbyBorderRadius }} //For iOS img borders
				/>
			</div>
		</div>
	);
}

Cropper.propTypes = {
	imageFixed: PropTypes.object.isRequired,
	easterEggImageFixed: PropTypes.object.isRequired,
};

export default Cropper;
