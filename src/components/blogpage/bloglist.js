import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import BlogListItem from './bloglistitem';
import { Button, Container, List } from '@material-ui/core';


const styles = () => ({
	container: {
		display: 'flex',
		flexDirection: 'column'
	},
	title: {
		fontFamily: ['Poppins', 'sans-serif'],
		textAlign: 'center'
	},
	buttonRoot: {
		margin: 'auto'
	},
	link: {
		textDecoration: 'none'
	}
});

class BlogList extends React.Component {
	render() {
		const { data, classes } = this.props;
		const blogListItem = data.allMarkdownRemark.nodes.map(blog => <BlogListItem key={blog.id} nodes={blog} />);
		blogListItem.splice(3);
		return (
			<Container maxWidth="md" className={classes.container}>
				<h1 className={classes.title}>Our Latest Posts</h1>
				<List>
					{blogListItem}
				</List>
				<Button variant="outlined" color="primary" href='../blog' classes={{ root: classes.buttonRoot }}>
					More Posts
				</Button>
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
		  date(formatString: "MMMM DD, YYYY")
		  subtitle
		  title
		}
		id
	  }
	}
  }  
`;


