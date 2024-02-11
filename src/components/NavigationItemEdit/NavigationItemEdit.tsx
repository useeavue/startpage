import React from 'react';
import { INavigationItem } from '../../models/navigation';

type Props = {
	data: INavigationItem | null;
};

export const NavigationItemEdit: React.FC<Props> = ({ data }) => {
	return data ? (
		<ul>
			<li>
				<input type='text' value={data.title} />
			</li>
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
