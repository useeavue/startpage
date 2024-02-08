import React from 'react';

import styles from './Image.module.scss';

export const Image: React.FC = () => {
	return (
		<img className={styles.image} src='../../../public/mai_small.png'></img>
	);
};
