import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function EmptyEventMessage() {
	return (
		<Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
			<Typography variant="h5" align="center" color="textSecondary" gutterBottom>
				{'💜 Thank you for your support'}
			</Typography>
			<Typography variant="h5" align="center" color="textSecondary" gutterBottom>
				{' 🚀 Please look forward to our events next quarter'}
			</Typography>
			<Typography variant="h5" align="center" color="textSecondary" gutterBottom>
				{'🙌 And we can\'t wait to seeing the amazing YOU'}
			</Typography>
		</Container>
	);
}

export default EmptyEventMessage;
