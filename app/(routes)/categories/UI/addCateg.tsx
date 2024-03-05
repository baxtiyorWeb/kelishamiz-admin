import React, { Dispatch, SetStateAction, useState } from 'react';

type ContainerProps = {
	closeShow: Dispatch<SetStateAction<boolean>>;
};

const DynamicInput: React.FunctionComponent<ContainerProps> = () => {
	const [inputs, setInputs] = useState([{ type: 'text', value: '' }]);
	const [title, setTitle] = useState('');
	const addInput = () => {
		if (inputs.length >= 15) {
			alert('miqdordan oshib ketdi');
		} else {
			setInputs([...inputs, { type: 'text', value: '' }]);
		}
	};

	const handleInputChange = (index: number, value: string) => {
		const newInputs = [...inputs];
		newInputs[index].value = value;
		setInputs(newInputs);

		console.log(newInputs);
	};

	const handleTypeChange = (index: number, type: string) => {
		const newInputs = [...inputs];
		newInputs[index].type = type;
		setInputs(newInputs);
	};

	return (
		<div>
			<h1 className={'text-3xl font-bold text-center p-4 border-b-2  '}>
				Create Categories
			</h1>
			<div>
				<div className='flex justify-center items-center flex-col'>
					<h2 className={'text-1xl font-bold text-center p-4'}>
						Categories Name
					</h2>
					<input
						placeholder="kategoriya qo'shing"
						type='text'
						className={'border w-[30%] p-2 rounded-xl'}
					/>
				</div>
				<div className={'categ_inp flex gap-3 justify-center p-5'}>
					<input type='text' placeholder={'Rus'} />
					<input type='text' placeholder={'Uzb'} />
					<input type='text' placeholder={'Eng'} />
				</div>
			</div>
			<div
				className={
					'border grid grid-cols-5 flex-col justify-center items-center p-5 gap-4 '
				}
			>
				{inputs.map((input, index) => (
					<div key={index}>
						<input
							className={'border w-[300px] p-2 rounded-xl'}
							type={input.type === 'boolean' ? 'checkbox' : input.type}
							value={input.value}
							onChange={e => handleInputChange(index, e.target.value)}
							placeholder={`Field-${index + 1}`}
						/>
						<select
							className={'border w-[300px] p-2 px-3 rounded-xl'}
							value={input.type}
							onChange={e => handleTypeChange(index, e.target.value)}
						>
							<option value='text'>Text</option>
							<option value='number'>Number</option>
							<option value='boolean'>Boolean</option>
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
	);
};

export default DynamicInput;
