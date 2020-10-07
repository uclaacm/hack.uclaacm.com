import React from 'react';

import SEO from '../components/SEO';
import HeadFooter from '../components/HeadFooter/HeadFooter';
import NotFoundPageBody from '../components/NotFoundPage/NotFoundPage';


const NotFoundPage = () =>
	<div>
		<HeadFooter>
			<SEO title="404: Not found" />
			<NotFoundPageBody />
		</HeadFooter >
	</div>;
export default NotFoundPage;
