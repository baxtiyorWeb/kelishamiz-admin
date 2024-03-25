import api from '@@/config/api';
import { IProperty } from '@@/interface/interface';
import { useQuery } from '@tanstack/react-query';

const useProperties = () => {
	const { data, error, isLoading } = useQuery<IProperty[] | any>({
		queryKey: ['property'],
		queryFn: () => api.get('property/all'),
	});

	return { data, error, isLoading };
};

export default useProperties;
