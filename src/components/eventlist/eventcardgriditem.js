import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import EventCard from '../eventcard/eventcard';

function EventCardGridItem({
	event,
	concealed,
	...props
}) {
	// for mobile user, hover event is not supported.
	// so we use focus instead, when user click on
	// the element, it disables greyout.
	const [isFocus, setIsFocus] = useState(false);
	const [isHover, setIsHover] = useState(false);
	return (
		<Grid
			item
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onFocus={() => setIsFocus(true)}
			onBlur={() =>	setIsFocus(false)}
			{...props}
		>
			<EventCard {...event} disabled={concealed ? !isFocus && !isHover : false} />
		</Grid>
	);
}

EventCardGridItem.propTypes = {
	event: PropTypes.object.isRequired,
	concealed: PropTypes.bool.isRequired
};

EventCardGridItem.defaultProps = {
	concealed: false
};

export default EventCardGridItem;
