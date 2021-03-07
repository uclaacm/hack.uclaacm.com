import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function EmptyEventMessage() {
	return (
		<Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
			<Typography variant="h5" component="p" align="center" color="textSecondary" gutterBottom>
				{'💜 Stay tuned for future events'}
			</Typography>
			<Typography variant="h5" component="p" align="center" color="textSecondary" gutterBottom>
				{'🚀 We look forward to seeing you'}
			</Typography>
			<Typography variant="h5" component="p" align="center" color="textSecondary" gutterBottom>
				{'🙌 And we can\'t wait to see the amazing things YOU build'}
			</Typography>
		</Container>
	);
}

export default EmptyEventMessage;
