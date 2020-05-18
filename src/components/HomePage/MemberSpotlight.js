import React from 'react';
// import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import placeholder from '../../images/placeholder.jpg';

const spotlightTheme = makeStyles(theme => ({
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column'
		}
	},
	imageWrapper: {
		margin: theme.spacing(3, 0),
		maxWidth: '300px',
		maxHeight: '300px',
		overflowY: 'hidden',
		borderRadius: '50%'
	},
	image: {
		width: '100%'
	},
	blurb: {
		maxWidth: '460px',
		width: '60%',
		[theme.breakpoints.down('xs')]: {
			width: '100%'
		}
		// border: '1px solid red'
	},
	name: {
		margin: theme.spacing(1, 0)
	},
	button: {
		margin: theme.spacing(2, 0)
	}
}));

const placeholderText = `Lee Ji-eun (이지은), known professionally 
as IU (아이유), is a South Korean singer-songwriter and actress. 
She signed with Kakao M in 2007 as a 
trainee and debuted as a singer at the age of fifteen. 
Although her follow-up albums, Growing Up and IU...IM, 
brought mainstream success, it was after the release of "Good Day" 
(Korean: 좋은 날), the lead single from her 2010 album Real, that she 
achieved national stardom.
`;

function MemberSpotlight() {
	const classes = spotlightTheme();
	return <div className={classes.wrapper}>
		<div className={classes.imageWrapper}>
			<img src={placeholder} className={classes.image}/>
		</div>
		<div className={classes.blurb}>
			<Typography variant='h5'className={classes.name}>
                IU (Lee Jieun), Class of 2022
			</Typography>
			<Typography align='justify'>&quot;{placeholderText}&quot;</Typography>
			<Button variant='outlined' classes={{ root: classes.button }}>Portfolio</Button>
		</div>
	</div>;
}

export default MemberSpotlight;
