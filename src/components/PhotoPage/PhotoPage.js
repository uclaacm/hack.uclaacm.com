import { basename } from 'path';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as HeaderBar } from './head.svg';
import Profile from './Profile';

const teamIntro = `We are a group of hackers, designers, and engineers all working to improve UCLA's
hacking community. We believe in moving fast, having fun, and being passionate
about using technology to solve problems that are relevant to us. We have a high
bar for success, and are willing to work incredibly hard, balancing school and
many other things, to improve the experience of other students around us.`;

/* eslint-disable max-len */
// The id field must be sync'd with the name of the file.
const officers = [
	{
		role: 'President',
		name: 'Raji Jadhav',
		id: 'raji',
		description: `Hey! I'm Raji, a 2nd year from 
		India! Love to dance, love to sing, love to code. I believe in 
		community learning, a multiverse, and fairies :) Current obsessions 
		include ML, Thai food, and calligraphy. Tend to never stop talking.`
	},
	{
		role: 'Vice President',
		name: 'Jody Lin',
		id: 'jody',
		description: `Hi I'm Jody and I'm a 2nd year CS Major! 
		I love going to karaoke with friends, hanging out with my hack family, and playing guitar! 
		I also may or may not be addicted to kdramas.`
	},
	{
		role: 'Officer',
		name: 'Shirly Fang',
		id: 'shirly',
		description: `I am a yellowtail enthusiast and bunny mom who loves to develop iOS apps! 
		Hack is great!`
	},
	{
		role: 'Officer',
		name: 'Timothy Gu',
		id: 'timothyG',
		description: `I'm a third-year Computer Science major with a minor in Linguistics. 
		I like messing with JavaScript, reading Wikipedia, and teaching Vim to people!`
	},
	{
		role: 'Officer',
		name: 'Asha Kar',
		id: 'asha',
		description: `Hello! I'm a first year CS major with a deep love for coffee and dogs. 
		Besides coding, I enjoy knitting, reading, bullet journaling, and watching sitcoms.`
	},
	{
		role: 'Officer',
		name: 'Kristie Lim',
		id: 'kristie',
		description: `I'm a Computer Science major (class of 2021) from San Jose, California.
		Over winter quarter, I studied abroad in Singapore! In my free time, I've been crocheting 
		cacti, turtles, and AirPods cases.`
	},
	{
		role: 'Officer',
		name: 'Jamie Liu',
		id: 'jamie',
		description: `Hey, I'm a third year CS major from Princeton, New Jersey (yay east coast)! 
		In my spare time I love to cook, bake, and binge watch TV. I like listening to music and I 
		drink way too much boba (cough cough Miles).`
	},
	{
		role: 'Officer',
		name: 'Eugene Lo',
		id: 'eugene',
		description: `Hi there! My name is Eugene and I'm a 2nd year computer science major. 
		I'm currently focused on iOS development. In my free time, you can catch me singing 
		too loudly, binging Youtube videos, or making too many Spotify playlists.`
	},
	{
		role: 'Officer',
		name: 'Sahen Rai',
		id: 'sahen',
		description: `Hi I'm Sahen! I'm a second year student, and in addition to ACM I also participate in the Foundations dance Org :).
		In my free time, I also like to make lame clarinet covers of pop songs and watch old spongebob episodes.`
	},
	{
		role: 'Officer',
		name: 'Tim Rediehs',
		id: 'timothyR',
		description: `I'm a board member of Hack and co-director of Hackschool 
		2019 with Timothy Gu. Gaining and spreading knowledge is very important
		to me. In my free time, I love playing Magic: The Gathering even though I'm bad at it.`
	},
	{
		role: 'Officer',
		name: 'Galen Wong',
		id: 'galen',
		description: `I teach Web Dev a lot, feel free to ask me questions on 
		JavaScript and React. I randomly organized a hot pot party at Kevin's 
		place and they seem pretty satisfied.`
	},
	{
		role: 'Officer',
		name: 'Miles Wu',
		id: 'miles',
		description: `I'm a CS major passionate about hackathons and Powell library.
		Most of my experience deals with web/mobile dev. Catch me out here eating way too much food, drinking way too 
		much boba (@Jamie for enabling me), and vibing to chill music.`
	},
	{
		role: 'Officer',
		name: 'Alex Xia',
		id: 'alex',
		description: `Hi, I'm a first year CS major from Hong Kong. Aside from coding, 
		I like to watch anime and play games – occasionally, Jody baits me into watching kdrama. 
		When I am not doing these things, I am at the UCLA badminton club.`
	},
	{
		role: 'Advisor',
		name: 'Lea Blum',
		id: 'lea',
		description: `Hi there, I'm Lea. Come hang out with me and the rest of hack at our events (on zoom) to hear my 
		(sometimes) funny jokes and (always) hilarious puns. Currently living off of Disney movies in quarantine.`
	},
	{
		role: 'Advisor',
		name: 'Connie Chen',
		id: 'connie',
		description: `Hello! My name is Connie, and I'm a third year Computer Science major and Cognitive Science minor. 
		I like the California weather, Messenger stickers, and music. Currently living off of Disney movies in quarantine.`
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
			<HeaderBar style={{ width: '100%' }} />
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
