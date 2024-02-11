import React from 'react';

import { INavigationItem } from '../../models/navigation';
import { NavigationItem } from '../NavigationItem/NavigationItem';

import styles from './NavigationList.module.scss';

type Props = {
	items: INavigationItem[] | null;
	setItems: React.Dispatch<React.SetStateAction<INavigationItem[] | null>>;
};

export const NavigationList: React.FC<Props> = ({ items, setItems }) => {
	return (
		<nav className={styles.nav}>
			{items
				? items.map(item => <NavigationItem key={item.id} data={item} />)
				: null}
		</nav>
	);
};
