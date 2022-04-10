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
		name: 'Nareh Agazaryan',
		pronouns: 'they/them',
		id: 'nareh',
		description: `Hey hey, I'm Nareh and I'm a 2nd year CS major from LA! Other than
		programming, I like gaming, playing bass, watching anime and rewatching Gilmore Girls,
		and spending way too much time on Discord. You can always find me losing sleep from
		procrastination.`
	},
	{
		role: 'Co-President',
		name: 'Christina Tong',
		pronouns: 'she/her',
		id: 'christina',
		description: `Hello, I'm Christina! I'm a 3rd year CSE major with a minor in Math,
		and I really like hackathons and web dev! Aside from coding, I love hiking, all Tik Toks,
		making some vibey Spotify playlists, and drinking copious amounts of caffeine.`
	},
	{
		role: 'Officer',
		name: 'Einar Balan',
		pronouns: 'he/him',
		id: 'einar',
		description: `Hey, I'm Einar and I'm a 2nd year CS major! When I'm not working on
		projects for school or ACM, you can find me working out, playing video games ( <3 botw),
		obsessing over avatar, or forcing myself to be an extrovert :)`
	},
	{
		role: 'Officer',
		name: 'Maggie Li',
		pronouns: 'she/her',
		id: 'maggie',
		description: `Hi! I'm Maggie, a 2nd year CS major, and I am passionate about connecting people through code :) Outside of Hack, I love to rewatch my favorite TV shows, find the best hidden gems on Yelp, play badminton, and make my friends matcha lattes.`
	},
	{
		role: 'Officer',
		name: 'Thomas McGall',
		pronouns: 'he/him',
		id: 'thomas',
		description: `Hi guys! My name is Thomas McGall and I am a 1st year CS major. Other than programming I like hiking, eating brunch and watching movies. I love to explore whether it's the outdoors, new interests or new foods!`
	},
	{
		role: 'Officer',
		name: 'Sahen Rai',
		pronouns: 'he/him',
		id: 'sahen',
		description: `Hi I'm Sahen! I'm a 4th year student, and in addition to ACM I also
		participate in the Foundations dance Org :). In my free time, I also like to make
		lame clarinet covers of pop songs and watch old spongebob episodes.`
	},
	{
		role: 'Officer',
		name: 'Jakob Reinwald',
		pronouns: 'he/him',
		id: 'jakob',
		description: `Hi, my name is Jakob and I'm a 2nd year CSE major! I've been in Hack
		for the last couple quarters. :) Aside from school, I really like playing basketball,
		watching the lakers, hiking, playing games, and most importantly, hanging out with my cats! `
	},
	{
		role: 'Officer',
		name: 'Chandra Suresh',
		pronouns: 'he/him',
		id: 'chandra',
		description: `Hello, I'm a 3rd year CE major (a proud EE flake). In my spare time,
		I enjoy consuming all forms of media– from books and movies, to tv shows and anime SpongeBob.
		Some of my other hobbies include playing chess, losing at ping pong, and rock climbing.`
	},
	{
		role: 'Officer',
		name: 'Anakin Trotter',
		pronouns: 'he/him',
		id: 'anakin',
		description: `Greetings. I am a 1st year Linguistics and Computer Science major (as of April 2022) with a passion for automation and full stack development. I enjoy playing piano and partying with friends. I also commonly take late night walks on the UCLA campus.`
	},
	{
		role: 'Officer',
		name: 'James Wu',
		pronouns: 'he/him',
		id: 'james',
		description: `Helloo! I'm James, a 1st year mechanical engineering major (though looking to switch to CS), and I think coding is a really cool way to express creativity and have an impact! In my free time, I enjoy reading, playing badminton or basketball, or just hanging out with friends. :D`
	},
	{
		role: 'Officer',
		name: 'Miles Wu',
		pronouns: 'he/him',
		id: 'miles',
		description: `Hello! I'm a 4th year CS major who lives for good vibes and delicious food. While I enjoy hackathons and web/mobile dev, what really drives me is community building and helping others achieve their goals! I also love cooking (MasterChef who?) and am recovering from boba addiction (grass jelly gang).`
	},
	{
		role: 'Officer',
		name: 'Alex Xia',
		pronouns: 'he/him',
		id: 'alex',
		description: `Hi, I'm a 3rd year CS major from Hong Kong. Aside from coding,
		I like to watch anime and play games – occasionally, Jody baits me into watching kdrama.
		When I am not doing these things, I am at the UCLA badminton club.`
	},
	{
		role: 'Officer',
		name: 'Eric Yang',
		pronouns: 'he/him',
		id: 'eric',
		description: `What's up guys! My name is Eric, and I'm a 2nd year CS major.
		Outside of coding, I'm an avid Spikeball fan and love to dance. My goal in life
		is to try every boba place I come across.`
	},
	{
		role: 'Officer',
		name: 'Katelyn Yu',
		pronouns: 'she/her',
		id: 'katelyn',
		description: `Hello! I'm Katelyn, and I'm a 2nd year CS major. My passions lie in making CS accessible to beginners and building strong and communities. Otherwise, I'm a self-proclaimed boba connoisseur who enjoys karate, reading, creative writing, falling down the YouTube rabbit hole, and staying up later than is probably wise :)`
	},
	{
		role: 'Officer',
		name: 'Nathan Zhang',
		pronouns: 'he/him',
		id: 'nathan',
		description: `Hey! I'm Nathan, and I'm a 1st year Computer Science and Engineering major. In my free time, I like to lose hours in the day by the piano, execute clean drop shots on the badminton court, and explore LA for the best food the city has to offer.`
	},
	{
		role: 'Advisor',
		name: 'Asha Kar',
		pronouns: 'she/her',
		id: 'asha',
		description: `Hi, I'm Asha, and I'm a 3rd year CS major with a minor in Bioinformatics!
		I love drinking lots of coffee, watching comedies, and writing scripts to eliminate tediousness.
		I also adore dogs (but especially my own!)`
	},
	{
		role: 'Advisor',
		name: 'Jody Lin',
		pronouns: 'she/her',
		id: 'jody',
		description: `Hi I'm Jody and I'm a 4th year CS Major!
		I love going to karaoke with friends, hanging out with my hack family, and playing guitar!
		I also may or may not be addicted to kdramas.`
	},
	{
		role: 'Advisor',
		name: 'Eugene Lo',
		pronouns: 'he/him',
		id: 'eugene',
		description: `Hi there! My name is Eugene and I'm a 4th year computer science major.
		I'm currently interested in iOS development, UX design, and making an impact through code!
		In my free time, you can catch me singing too loudly, binging Youtube videos, or making way
		too many Spotify playlists.`
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
