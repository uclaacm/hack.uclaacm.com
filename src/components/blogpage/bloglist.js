import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import BlogListItem from './bloglistitem';
import Container from '@material-ui/core/container';
import List from '@material-ui/core/list';
import ListItem from '@material-ui/core/listitem';


const styles = () => ({
	title: {
		fontFamily: ['Poppins', 'sans-serif'],
		textAlign: 'center'
	},
	more: {
		fontFamily: ['Poppins', 'sans-serif'],
		color: '#0000008A'
	}
});

class BlogList extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Container maxWidth="md">
				<h1 className={classes.title}>Our Latest Posts</h1>
				<List>
					<BlogListItem />
					<BlogListItem />
					<BlogListItem />
				</List>
				<ListItem className={classes.more}>More Posts</ListItem>
			</Container>

		);
	}
}

BlogList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogList);
