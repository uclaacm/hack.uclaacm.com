import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../SEO';

import { Container, Link, Typography, withStyles } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import TalkBubbleIcon from '@material-ui/icons/ModeCommentTwoTone';

import BlogPageList from './BlogPageList';
import HeadFooter from '../HeadFooter/HeadFooter';
import LinkNoStyle from '../LinkNoStyle/LinkNoStyle';
import PageTitle from '../PageTitle/PageTitle';

const styles = theme => ({
	container: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4)
	},
	header: {
		// align icon with text
		display: 'flex',
		alignItems: 'center'
	},
	headerIcon: {
		fontSize: 'inherit',
		marginRight: theme.spacing(1)
	},
	navigation: {
		display: 'flex',
		padding: theme.spacing(1, 0)
	},
	leftLink: {
		marginRight: 'auto',
		marginLeft: 0
	},
	rightLink: {
		marginLeft: 'auto',
		marginRight: 0
	},
	link: {
		// align icon with text
		display: 'flex',
		alignItems: 'center',
		fontSize: theme.typography.h5.fontSize
	},
	linkIcon: {
		fontSize: 'inherit'
	}
});

class BlogPage extends React.Component {
	render() {
		const { data, classes, pageContext } = this.props;
		const { prevPageURL, nextPageURL, currPageNum, totalPageNum } = pageContext;

		const prevPageLink = prevPageURL === null ?
			null :
			<LinkNoStyle to={prevPageURL} className={classes.leftLink}>
				{/* This link serves for style only */}
				<Link color="textSecondary" component="span" classes={{ root: classes.link }}>
					<NavigateBeforeIcon classes={{ root: classes.linkIcon }} />
					Prev
				</Link>
			</LinkNoStyle>;

		const nextPageLink = nextPageURL === null ?
			null :
			<LinkNoStyle to={nextPageURL} className={classes.rightLink}>
				{/* This link serves for style only */}
				<Link color="textSecondary" component="span" classes={{ root: classes.link }}>
					Next
					<NavigateNextIcon classes={{ root: classes.linkIcon }} />
				</Link>
			</LinkNoStyle>;

		return (
			<HeadFooter>
				<SEO title="Blog" />
				<Container maxWidth="md" classes={{ root: classes.container }}>
					<PageTitle className={classes.header}>
						<TalkBubbleIcon color="primary" classes={{ root: classes.headerIcon }}/>
						Blog posts
					</PageTitle>
					<BlogPageList data={data}/>

					<Typography
						variant="subtitle1"
						color="textSecondary"
						align="center"
						component="span"
						display="block"
					>
						Page {currPageNum} of {totalPageNum}
					</Typography>
					<nav className={classes.navigation}>
						{prevPageLink}
						{nextPageLink}
					</nav>
				</Container>
			</HeadFooter>

		);
	}
}

export const pageQuery = graphql`
query BlogPageListInfo($lim: Int!, $toskip: Int!) {
	allMarkdownRemark(limit: $lim, skip: $toskip, sort: {fields: frontmatter___date, order: DESC}) {
		nodes {
		  excerpt(pruneLength: 100)
		  timeToRead
		  frontmatter {
				date(formatString: "MMMM D, YYYY")
				subtitle
				title
				author
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
	classes: PropTypes.object.isRequired,
	pageContext: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogPage);
