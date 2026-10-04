import { useEffect, useState } from 'react';

export default function useNearViewport(ref) {
	const [isNear, setIsNear] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsNear(true);
				observer.disconnect();
			}
		}, { rootMargin: '600px' });

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [ref]);

	return isNear;
}
