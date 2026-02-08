import { useMemo } from 'react';

export function useWorkshopSearch(archiveData, searchQuery) {
	return useMemo(() => {
		if (!searchQuery.trim()) {
			return archiveData;
		}

		const query = searchQuery.toLowerCase();
		const keywords = query.split(/\s+/).filter(k => k.length > 0);

		return archiveData.map(quarter => ({
			...quarter,
			events: quarter.events
				.map(event => ({
					...event,
					sessions: event.sessions.filter(session => {
						const searchableText = [
							session.sessionName,
							session.sessionTags.join(' '),
							session.presenters.join(' '),
						]
							.join(' ')
							.toLowerCase();

						return keywords.every(keyword =>
							searchableText.includes(keyword)
						);
					}),
				}))
				.filter(event => event.sessions.length > 0),
		}))
		.filter(quarter => quarter.events.length > 0);
	}, [archiveData, searchQuery]);
}
