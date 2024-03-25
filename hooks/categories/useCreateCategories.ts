import { createCategories } from '@@/config/features/categories/categories';
import { message } from 'antd';
const useCreateCategories = () => {
	const success = () => {
		message.success("categoriya qo'shildi");
	};
	const createCategoryPost = async (
		optionValue: string,
		uz: string,
		en: string,
		ru: string
	) => {
		const lang = {
			uz: uz,
			en: en,
			ru: ru,
		};
		const datas = {
			name: {
				...lang,
			},
			image: 'file?.name',
			parentId: 0,
			categoryPropertyForms: [
				{
					id: 0,
					propertyId: optionValue,
					deleted: true,
				},
			],
		};
		const data = await createCategories(datas);
		if (data.success === true) {
			success();
		}
	};

	return { createCategoryPost };
};

export default useCreateCategories;
