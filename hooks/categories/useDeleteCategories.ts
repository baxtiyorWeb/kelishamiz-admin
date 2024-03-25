import { deleteCategory } from '@@/config/features/categories/categories';
import { message } from 'antd';

const useDeleteCategories = () => {
	const success = () => {
		message.success("kategoriya o'chirildi");
	};
	const deleteCategoryData = async (id: string) => {
		const data = await deleteCategory(id);
		if (data.success === 200) {
			success();
		}
	};

	return { deleteCategoryData };
};

export default useDeleteCategories;
