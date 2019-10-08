import { basename } from 'path';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HeaderBar from './head.svg';
import Profile from './profile';

const teamIntro = `
	We are a group of hackers, designers, and engineers all working to improve UCLA's
	hacking community. We believe in moving fast, having fun, and being passionate
	about using technology to solve problems that are relevant to us. We have a high
	bar for success, and are willing to work incredibly hard, balancing school and
	many other things, to improve the experience of other students around us. We're
	hiring in the spring, so keep a look out for an upcoming application form.
`;

/* eslint-disable max-len */
// The id field must be sync'd with the name of the file.
const officers = [
	{
		role: 'President',
		name: 'Lea Blum',
		id: 'lea',
		description: `Hi there, I’m Lea and I’m one of the Hack Co-Presidents (along with Connie). Come hang out with me and the rest of hack at our events to hear my (sometimes) funny jokes and (always) hilarious puns.`
	},
	{
		role: 'President',
		name: 'Connie Chen',
		id: 'connie',
		description: `Hello! I'm Connie, a third year computer science major. I love the california weather, facebook messenger stickers, hugs, and music. Getting added to the Dogspotting fb group also changed my life (shout-out to my co Lea). I'm super excited to meet you all; come to our events and feel free to chat with us!`
	},
	{
		role: 'Officer',
		name: 'Shirly Fang',
		id: 'shirly',
		description: `Hi! I'm a 3rd year CS major! I enjoy mobile development and I occassionally dabble in Neopets. I also enjoy bunnies and yellowtail.`
	},
	{
		role: 'Officer',
		name: 'Timothy Gu',
		id: 'timothyG',
		description: `Hey there, I'm heading into my third year as a Computer Science student at UCLA, and second year as an officer for the Hack committee of ACM. In the past, I've helped organize some of the most popular ACM events, such as Hackschool (building your first web app) and Hack on the Hill (beginner-friendly hackathon). I will be a co-director for Hackschool this coming quarter. Hope to see you there!`
	},
	{
		role: 'Officer',
		name: 'Raji Jadhav',
		id: 'raji',
		description: `Hey! I'm Raji, a 2nd year Hack officer, originally from India! Love to dance, love to sing, love to code. I believe in community learning, a multiverse, and fairies :) Current obsessions include ML, Thai food, and calligraphy. Tend to never stop talking.`
	},
	{
		role: 'Officer',
		name: 'Kristie Lim',
		id: 'kristie',
		description: `I'm a third year CS major from San Jose, CA. In my free time, I like to run and crochet. Fun fact: I made a Pusheen-themed website to teach high school students about HTML/CSS.`
	},
	{
		role: 'Officer',
		name: 'Jeanette Lin',
		id: 'jeanette',
		description: `Hi, I'm Jeanette, and I'm a fourth year Statistic major. Besides my interest in Data Science, I also like to spend my free time going on hikes, eating with friends,  and binge watching The Office.`
	},
	{
		role: 'Officer',
		name: 'Jody Lin',
		id: 'jody',
		description: `Hi I'm Jody and I'm a second year Computer Science major! I first got into CS in middle school when I wanted to be a hacker at the NSA, but now I'm mostly interested in web and mobile development. When I'm not busy, you can almost always find me on Youtube or watching a TV show.`
	},
	{
		role: 'Officer',
		name: 'Sahen Rai',
		id: 'sahen',
		description: `I'm a board member for ACM Hack. I attend meetings and plan cool events for Hack. In my free time, I like to make lame clarinet covers of pop songs.`
	},
	{
		role: 'Officer',
		name: 'Tim Rediehs',
		id: 'timothyR',
		description: `I'm a board member of Hack and co-director of Hackschool 2019 with Timothy Gu.  Gaining and spreading knowlege is very important to me.  In my free time, I love playing Magic: The Gathering even though I'm bad at it.`
	},
	{
		role: 'Officer',
		name: 'Furn Techalertumpai',
		id: 'furn',
		description: `I’m a fourth-year CS major from Bangkok, Thailand. I recently interned at Facebook in their Service Infra team. In my free time, I like to gym, do yoga, travel, and eat a lot of food!`
	},
	{
		role: 'Officer',
		name: 'Galen Wong',
		id: 'galen',
		description: `I teach Web Dev a lot, feel free to ask me questions on JavaScript and React. I randomly organized a hot pot party at Kevin's place and they seem pretty satisfied.`
	}
];
/* eslint-enable max-len */

const styles = theme => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		marginTop: '5%'
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
	team: {
		fontFamily: ['Poppins'],
		fontWeight: 700,
		fontSize: theme.typography.fontSize * 3,
		borderStyle: 'solid',
		borderWidth: `0 0 ${theme.typography.fontSize * 1.5}px 0`,
		borderColor: '#FB4469',
		marginBottom: theme.spacing(5),
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize * 1.2,
			borderWidth: `0 0 ${theme.typography.fontSize * 0.6}px 0`
		}
	}
});

function PhotoPage({ classes }) {
	const data = useStaticQuery(graphql`
		{
			profilePhotos: allFile(filter: {relativePath: {glob: "team/*" }}) {
				nodes {
					relativePath
					childImageSharp {
						fixed(width: 200, height: 200, quality: 75) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
	`);

	const idToImageMap = new Map();
	for (const { relativePath, childImageSharp } of data.profilePhotos.nodes) {
		const id = basename(relativePath).split('.')[0];
		idToImageMap.set(id, childImageSharp.fixed);
		if (!officers.some(o => o.id === id)) {
			throw new Error('Unknown officer picture in src/images: ' + relativePath);
		}
	}

	const profiles = officers.map(o =>
		<Grid key={o.id} item xs={12} sm={6} md={4}>
			<Profile {...o} imageFixed={idToImageMap.get(o.id)} />
		</Grid>);

	return (
		<div className={classes.container}>
			<img src={HeaderBar} style={{ width: '100%' }}/>
			<Container maxWidth="md" classes={{ root: classes.content }}>
				{teamIntro}
			</Container>
			<div className={classes.team}>The Team</div>
			<Container maxWidth="md">
				<Grid container>
					{profiles}
				</Grid>
			</Container>
		</div>
	);
}

PhotoPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PhotoPage);
