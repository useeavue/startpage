import React from 'react';
import { getFormattedDate } from '../../utils/date';

export const DateComponent: React.FC = () => {
	const [date, setDate] = React.useState(getFormattedDate());

	React.useEffect(() => {
		const timeoutId: number = setInterval(() => {
			setDate(getFormattedDate());
		}, 0);

		return () => {
			clearInterval(timeoutId);
		};
	}, []);

	return <h2>{date}</h2>;
};
