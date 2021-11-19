import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TalkBubbleIcon from '@material-ui/icons/ModeCommentTwoTone';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import EventAvailableIcon from '@material-ui/icons/EventAvailableTwoTone';

import LinkNoStyle from '../LinkNoStyle/LinkNoStyle';
import Banner from './Banner';
import HackDescription from './HackDescription';
import BlogList from './BlogList';
import EventList from './EventList';
import Carousel from './Carousel';
import StayConnectedBanner from './StayConnectedBanner';
import FAQSection from './FAQSection';

const styles = theme => ({
	heading: {
		margin: theme.spacing(4, 0, 0, 0),
		fontFamily: theme.typography.fontFamily,
		fontWeight: 'bold',
		// align icon with text
		display: 'flex',
		alignItems: 'center'
	},
	headingIcon: {
		marginRight: theme.spacing(1),
		fontSize: 'inherit'
	},
	forwardArrow: {
		marginLeft: theme.spacing(1),
		fontSize: theme.typography.fontSize * 0.75
	},
	viewAllBtn: {
		margin: theme.spacing(2, 0)
	},
	whiteContainer: {
		padding: theme.spacing(2, 0),
		overflow: 'hidden',
		backgroundColor: '#ffffff'
	},
	transparentContainer: {
		padding: theme.spacing(2, 0),
		overflow: 'hidden'
	}
});

function HomePageComponent({ classes }) {
	const IconHeading = ({ Icon, children }) =>
		<Typography variant="h4" classes={{ root: classes.heading }}>
			<Icon color="primary" classes={{ root: classes.headingIcon }} />
			{children}
		</Typography>;
	IconHeading.propTypes = {
		Icon: PropTypes.elementType.isRequired,
		children: PropTypes.node
	};

	const ViewAllButton = ({ to, children }) =>
		<LinkNoStyle to={to}>
			<Button variant="outlined" classes={{ root: classes.viewAllBtn }}>
				{children}
				<ArrowForwardIcon classes={{ root: classes.forwardArrow }} />
			</Button>
		</LinkNoStyle>;
	ViewAllButton.propTypes = {
		to: PropTypes.string.isRequired,
		children: PropTypes.node
	};

	const Container1 = props =>
		<section className={classes.whiteContainer}>
			<Container maxWidth="md" {...props} />
		</section>;

	const Container2 = props =>
		<section className={classes.transparentContainer}>
			<Container maxWidth="md" {...props} />
		</section>;

	return <React.Fragment>
		<Banner />
		<Container1>
			<HackDescription />
			<StayConnectedBanner />
		</Container1>

		<Container2>
			<IconHeading Icon={EventAvailableIcon}>Events</IconHeading>
			<ViewAllButton to="/events#upcoming">View all events</ViewAllButton>
			<EventList />
		</Container2>

		<Container1>
			<IconHeading Icon={TalkBubbleIcon}>Blog posts</IconHeading>
			<ViewAllButton to="/blog">View all blog posts</ViewAllButton>
			<BlogList />
		</Container1>

		<Container2>
			<FAQSection />
		</Container2>

		<Container1>
			<Carousel />
		</Container1>

	</React.Fragment>;
}

HomePageComponent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePageComponent);
