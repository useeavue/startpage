import React from 'react';

import { INavigationItem } from '../../models/navigation';
import { NavigationItemEdit } from '../NavigationItemEdit/NavigationItemEdit';

import styles from './NavigationListEdit.module.scss';

type Props = {
	items: INavigationItem[] | null;
	setItems: React.Dispatch<React.SetStateAction<INavigationItem[] | null>>;
};

export const NavigationListEdit: React.FC<Props> = ({ items, setItems }) => {
	return (
		<nav className={styles.nav}>
			{items
				? items.map(item => (
						<NavigationItemEdit key={item.id} data={item} />
				  ))
				: null}
		</nav>
	);
};
