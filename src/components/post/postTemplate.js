import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import HeadFooter from '../headfooter/headfooter';
import MDContainer from '../mdcontainer/mdcontainer';
import { Typography } from '@material-ui/core';

const styles = theme => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	post: {
		maxWidth: '800px',
		margin: theme.spacing.unit * 2
	},
	date: {
		marginTop: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 4
	}
});

class PostTemplate extends React.Component {
	render() {
		// data.markdownRemark holds our post data
		const { markdownRemark } = this.props.data;
		const { frontmatter, html } = markdownRemark;
		const { classes } = this.props;
		const date = new Date(frontmatter.date).toLocaleDateString('en-US', {
			year: 'numeric', month: 'long', day: 'numeric'
		});

		return (
			<HeadFooter>
				<div className={classes.container}>
					<div className={classes.post}>
						<Typography variant="h2">
							{frontmatter.title}
						</Typography>
						<Typography variant="h4">
							{frontmatter.subtitle}
						</Typography>
						<Typography variant="body1" className={classes.date}>
							{date}
						</Typography>
						<MDContainer html={html} />
					</div>
				</div>
			</HeadFooter>
		);
	}
}

PostTemplate.propTypes = {
	data: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostTemplate);

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date
		title
      }
    }
  }
`;
