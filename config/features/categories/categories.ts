import axios from 'axios';

export const getCategories = async () => {
	const response = await axios.get(
		'http://95.130.227.131:8080/api/v1/category/all',
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}
	);
	return response.data;
};

export const getListCategory = async (page: number, value: string) => {
	const response = await axios.get(
		`http://95.130.227.131:8080/api/v1/category/list?page=${
			page - 1
		}&size=10&search=${value}`,
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}
	);
	return response.data;
};

export const createCategories = async (category: any) => {
	const response = await axios.post(
		'http://95.130.227.131:8080/api/v1/category',
		category,
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}
	);
	return response.data;
};

export const updateCategory = async ({ id }: any, category: any) => {
	const response = await axios.post(
		`http://95.130.227.131:8080/api/v1/category/${id}`,
		category,
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		}
	);
	return response.data;
};

export const deleteCategory = async ({ id }: any) => {
	const response = await axios.delete(
		`http://95.130.227.131:8080/api/v1/category/${id}`,
		id
	);
	return response.data;
};
