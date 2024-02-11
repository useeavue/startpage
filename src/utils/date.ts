export function getFormattedDate(): string {
	const date: Date = new Date();

	const today: string = date.toLocaleString('en', { weekday: 'long' });
	const hour: string = date.toLocaleString('pl', { hour: '2-digit' });
	const minute: string = date.toLocaleString('en', { minute: '2-digit' });
	const second: string = date.toLocaleString('en', { second: '2-digit' });
	const day: string = date.toLocaleString('en', { day: '2-digit' });
	const month: string = date.toLocaleString('en', { month: '2-digit' });
	const year: string = date.toLocaleString('en', { year: 'numeric' });

	return `${today}, ${hour}:${minute.length < 2 ? '0' + minute : minute}:${
		second.length < 2 ? '0' + second : second
	} | ${day}/${month}/${year}`;
}
