'use client';
import { Button, Input } from '@nextui-org/react';
import { message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const AddProperties = () => {
	interface ITypeValue {
		id: number;
		name: string;
		typeName: string;
	}
	const [dataValue, setDataValue] = useState<ITypeValue[]>();
	const [isLoading, setIsLoading] = useState(false);
	const [optionValue, setOptionValue] = useState('');
	const [messageApi, contextHolder] = message.useMessage();

	const [lang, setLang] = useState({ uz: '', ru: '', en: '' });
	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'This is a success message',
		});
	};
	const getData = async () => {
		try {
			const { data } = await axios.get(
				'http://95.130.227.131:8080/api/v1/value-type/list',
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

	const propertyPost = async () => {
		setIsLoading(true);
		const data = await axios.post(
			'http://95.130.227.131:8080/api/v1/property',
			{
				name: {
					uz: lang.uz,
					ru: lang.ru,
					en: lang.en,
				},
				valueTypeId: optionValue,
			},
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					'Content-Type': 'application/json',
				},
			}
		);
		success();
		setIsLoading(false);
	};

	useEffect(() => {
		getData();
	}, [isLoading]);

	// const addInput = () => {
	// 	if (inputs.length >= 8) {
	// 		alert('kerakli miqdorga yetdi');
	// 	} else {
	// 		setInputs([...inputs, { type: 'text', value: '' }]);
	// 	}
	// };

	// const handleInputChange = (index: number, value: string) => {
	// 	const newInputs = [...inputs];
	// 	newInputs[index].value = value;
	// 	setInputs(newInputs);
	// };

	// const handleTypeChange = (index: number, type: string) => {
	// 	const newInputs = [...inputs];
	// 	newInputs[index].type = type;
	// 	setInputs(newInputs);
	// };
	return (
		<div>
			{contextHolder}
			<div className='border w-full '></div>
			<div>
				<div className='w-full border flex justify-center items-center'>
					<div className='container flex justify-center items-center mt-5 mb-3 flex-col w-full'>
						<div className='languages'>
							<span>turli xil tilda yozing</span>
							<div className='flex justify-center items-center'>
								<Input
									className='mt-3 mb-5 mr-5 ml-1'
									label='name_uz'
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
						<div className='title'>
							<span>sarlavha kiriting</span>
							<Input
								className='w-[600px] mt-3 mb-3'
								label='sarlavha kiriting'
								// placeholder='Kategoriya nomini kiriting'
							/>
						</div>
						<div className='property mt-3 mb-3'>
							<select
								className={'border w-[300px] p-2 px-3 rounded-xl'}
								onChange={e => setOptionValue(e.target.value)}
							>
								{isLoading
									? 'loading...'
									: dataValue?.map(item => (
											<option value={item.id} key={item.id}>
												{item.name}
											</option>
									  ))}
							</select>
						</div>

						<Button title='save' color='primary' onClick={propertyPost}>
							save
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddProperties;
