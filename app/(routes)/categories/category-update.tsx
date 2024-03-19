import { Input } from '@nextui-org/react';
import { Button } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface IProps {
	id: any;
	updateCategories: any;
}
interface ICategoryValue {
	id: number;
	name: string;
	childCategory: [];
}

interface ICategoryUpdate {
	name: {
		uz: string;
		ru: string;
		en: string;
	};
	image: string;
	parentId: number;
	categoryPropertyForms: [
		{
			id: number;
			propertyId: number;
			deleted: boolean;
		}
	];
}

const UpdateProperties = (props: IProps) => {
	const [dataValue, setDataValue] = useState<ICategoryValue[]>([]);
	const [option, setOption] = useState<string>();
	const [lang, setLang] = useState({ uz: '', ru: '', en: '' });

	const updateData = async () => {
		try {
			const { data } = await axios.put(
				`http://95.130.227.131:8080/api/v1/category/${props.id}`,
				{
					name: {
						...lang,
					},
					parentId: 0,
					categoryPropertyForms: [
						{
							id: 0,
							propertyId: option,
							deleted: true,
						},
					],
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				}
			);
			setDataValue(data);
			await getTypeList();
		} catch (error) {
			console.log(error);
		}
	};

	const getTypeList = async () => {
		try {
			const { data } = await axios.get(
				'http://95.130.227.131:8080/api/v1/property/all',
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				}
			);
			setDataValue(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getTypeList();
	}, []);

	return (
		<div>
			<div className='border w-full '>
				<div>
					<h1 className='text-center'>Malumotni yangilash</h1>
				</div>
			</div>
			<div>
				<div className='w-full border flex justify-center items-center'>
					<div className='container flex justify-center items-center mt-5 mb-3 flex-col w-full'>
						<div className='languages'>
							<span>turli xil tilda yozing</span>
							<div className='flex justify-center items-center'>
								<Input
									className='mt-3 mb-5 mr-5 ml-1'
									label='name_uz'
									defaultValue={props.updateCategories?.name || ''}
									placeholder={props.updateCategories?.name}
									onChange={e => setLang({ ...lang, uz: e.target.value })}
								/>
								<Input
									className='mt-3 mb-5 mr-5 ml-1'
									label='name_en'
									onChange={e => setLang({ ...lang, en: e.target.value })}
								/>
								<Input
									className='mt-3 mb-5 mr-5 ml-1'
									label='name_ru'
									onChange={e => setLang({ ...lang, ru: e.target.value })}
								/>
							</div>
						</div>

						<div className='property mt-3 mb-3'>
							<select
								className={'border w-[300px] p-2 px-3 rounded-xl'}
								onChange={e => setOption(e.target.value)}
							>
								<option value='select'>select</option>
								{dataValue?.map(item => (
									<option value={item.id} key={item.id}>
										{item.name}
									</option>
								))}
							</select>
						</div>

						<Button title='save' color='primary' onClick={updateData}>
							save
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateProperties;
