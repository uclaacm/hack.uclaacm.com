import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
	listItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	heading: {
		fontFamily: ['Poppins', 'sans-serif']
		// padding: theme.spacing(0.5, 0)
	},
	title: {
		fontSize: theme.typography.fontSize * 1.2,
		fontWeight: 500,
		lineHeight: 0.8
	},
	description: {
		fontFamily: theme.typography.fontFamily,
		fontSize: theme.typography.fontSize * 0.9,
		color: '#0000008A'
	}
});

class BlogListItem extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<ListItem className={classes.listItem} divider>
				<div className={classes.heading}>
					<div className={classes.title}>Title Here</div>
					<div>Subtitle Here</div>
				</div>
				<div className={classes.description}>
					<div>Excerpt Here</div>
					<div> Date Here | Time to Read Here</div>
				</div>
			</ListItem>
		);
	}
}

BlogListItem.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogListItem);
