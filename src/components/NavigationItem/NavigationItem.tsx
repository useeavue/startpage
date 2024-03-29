import React from 'react';
import { INavigationItem } from '../../models/navigation';

type Props = {
	data: INavigationItem | null;
};

export const NavigationItem: React.FC<Props> = ({ data }) => {
	return data ? (
		<ul>
			<li>{data.title}</li>
			{data.links.map(link => {
				const [url, title] = link.value.split('|');

				return (
					<li key={url}>
						<a href={url}>{title}</a>
					</li>
				);
			})}
		</ul>
	) : null;
};
