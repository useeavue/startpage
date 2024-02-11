import React from 'react';

import styles from './Controls.module.scss';

export const Controls: React.FC = () => {
	return (
		<div className={styles.controls}>
			<button type='button'>Change image</button>
			<button type='button'>Change background</button>
			<button type='button'>Change bookmarks</button>
		</div>
	);
};
