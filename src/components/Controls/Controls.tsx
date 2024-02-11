import React from 'react';

import styles from './Controls.module.scss';

type Props = {
	isEditBookmarks: boolean;
	setIsEditBookmarks: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Controls: React.FC<Props> = ({
	isEditBookmarks,
	setIsEditBookmarks,
}) => {
	const onEditBookmarksClick: () => void = () => {
		setIsEditBookmarks(!isEditBookmarks);
	};

	return (
		<div className={styles.controls}>
			<button type='button'>Change image</button>
			<button type='button'>Change background</button>
			<button type='button' onClick={onEditBookmarksClick}>
				{isEditBookmarks ? 'Apply bookmarks' : 'Edit bookmarks'}
			</button>
		</div>
	);
};
