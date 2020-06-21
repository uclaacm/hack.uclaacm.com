import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Button, Link, Typography } from '@material-ui/core';

const spotlightTheme = makeStyles(theme => ({
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column'
		}
	},
	blurb: {
		maxWidth: '65%',
		margin: theme.spacing(2, 3),
		[theme.breakpoints.down('xs')]: {
			maxWidth: '100%',
			margin: 0
		}
		// border: '1px solid red'
	},
	name: {
		margin: theme.spacing(1, 0)
	},
	button: {
		margin: theme.spacing(2, 0, 0, 0)
	}
}));

function MemberSpotlight() {
	const data = useStaticQuery(graphql`
	{
		spotlights: allSpotlight {
			nodes {
				id
				name
				link
				button
				aboutHTML
				class
				imgFile {
					childImageSharp {
						fixed {
							base64
							height
							width
							src
							srcSet
						}
					}
				}
		  	}
		}
	  }
	`);

	const classes = spotlightTheme();
	const theme = useTheme();

	/* Only spotlight one member for now */
	const spotlight = data.spotlights.nodes[0];

	return <div className={classes.wrapper}>
		<Img
			fixed={spotlight.imgFile.childImageSharp.fixed}
			style={{
				height: '200px',
				width: '200px',
				minWidth: '200px',
				borderRadius: '50%',
				margin: theme.spacing(2, 0)
			}}
		/>
		<div className={classes.blurb}>
			<Typography variant='h5' className={classes.name}>
				{spotlight.name}, {spotlight.class}
			</Typography>
			<Typography dangerouslySetInnerHTML={{ __html: spotlight.aboutHTML }}/>
			<Link
				href={spotlight.link}
				underline='none'
			>
				<Button variant='outlined' classes={{ root: classes.button }}>{spotlight.button}</Button>
			</Link>
		</div>
	</div>;
}

export default MemberSpotlight;
