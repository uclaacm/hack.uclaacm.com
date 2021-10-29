import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function StayConnectedBtn(props) {
	return <Button
		color="secondary"
		variant="contained"
		href={props.link}
		target="_blank"
		rel="noopener noreferrer"
		{...props}
	>
		{props.text}
	</Button>;
}

StayConnectedBtn.propTypes = {
	link: PropTypes.object.isRequired,
	text: PropTypes.object.isRequired
};

export default StayConnectedBtn;
