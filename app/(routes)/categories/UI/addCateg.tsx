'use client';
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DynamicInput = () => {
	interface ITypeValue {
		id: number;
		name: string;
		typeName: string;
	}
	const [dataValue, setDataValue] = useState<ITypeValue[]>();
	const [optionValue, setOptionValue] = useState('');

	const [lang, setLang] = useState({ uz: '', ru: '', en: '' });
	const propertyPost = async () => {
		const { data } = await axios.post(
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
		console.log(data);
	};

	useEffect(() => {
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

		getData();
	}, []);
	// const [inputs, setInputs] = useState([{ type: 'text', value: '' }]);

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
			<div className='border w-full '>
				<div>
					{/* <select name='' id=''>
						{dataValue?.map(item => (
							<option value={item.id} key={item.id}>
								{item.name}
							</option>
						))}
					</select> */}
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
						<div className='title'>
							<span>sarlavha kiriting</span>
							<Input
								className='w-[600px] mt-3 mb-3'
								label='sarlavha kiriting'
								// placeholder='Kategoriya nomini kiriting'
							/>
						</div>

						{/* <div className='add_sub_category mt-3 mb-5'>
							<span>sub Kategoriya kiriting</span>
							<div className='w-[1400px] border'>
								<div
									className={
										'border w-[100%] overflow-scroll grid grid-cols-4 flex-col justify-center items-center p-5 gap-4'
									}
								>
									{inputs.map((input, index) => (
										<div key={index}>
											<Input
												className='w-[300px] mt-3 mb-3'
												label='parent kategoriya kiriting'
												onChange={e => handleInputChange(index, e.target.value)}
											/>
											<select
												className={'border w-[300px] p-2 px-3 rounded-xl'}
												value={input.type}
												onChange={e => handleTypeChange(index, e.target.value)}
											>
												{dataValue?.map(item => (
													<option value={item.id} key={item.id}>
														{item.name}
													</option>
												))}
											</select>
										</div>
									))}
								</div>
								<button
									className={
										'border w-[300px] rounded-xl bg-blue-600 text-white block mx-auto my-4 p-2'
									}
									onClick={addInput}
								>
									Add Input
								</button>
							</div>
						</div> */}

						<div className='property mt-3 mb-3'>
							<select
								className={'border w-[300px] p-2 px-3 rounded-xl'}
								onChange={e => setOptionValue(e.target.value)}
							>
								{dataValue?.map(item => (
									<option value={item.id} key={item.id}>
										{item.name}
									</option>
								))}
							</select>
						</div>

						{/* <div className='description mb-5 mt-3'>
							<span>tavsif kiriting</span>
							<Textarea
								className='w-[600px] mt-3 mb-3'
								label='tavsif kiriting'
							/>
						</div> */}
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
