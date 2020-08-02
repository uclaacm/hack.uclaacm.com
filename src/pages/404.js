import React from 'react';

import SEO from '../components/SEO';
import HeadFooter from '../components/HeadFooter/HeadFooter';
import ErrorPage from '../components/404Page/404Page';


const NotFoundPage = () =>
	<div>
		<HeadFooter>
			<SEO title="404: Not found" />
			<ErrorPage />
		</HeadFooter >
	</div>;
export default NotFoundPage;
