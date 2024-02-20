import type { RouteParams } from './$types.js';

/** @type {import('./$types').EntryGenerator} */ export function entries() {
	const arr: { id: string }[] = [];
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].forEach((i) => {
		arr.push({ id: i.toString() });
	});
	return <RouteParams[]>(<unknown>arr);
}
export const prerender = true;
