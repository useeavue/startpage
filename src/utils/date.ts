export function getFormattedDate() {
	const date = new Date();

	const today = date.toLocaleString('en', { weekday: 'long' });
	const hour = date.toLocaleString('pl', { hour: '2-digit' });
	const minute = date.toLocaleString('en', { minute: '2-digit' });
	const second = date.toLocaleString('en', { second: '2-digit' });
	const day = date.toLocaleString('en', { day: '2-digit' });
	const month = date.toLocaleString('en', { month: '2-digit' });
	const year = date.toLocaleString('en', { year: 'numeric' });

	return `${today}, ${hour}:${minute}:${second} | ${day}/${month}/${year}`;
}
