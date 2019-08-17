import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import BlogListItem from './bloglistitem';
import HeadFooter from '../headfooter/headfooter';
import { Button, Container, List } from '@material-ui/core';


const styles = theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column'
	},
	title: {
		fontFamily: ['Poppins', 'sans-serif'],
		textAlign: 'center',
		margin: theme.spacing(2, 0, 0)
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
			<HeadFooter>
				<Container maxWidth="md" className={classes.container}>
					<h1 className={classes.title}>Our Latest Posts</h1>
					<List>
						{blogListItem}
					</List>
					<Button variant="outlined" color="primary" href='../blog' classes={{ root: classes.buttonRoot }}>
						More Posts
					</Button>
				</Container>
			</HeadFooter>


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
	allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
	  nodes {
		excerpt(pruneLength: 200)
		timeToRead
		frontmatter {
		  date(formatString: "MMMM D, YYYY")
		  subtitle
		  title
		}
		fields {
			slug
		}
		id
	  }
	}
  }  
`;


