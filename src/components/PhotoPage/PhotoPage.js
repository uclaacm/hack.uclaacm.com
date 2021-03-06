import { basename } from 'path';

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Profile from './Profile';
import PageTitle from '../PageTitle/PageTitle';

const teamIntro = `We are a group of hackers, designers, and engineers all working to improve UCLA's
hacking community. We believe in moving fast, having fun, and being passionate
about using technology to solve problems that are relevant to us. We have a high
bar for success, and are willing to work incredibly hard, balancing school and
many other things, to improve the experience of other students around us.`;

/* eslint-disable max-len */
// The id field must be sync'd with the name of the file.
const officers = [
	{
		role: 'Co-President',
		name: 'Asha Kar',
		pronouns: 'she/her',
		id: 'asha',
		description: `Hi! I'm Asha and I'm a 2nd year CS major! I love drinking lots of coffee, 
		watching sitcoms, and organizing. I also adore all dogs (especially my own) and writing 
		scripts to simplify practically anything!`
	},
	{
		role: 'Co-President',
		name: 'Eugene Lo',
		pronouns: 'he/him',
		id: 'eugene',
		description: `Hi there! My name is Eugene and I'm a 3rd year computer science major.
		I'm currently focused on iOS development. In my free time, you can catch me singing
		too loudly, binging Youtube videos, or making too many Spotify playlists.`
	},
	{
		role: 'Officer',
		name: 'Nareh Agazaryan',
		pronouns: 'they/them',
		id: 'nareh',
		description: `Hey hey, I'm Nareh and I'm a 1st year CS major from LA! Other than programming, 
		I like gaming, watching anime, and spending way too much time on Discord. You can always find 
		me losing sleep from procrastination.`
	},
	{
		role: 'Officer',
		name: 'Einar Balan',
		pronouns: 'he/him',
		id: 'einar',
		description: `Hey, I'm Einar and I'm a 1st year CS major! When I'm not working on 
		projects for school or ACM, you can find me working out, playing video games ( <3 botw), 
		obsessing over avatar, or forcing myself to be an extrovert :)`
	},
	{
		role: 'Officer',
		name: 'Shirly Fang',
		pronouns: 'she/her',
		id: 'shirly',
		description: `I am a yellowtail enthusiast and bunny mom who loves to develop iOS apps!
		Hack is great!`
	},
	{
		role: 'Officer',
		name: 'Timothy Gu',
		pronouns: 'he/him',
		id: 'timothyG',
		description: `I'm a 4th year Computer Science major with a minor in Linguistics.
		I like messing with JavaScript, reading Wikipedia, and teaching Vim to people!`
	},
	{
		role: 'Officer',
		name: 'Kristie Lim',
		pronouns: 'she/her',
		id: 'kristie',
		description: `I'm a Computer Science major (class of 2021) from San Jose, California.
		Over winter quarter, I studied abroad in Singapore! In my free time, I've been crocheting
		cacti, turtles, and AirPods cases.`
	},
	{
		role: 'Officer',
		name: 'Jamie Liu',
		pronouns: 'she/her',
		id: 'jamie',
		description: `Hey, I'm a 4th year CS major from Princeton, New Jersey (yay east coast)!
		In my spare time I love to cook, bake, and binge watch TV. I like listening to music and I
		drink way too much boba (cough cough Miles).`
	},
	{
		role: 'Officer',
		name: 'Sahen Rai',
		pronouns: 'he/him',
		id: 'sahen',
		description: `Hi I'm Sahen! I'm a 3rd year student, and in addition to ACM I also 
		participate in the Foundations dance Org :). In my free time, I also like to make 
		lame clarinet covers of pop songs and watch old spongebob episodes.`
	},
	{
		role: 'Officer',
		name: 'Tim Rediehs',
		pronouns: 'he/him',
		id: 'timothyR',
		description: `I'm a board member of Hack and co-director of Hackschool
		2019 with Timothy Gu. Gaining and spreading knowledge is very important
		to me. In my free time, I love playing Magic: The Gathering even though I'm bad at it.`
	},
	{
		role: 'Officer',
		name: 'Jakob Reinwald',
		pronouns: 'he/him',
		id: 'jakob',
		description: `Hi, my name is Jakob and I'm a freshman CSE major! I've been in Hack 
		for the last couple quarters. :) Aside from school, I really like playing basketball, 
		watching the lakers, hiking, playing games, and most importantly, hanging out with my cats! `
	},
	{
		role: 'Officer',
		name: 'Chandra Suresh',
		pronouns: 'he/him',
		id: 'chandra',
		description: `Hello, I’m a 2nd year CE major (a proud EE flake). In my spare time, 
		I enjoy consuming all forms of media– from books and movies, to tv shows and anime SpongeBob. 
		Some of my other hobbies include playing chess and losing at ping pong.`
	},
	{
		role: 'Officer',
		name: 'Christina Tong',
		pronouns: 'she/her',
		id: 'christina',
		description: `Hello, I'm Christina! I'm a second year CSE major with a minor in Math, 
		and I really like hackathons and web dev! Aside from coding, I love hiking, all Tik Toks, 
		making some vibey Spotify playlists, and drinking copious amounts of caffeine.`
	},
	{
		role: 'Officer',
		name: 'Galen Wong',
		pronouns: 'he/him',
		id: 'galen',
		description: `I teach Web Dev a lot, feel free to ask me questions on
		JavaScript and React. I randomly organized a hot pot party at Kevin's
		place and they seem pretty satisfied.`
	},
	{
		role: 'Officer',
		name: 'Miles Wu',
		pronouns: 'he/him',
		id: 'miles',
		description: `I'm a CS major passionate about hackathons and Powell library.
		Most of my experience deals with web/mobile dev. Catch me out here eating way 
		too much food, drinking way too much boba (@Jamie for enabling me), and vibing to chill music.`
	},
	{
		role: 'Officer',
		name: 'Alex Xia',
		pronouns: 'he/him',
		id: 'alex',
		description: `Hi, I'm a 2nd year CS major from Hong Kong. Aside from coding,
		I like to watch anime and play games – occasionally, Jody baits me into watching kdrama.
		When I am not doing these things, I am at the UCLA badminton club.`
	},
	{
		role: 'Officer',
		name: 'Eric Yang',
		pronouns: 'he/him',
		id: 'eric',
		description: `What's up guys! My name is Eric, and I'm a first year CS major. 
		Outside of coding, I'm an avid Spikeball fan and love to dance. My goal in life
		 is to try every boba place I come across.`
	},
	{
		role: 'Advisor',
		name: 'Lea Blum',
		pronouns: 'she/her',
		id: 'lea',
		description: `Hi there, I'm Lea. Come hang out with me and the rest of hack at our events (on zoom) to hear my
		(sometimes) funny jokes and (always) hilarious puns. Currently living off of Disney movies in quarantine.`
	},
	{
		role: 'Advisor',
		name: 'Connie Chen',
		pronouns: 'she/her',
		id: 'connie',
		description: `Hello! My name is Connie, and I'm a 4th year Computer Science major and Cognitive Science minor.
		I like the California weather, Messenger stickers, and music. Currently living off of Disney movies in quarantine.`
	},
	{
		role: 'Advisor',
		name: 'Raji Jadhav',
		pronouns: 'she/her',
		id: 'raji',
		description: `Hey! I'm Raji, a 3rd year from
		India! Love to dance, love to sing, love to code. I believe in
		community learning, a multiverse, and fairies :) Current obsessions
		include ML, Thai food, and calligraphy. Tend to never stop talking.`
	},
	{
		role: 'Advisor',
		name: 'Jody Lin',
		pronouns: 'she/her',
		id: 'jody',
		description: `Hi I'm Jody and I'm a 3rd year CS Major!
		I love going to karaoke with friends, hanging out with my hack family, and playing guitar!
		I also may or may not be addicted to kdramas.`
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
		[theme.breakpoints.down('xs')]: {
			fontSize: theme.typography.fontSize,
			lineHeight: 1.57
		}
	},
	team: {
		fontFamily: ['Poppins', 'sans-serif'],
		fontWeight: 700,
		fontSize: theme.typography.fontSize * 3,
		borderStyle: 'solid',
		borderWidth: `0 0 ${theme.typography.fontSize * 1.5}px 0`,
		borderColor: theme.palette.secondary.main,
		width: 'fit-content',
		margin: theme.spacing(4, 'auto'),
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
			easterEggPhotos: allFile(filter: {relativePath: {glob: "team-easter-egg/*" }}) {
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
	const idToEasterEggMap = new Map();
	for (const { relativePath, childImageSharp } of data.easterEggPhotos.nodes) {
		const id = basename(relativePath).split('.')[0];
		idToEasterEggMap.set(id, childImageSharp.fixed);
		if (!officers.some(o => o.id === id)) {
			throw new Error('Unknown officer picture in src/images: ' + relativePath);
		}
	}

	const profiles = officers.map(o =>
		<Grid key={o.id} item xs={12} sm={6} md={4}>
			<Profile
				{...o}
				imageFixed={idToImageMap.get(o.id)}
				easterEggImageFixed={idToEasterEggMap.get(o.id)}
			/>
		</Grid>);

	return (
		<Container maxWidth="md" classes={{ root: classes.content }}>
			<PageTitle align='center'>Who We Are</PageTitle>
			{teamIntro}
			<div className={classes.team}>The Team</div>
			<Grid container>
				{profiles}
			</Grid>
		</Container>
	);
}

PhotoPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PhotoPage);
