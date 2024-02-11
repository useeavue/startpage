import { ILocalStorageMap, LSKey } from '../models/localStorage';

export class LocalStorageService {
	public static get<K extends LSKey>(key: K): ILocalStorageMap[K] | null {
		const result: string | null = localStorage.getItem(key);
		let parsed: ILocalStorageMap[K];

		if (!result) {
			localStorage.removeItem(key);
			return null;
		}

		try {
			parsed = JSON.parse(result);
		} catch (error) {
			console.error(error);
			localStorage.removeItem(key);
			return null;
		}

		return parsed;
	}

	public static set<K extends LSKey>(
		key: K,
		value: ILocalStorageMap[K]
	): void {
		localStorage.setItem(key, JSON.stringify(value));
	}
}
