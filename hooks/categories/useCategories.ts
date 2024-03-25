import api from '@@/config/api';
import { ICategory } from '@@/interface/interface';
import { useQuery } from '@tanstack/react-query';

const useCategoryFunctions = () => {
	// get categories api function

	const getDataCategories = () => {
		const { data, error, isLoading } = useQuery<ICategory[] | any>({
			queryKey: ['category'],
			queryFn: () => api.get('/category/all'),
		});

		return { data, error, isLoading };
	};

	return { getDataCategories };
};

export default useCategoryFunctions;
