import React from 'react';

import styles from './Startpage.module.scss';
import { ImageComponent } from '../components/ImageComponent/ImageComponent';
import { NavigationList } from '../components/NavigationList/NavigationList';
import { Controls } from '../components/Controls/Controls';
import { LocalStorageService } from '../services/localStorage.service';

export const Startpage: React.FC = () => {
	const [navList, setNavList] = React.useState(
		LocalStorageService.get('navigationList')
	);

	return (
		<div className={styles.container}>
			<ImageComponent />
			<NavigationList items={navList} setItems={setNavList} />
			<Controls />
		</div>
	);
};
