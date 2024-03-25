import api from '@@/config/api';

export const getCategories = async () => {
	const response = await api.get('/category/all');
	return response.data;
};

export const getListCategory = async (page: number, value: string) => {
	const response = await api.get(
		`category/list?page=${page - 1}&size=10&search=${value}`
	);
	return response.data;
};

export const createCategories = async (category: any) => {
	const response = await api.post('/category', category);
	return response.data;
};

export const updateCategory = async ({ id }: any, category: any) => {
	const response = await api.post(`/category/${id}`, category);
	return response.data;
};

export const deleteCategory = async ({ id }: any) => {
	const response = await api.delete(`/category/${id}`, id);
	return response.data;
};
