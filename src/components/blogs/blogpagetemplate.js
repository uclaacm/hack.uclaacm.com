import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Container, Link, Typography, withStyles } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import BlogPageList from './blogpagelist';
import HeadFooter from '../headfooter/headfooter';
import LinkNoStyle from '../linknostyle/linknostyle';

const styles = theme => ({
	navigation: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: theme.spacing(1)
	},
	link: {
		fontSize: theme.typography.fontSize * 1.5
	}
});

class BlogPage extends React.Component {
	render() {
		const { data, classes } = this.props;
		return (
			<HeadFooter>
				<Container maxWidth="md">
					<h1>Blogs will go here</h1>
					<BlogPageList data={data}/>
					<div className={classes.navigation}>
						<Link>
							<NavigateBeforeIcon/>
							<LinkNoStyle>
								<Typography className={classes.link}>Prev</Typography>
							</LinkNoStyle>
						</Link>
						<Link>
							<LinkNoStyle>
								<Typography className={classes.link}>Next</Typography>
								<NavigateNextIcon/>
							</LinkNoStyle>
						</Link>
					</div>

				</Container>


			</HeadFooter>

		);
	}
}

export const pageQuery = graphql`
query BlogPageListInfo($lim: Int!, $toskip: Int!) {
	allMarkdownRemark(limit: $lim, skip: $toskip) {
		nodes {
		  excerpt(pruneLength: 100)
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

BlogPage.propTypes = {
	data: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogPage);
