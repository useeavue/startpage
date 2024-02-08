import React from 'react';
import { getFormattedDate } from '../../utils/date';

export const Date: React.FC = () => {
	const [date, setDate] = React.useState(getFormattedDate());

	React.useEffect(() => {
		const timeoutId = setInterval(() => {
			setDate(getFormattedDate());
		}, 0);

		return () => {
			clearInterval(timeoutId);
		};
	}, []);

	return <h2>{date}</h2>;
};
