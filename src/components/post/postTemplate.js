import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import HeadFooter from '../headfooter/headfooter';
import MDContainer from '../mdcontainer/mdcontainer';

const styles = () => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	post: {
		maxWidth: '800px'
	}
});

class PostTemplate extends React.Component {
	render() {
		// data.markdownRemark holds our post data
		const { markdownRemark } = this.props.data;
		const { frontmatter, html } = markdownRemark;
		const { classes } = this.props;
		return (
			<HeadFooter>
				<div className={classes.container}>
					<div className={classes.post}>
						<h1>{frontmatter.title}</h1>
						<h2>{frontmatter.date}</h2>
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
