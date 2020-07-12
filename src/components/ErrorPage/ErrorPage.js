import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';
import pixelheart from './pixelheart.png';
import hackheart from './hackheart.png';

const styles = theme => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		marginTop: theme.spacing(3)
	},
	content: {
		fontFamily: theme.typography.body1.fontFamily,
		fontSize: theme.typography.fontSize * 1.3,
		lineHeight: 1.76,
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
		minHeight: '100vh'
	},
	hiddenImage: {
		textAlign: 'center',
		marginTop: theme.spacing(4)
	}
});


function ErrorPage({ classes }) {
	const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "404/bowimg-removebg.png"}) {
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
      }
		`);
	const [imageOpen, setImageOpen] = useState(false);
	return (
		<div className={classes.pageContainer}>
			<div className={classes.container}>
				<div><Typography variant='h3' >NOT FOUND</Typography></div>
				<p>
					<Typography variant='h5' >
						Oops! This page has either been taken down or does not exist
					</Typography>
				</p>
				<div><Img fixed={data.file.childImageSharp.fixed} /></div>
			</div>
			<div className={classes.container}>
				<Typography display='inline' variant='h4'>
					With love
					<img src={pixelheart}
						onClick={() => {
							setImageOpen(!imageOpen);
						}}
						alt='404 Meme'
						height="30"
					/>
					from Hack
				</Typography>
			</div>
			<div
				className={classes.hiddenImage}
				style={{
					display: imageOpen ? 'block' : 'none'
				}}
				id='hackheart'
			>
				<img src={hackheart} height='350' />
			</div>
			<div className={classes.container}>
				<Link
					href='https://hack.uclaacm.com/'
					color='textSecondary'
					underline='none'
				>
					<Typography>Go back to Home</Typography>
				</Link>
				<Link
					href='https://github.com/uclaacm/hackschool-f19/tree/master/session-3-backend-api#http-responses'
					color='textSecondary'
					underline='none'
				>
					<Typography>Why am I seeing this message?</Typography>
				</Link>

			</div>
		</div >
	);
}

ErrorPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ErrorPage);
