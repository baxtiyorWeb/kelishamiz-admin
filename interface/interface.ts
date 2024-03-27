import { Dispatch, SetStateAction } from 'react';

export interface ICategory {
	id: number;
	name: string;
	childCategory: [];
}

export interface IProperty {
	id: number;
	name: string;
	valueTypeDto: {
		id: number;
		name: string;
		typeName: string;
	};
}

export interface ISearch {
	id: number;
	name: string;
	hasChildren: boolean;
	image: string;
}

export interface IPropsCategory {
	openUpdate: (id: string) => void;
	setUpdateId: Dispatch<SetStateAction<any>>;
	setUpdateCategories: Dispatch<SetStateAction<any>>;
}
