import React from 'react';
import PropTypes from 'prop-types';
import './mdstyle.css';

function MDContainer({ html }) {
	return (
		<div
			className="md_container"
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}

MDContainer.propTypes = {
	html: PropTypes.string.isRequired
};

export default MDContainer;
