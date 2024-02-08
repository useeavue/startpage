import React from 'react';
import { INavigationItem } from '../../models/navigation';

type Props = {
	data: INavigationItem;
};

export const NavigationItem: React.FC<Props> = ({ data }) => {
	return (
		<ul>
			<li>{data.title}</li>
			{data.links.map(link => (
				<li key={link.url}>
					<a href={link.url}>{link.title}</a>
				</li>
			))}
		</ul>
	);
};
