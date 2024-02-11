import { INavigationItem } from './navigation';

export interface ILocalStorageMap {
	navigationList: INavigationItem[];
	image: string;
	backgroundColor: string;
}

export type LSKey = keyof ILocalStorageMap;
