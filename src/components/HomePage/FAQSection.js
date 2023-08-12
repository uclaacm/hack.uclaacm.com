import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';


const Accordion = withStyles(theme => ({
	root: {
		backgroundColor: theme.palette.grey[50],
		boxShadow: 'none',
		borderColor: theme.palette.grey[400],
		borderTopWidth: 2,
		borderTopStyle: 'solid',
		'&:last-child': {
			borderBottomWidth: 2,
			borderBottomStyle: 'solid'
		},
		'&::before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 0
		}
	},
	expanded: {}
}))(MuiAccordion);

const AccordionSummary = withStyles(theme => ({
	root: {
		minHeight: 'auto',
		'&$expanded': {
			minHeight: 'auto'
		},
		[theme.breakpoints.down('xs')]: {
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1)
		}
	},
	content: {
		margin: '12px 0',
		'&$expanded': {
			margin: '12px 0'
		}
	},
	expanded: {}
}))(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
	root: {
		paddingBottom: theme.spacing(6),
		[theme.breakpoints.down('xs')]: {
			paddingBottom: theme.spacing(4),
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1)
		}
	}
}))(MuiAccordionDetails);

const useStyles = makeStyles(theme => ({
	question: {
		fontWeight: theme.typography.fontWeightMedium,
		color: theme.palette.secondary.main,
		fontFamily: theme.typography.fontFamily
	}
}));

function AccordionQA({ index, question, answer }) {
	const [expanded, setExpanded] = useState(false);
	const classes = useStyles();
	const panelName = 'faqPanel' + index;
	const theme = useTheme();

	return (
		<Accordion
			key={panelName}
			square
			expanded={expanded}
			onChange={() => setExpanded(e => !e)}>
			<AccordionSummary
				expandIcon={expanded ? <Remove /> : <Add />}
				aria-controls={panelName + '-content'}
				id={panelName + '-header'}>
				<Typography variant='body1' className={classes.question}>
					{question}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant='body1' style={{ maxWidth: theme.breakpoints.values.md * 0.8 }}>
					{answer}
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
}

AccordionQA.propTypes = {
	question: PropTypes.node.isRequired,
	answer: PropTypes.node.isRequired,
	index: PropTypes.number.isRequired
};

function FAQSection() {
	const faqs = [
		{
			question: `Where do I find the ACM YouTube channel?`,
			answer:
				<>
					We post all recordings of our workshops on the ACM YouTube channel, which can be found <Link href="https://www.youtube.com/c/ACMUCLA/videos">here</Link>!
				</>
		},
		{
			question: `How do I participate?`,
			answer:
				<>
					We recommend attending some of our events or asking us questions in
					the <Link href="https://discord.gg/3GSPECbCnE">ACM Hack Discord</Link>. Check
					out the events page for more information about the events we&apos;re holding this quarter.
					Everyone is welcome!
				</>
		},
		{
			question: `Your past workshops seem interesting, how can I learn more?`,
			answer:
				<>
					Check out the <Link href="/archive">archive</Link> page, where
					we keep a record of all of our past workshops!
				</>
		},
		{
			question: `How do I join your team?`,
			answer:
				<>
					We start recruitment for internship positions every
					fall, following the ACM general meeting (which you should attend)!
					After a quarter of shadowing officers, interns
					may have the opportunity to become full-time officers.
					All of our current officers started as interns and we
					highly encourage you to look out for applications in the fall!
				</>
		},
		{
			question: `I have some other questions.`,
			answer:
				<>
					Send us an email at <Link href='mailto:hack@uclaacm.com'>hack@uclaacm.com</Link> or
					message us through the <Link href="https://discord.gg/3GSPECbCnE">ACM Hack Discord</Link>!
				</>
		}
	];

	const theme = useTheme();

	return (
		<Box component='section' paddingY={{ xs: 4, md: 5 }} bgcolor='background.grey'>
			<Container maxWidth='md'>
				<Box component='hgroup' paddingBottom={{ xs: 4, md: 8 }}>
					<Typography
						variant='h4'
						component='h2'
						style={{ fontWeight: theme.typography.fontWeightBold }}>
						FAQ
					</Typography>
					<Typography
						variant='h6'
						component='h3'
						style={{ color: theme.palette.grey[600] }}>
						Frequently Asked Questions
					</Typography>
				</Box>
				{faqs.map((faq, i) => <AccordionQA key={i} index={i} {...faq} />)}
			</Container>
		</Box>
	);
}

export default FAQSection;
