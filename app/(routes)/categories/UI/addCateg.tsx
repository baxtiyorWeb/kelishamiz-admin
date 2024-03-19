'use client';
import { Button, Input } from '@nextui-org/react';
import { message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DynamicInput = () => {
	interface IProperties {
		id: number;
		name: string;
		valueTypeDto: {
			id: number;
			name: string;
			typeName: string;
		};
	}
	const [property, setProperty] = useState<IProperties[]>();
	const [optionValue, setOptionValue] = useState('');
	const [file, setFile] = useState<File>();
	const [messageApi, contextHolder] = message.useMessage();
	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'categoriya kiritildi',
		});
	};
	const error = () => {
		messageApi.open({
			type: 'error',
			content: 'categoriya kiritishda xatolik ',
		});
	};
	const [lang, setLang] = useState({ uz: '', ru: '', en: '' });
	const propertyPost = async () => {
		try {
			const data = await axios.post(
				'http://95.130.227.131:8080/api/v1/category',
				{
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
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						'Content-Type': 'application/json',
					},
				}
			);
			if (data.status === 200) {
				success();
			}
		} catch (err) {
			error();
		}
	};
	const getProperties = async () => {
		try {
			const { data } = await axios.get(
				'http://95.130.227.131:8080/api/v1/property/all',
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				}
			);
			setProperty(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProperties();
	}, []);
	return (
		<div>
			{contextHolder}
			<div className='border w-full '>
				<div>
					<h1 className='text-center'>categoriya qo&apos;shish</h1>
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

						<div className='grid grid-cols-1 gap-5'>
							<div className='property mt-3 mb-3'>
								<select
									className={'border w-[300px] p-2 px-3 rounded-xl'}
									onChange={e => setOptionValue(e.target.value)}
								>
									<option value=''>propertyni tanlang</option>
									{property?.map(item => (
										<option value={item.id} key={item.id}>
											{item.name}
										</option>
									))}
								</select>
							</div>
						</div>
						<Button
							title='save'
							color='primary'
							onClick={propertyPost}
							// className='absolute right-5 bottom-5'
						>
							save
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DynamicInput;
