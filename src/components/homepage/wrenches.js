import React from 'react';
import PropTypes from 'prop-types';
import bigWrenches from './big_banner_wrenches.svg';

export default class Wrenches extends React.Component {
	render() {
		return (
			<div>
				<img className={this.props.classes.wrenches} src={bigWrenches}/>
			</div>
		);
	}
}

Wrenches.propTypes = {
	classes: PropTypes.object.isRequired
};
