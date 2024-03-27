import { ICategory } from '@@/interface/interface';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useCategoryFunctions = () => {
	// get categories api function

	const getDataCategories = () => {
		const { data, error, isLoading } = useQuery<ICategory[] | any>({
			queryKey: ['category'],
			queryFn: () =>
				axios.get('http://95.130.227.131:8080/api/v1/category/all', {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						'Content-Type': 'application/json',
					},
				}),
		});

		return { data, error, isLoading };
	};

	return { getDataCategories };
};

export default useCategoryFunctions;
