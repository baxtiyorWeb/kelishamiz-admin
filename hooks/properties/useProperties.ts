import { IProperty } from '@@/interface/interface';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useProperties = () => {
	const { data, error, isLoading } = useQuery<IProperty[] | any>({
		queryKey: ['property'],
		queryFn: () =>
			axios.get('http://95.130.227.131:8080/api/v1/property/all', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					'Content-Type': 'application/json',
				},
			}),
	});

	return { data, error, isLoading };
};

export default useProperties;
