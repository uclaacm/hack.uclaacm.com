import { useEffect } from 'react';

const useTitle = title => {
	useEffect(() => {
		document.title = `UCLA ACM Hack | ${title}`;
	}, []);
};

export default useTitle;
