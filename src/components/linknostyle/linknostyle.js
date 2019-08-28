import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
	link: {
		textDecoration: 'none'
	}
});

function LinkNoStyle({ classes, ...props }) {
	return <Link className={classes.link} {...props} />;
}

LinkNoStyle.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LinkNoStyle);
