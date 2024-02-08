export interface INavigationLink {
	url: string;
	title: string;
}

export interface INavigationItem {
	id: string;
	title: string;
	links: INavigationLink[];
}
