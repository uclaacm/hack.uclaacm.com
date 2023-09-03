import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';

import LinkNoStyle from '../LinkNoStyle/LinkNoStyle';
import { graphql, useStaticQuery } from 'gatsby';

const styles = theme => ({
	container: {
		backgroundColor: '#FFFFFF',
		padding: theme.spacing(3),
		justifyContent: 'center'
	},
	card: {
		width: '100%',
		borderRadius: '20px',
		borderColor: 'rgba(201, 96, 255, 0.3)',
		boxShadow: '0 1px 20px rgba(201, 96, 255, 0.6)',
		background: 'linear-gradient(90deg, #CA32FF, #FF5F96, #CA32FF, #FF5F96)',
		position: 'relative',
		animation: `$swipe 3s linear infinite`
	},
	'@keyframes swipe': {
		'0%': {
			backgroundSize: '300%',
			backgroundPosition: '100% 0'
		},
		'100%': {
			backgroundSize: '300%',
			backgroundPosition: '0 0'
		}
	},
	content: {
		textAlign: 'center',
		color: 'white',
		paddingTop: theme.spacing(2.5),
		'&:last-child': {
			paddingBottom: theme.spacing(2.5)
		}
	},
	forwardArrow: {
		fontSize: theme.typography.fontSize,
		marginLeft: theme.spacing(2),
		marginTop: theme.spacing(0.5),
		fontWeight: 700
	},
	grid: {
		direction: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	item: {
		[theme.breakpoints.down('xs')]: {
			width: '75%'
		}
	},
	text: {
		fontWeight: 700
	}
});


function Announcement({ classes }) {
	const data = useStaticQuery(graphql`
	query getInternBlogPost {
		allMarkdownRemark(
			filter: {fields: {slug: {regex: "/.*hey-future-interns.*/"}}}
		) {
		  nodes {
			fields {
			  slug
			}
			id
		  }
		}
	  }
	`);

	const url = data.allMarkdownRemark.nodes[0].fields.slug;

	return (
		<Grid container className={classes.container}>
			<Card className={classes.card} variant='outlined'>
				<CardActionArea>
					<LinkNoStyle to={url}>
						<CardContent className={classes.content}>
							<Grid container className={classes.grid}>
								<Grid item className={classes.item}>
									<Typography variant='body1' className={classes.text}>
										Want to learn more about our internship program? Check out this blog post!
									</Typography>
								</Grid>
								<Grid item justifyContent='center'>
									<ArrowForwardIcon className={classes.forwardArrow}/>
								</Grid>
							</Grid>
						</CardContent>
					</LinkNoStyle>
				</CardActionArea>
			</Card>
		</Grid>
	);
}

Announcement.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Announcement);
