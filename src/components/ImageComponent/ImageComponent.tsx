import React from 'react';

import styles from './ImageComponent.module.scss';

export const ImageComponent: React.FC = () => {
	return (
		<img className={styles.image} src='../../../public/mai_small.png'></img>
	);
};
