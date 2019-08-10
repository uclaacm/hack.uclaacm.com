import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import BlogListItem from './bloglistitem';
import { Container, List, ListItem } from '@material-ui/core';


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
		const { data, classes } = this.props;
		return (
			<Container maxWidth="md">
				<h1 className={classes.title}>Our Latest Posts</h1>
				<List>
					<BlogListItem data={data}/>
				</List>
				<ListItem className={classes.more}>More Posts</ListItem>
			</Container>

		);
	}
}

BlogList.propTypes = {
	data: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogList);

export const pageQuery = graphql`
query BlogListInfo {
	allMarkdownRemark {
	  nodes {
		excerpt(pruneLength: 100)
		timeToRead
		frontmatter {
		  date
		  subtitle
		  title
		}
	  }
	}
  }  
`;


