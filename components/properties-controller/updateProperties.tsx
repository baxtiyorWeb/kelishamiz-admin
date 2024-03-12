import { Input } from '@nextui-org/react';
import { Button } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface IProps {
	id: any;
	updateProperties: any;
}
interface ITypeValue {
	id: number;
	name: string;
	typeName: string;
}

const UpdateProperties = (props: IProps) => {
	const [dataValue, setDataValue] = useState<ITypeValue[]>([]);
	const [option, setOption] = useState<string>();
	const [lang, setLang] = useState({ uz: '', ru: '', en: '' });

	const updateData = async () => {
		try {
			const { data } = await axios.put(
				`http://kelishamiz.uz/api/v1/property/${props.id}`,
				{
					name: {
						...lang,
					},
					valueTypeId: option,
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
				'http://kelishamiz.uz/api/v1/value-type/list',
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
				<div></div>
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
									defaultValue={props.updateProperties?.name || ''}
									placeholder={props.updateProperties?.name}
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
								defaultValue={props.updateProperties?.id}
							>
								<option
									defaultValue={props.updateProperties?.valueTypeDto?.id}
									key={props.updateProperties?.valueTypeDto?.id}
								>
									{props.updateProperties?.valueTypeDto?.name}
								</option>

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
