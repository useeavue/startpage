export interface INavigationLink {
	value: string;
}

export interface INavigationItem {
	id: string;
	title: string;
	links: INavigationLink[];
}
