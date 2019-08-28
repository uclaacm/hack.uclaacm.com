import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';

const styles = () => ({
	link: {
		textDecoration: 'none'
	}
});

function LinkNoStyle({ classes, ...props }) {
	return <Link className={classNames(classes.link)} {...props} />;
}

LinkNoStyle.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LinkNoStyle);
