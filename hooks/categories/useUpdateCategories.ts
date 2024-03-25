import { updateCategory } from '@@/config/features/categories/categories';
import { message } from 'antd';

const useUpdateCategories = () => {
	const success = () => {
		message.success('malumot yangilandi');
	};

	const updateCategoryData = async (id: string, category: any) => {
		const data = await updateCategory(id, category);

		if (data.success === 200) {
			success();
		}
	};

	return { updateCategoryData };
};

export default useUpdateCategories;
