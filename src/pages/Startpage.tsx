import React from 'react';

import styles from './Startpage.module.scss';
import { Image } from '../components/Image/Image';
import { NavigationList } from '../components/NavigationList/NavigationList';

export const Startpage: React.FC = () => {
	return (
		<div className={styles.container}>
			<Image />
			<NavigationList />
		</div>
	);
};
