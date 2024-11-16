import { useEffect } from 'react';

const useTitle = title => {
	useEffect(() => {
		document.title = `UCLA ACM HACK | ${title}`;
	}, []);
};

export default useTitle;
