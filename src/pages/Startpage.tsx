import React from 'react';

import { ImageComponent } from '../components/ImageComponent/ImageComponent';
import { NavigationList } from '../components/NavigationList/NavigationList';
import { Controls } from '../components/Controls/Controls';
import { LocalStorageService } from '../services/localStorage.service';
import { DateComponent } from '../components/DateComponent/DateComponent';

import styles from './Startpage.module.scss';
import { NavigationListEdit } from '../components/NavigationListEdit/NavigationListEdit';

export const Startpage: React.FC = () => {
	const [navList, setNavList] = React.useState(
		LocalStorageService.get('navigationList')
	);
	const [isEdit, setIsEdit] = React.useState(false);

	return (
		<div className={styles.container}>
			<ImageComponent />
			<div className={styles.navWrapper}>
				<div className={styles.title}>
					<h1>Welcome back!</h1>
					<DateComponent />
				</div>
				{isEdit ? (
					<NavigationList items={navList} setItems={setNavList} />
				) : (
					<NavigationListEdit items={navList} setItems={setNavList} />
				)}
			</div>
			<Controls isEditBookmarks={isEdit} setIsEditBookmarks={setIsEdit} />
		</div>
	);
};
