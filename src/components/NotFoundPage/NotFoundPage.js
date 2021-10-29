import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(6)
	},
	content: {
		fontFamily: theme.typography.body1.fontFamily,
		fontSize: theme.typography.fontSize * 1.5,
		lineHeight: 1.76,
		textAlign: 'center',
		marginTop: theme.spacing(7),
		marginBottom: theme.spacing(4),
		marginLeft: theme.spacing(2.75),
		marginRight: theme.spacing(2.75),
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize,
			lineHeight: 1.57,
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(3)
		}
	},
	pageContainer: {
		minHeight: '80vh'
	},
	hiddenImage: {
		textAlign: 'center',
		marginTop: theme.spacing(4),
		placeItems: 'center'
	},
	hackheart: {
		width: '95%'
	}
});

function NotFoundPage({ classes }) {
	const data = useStaticQuery(graphql`
	query {
	  bowimg: file(relativePath: {eq: "404/bowimg-removebg.png"}) {
	    childImageSharp {
	      fixed(height: 400) {
	          base64
	          width
	          height
	          src
	          srcSet
	      }
	    }
		}
		pixelheart: file(relativePath: {eq: "404/pixelheart.png"}) {
	    childImageSharp {
	      fixed(height: 22) {
	          base64
	          width
	          height
	          src
	          srcSet
	      }
	    }
		}
		hackheart: file(relativePath: {eq: "404/hackheart.png"}) {
	    childImageSharp {
	      fluid {
	        base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }`);
	const [imageOpen, setImageOpen] = useState(false);
	return (
		<Container maxWidth="md" className={classes.pageContainer}>

			<div className={classes.container}>
				<Typography variant='h3' >NOT FOUND</Typography>

				<Typography className={classes.content}>
					Oops! This page has either been taken down or does not exist
				</Typography>

				<Img fixed={data.bowimg.childImageSharp.fixed} alt='bowimg' />
			</div>
			<div className={classes.container}>
				<Typography display='inline' variant='h5'>
					With love
					<Button size="large"
						onClick={() => setImageOpen(!imageOpen)}>
						<Img fixed={data.pixelheart.childImageSharp.fixed}
							alt='heart' />
					</Button>
					from Hack
				</Typography>
			</div>
			<div
				className={classes.hiddenImage}
				style={{
					display: imageOpen ? 'grid' : 'none'
				}}
				id='hackheart'
			>
				<Img className={classes.hackheart}
					fluid={data.hackheart.childImageSharp.fluid}
					alt='hackheart' />
			</div>
			<div className={classes.container}>
				<Link
					href='https://hack.uclaacm.com/'
					color='textSecondary'
					underline='none'
				>
					<Typography component='span'>Go back to Home</Typography>
				</Link>
				<Link
					href='https://github.com/uclaacm/hackschool-f19/tree/master/session-3-backend-api#http-responses'
					color='textSecondary'
					underline='none'
				>
					<Typography component='span'>Why am I seeing this message?</Typography>
				</Link>
			</div>
		</Container>
	);
}

NotFoundPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFoundPage);
