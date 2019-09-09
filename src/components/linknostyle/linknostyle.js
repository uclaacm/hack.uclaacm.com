import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';

const styles = () => ({
	link: {
		textDecoration: 'inherit',
		color: 'inherit'
	}
});


function LinkNoStyle({ classes, className, ...props }) {
	return <Link className={classNames(classes.link, className)} {...props} />;
}

LinkNoStyle.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string
};

export default withStyles(styles)(LinkNoStyle);
