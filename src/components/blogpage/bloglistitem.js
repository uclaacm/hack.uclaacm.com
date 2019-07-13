import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = () => ({
	listItem: {
		maxWidth: '400px',
		backgroundColor: '#FFB6C1',
		display: 'flex',
		flexDirection: 'column'
	}
});

class BlogListItem extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<List>
				<ListItem className={classes.listItem}>
					<h1>Title Here</h1>
					<div>Subtitle Here</div>
					<div>Excerpt Here</div>
					<div>Time to Read Here</div>
					<div>Date Here</div>
				</ListItem>
			</List>
		);
	}
}

BlogListItem.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogListItem);
