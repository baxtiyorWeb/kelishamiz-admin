'use client';
import AddCateg from '@@/app/(routes)/categories/UI/addCateg';
import { categoriesMenu } from '@@/app/(routes)/categories/data';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import CategoryData from './category-table';
import UpdateProperties from './category-update';

export default function Categories() {
	const [showAddCateg, setShowAddCateg] = React.useState(false);
	const [updateShowAddCateg, setUpdateShowAddCateg] = React.useState(false);
	const [updateCategories, setUpdateCategories] = useState();
	const [updateId, setUpdateId] = useState<any>();
	const showElement = (): void => {
		setShowAddCateg(!showAddCateg);
		document.body.style.overflow = 'hidden';
		if (showAddCateg === true) {
			document.body.style.overflow = 'unset';
		}
	};
	const showElementUpdate = (): void => {
		setUpdateShowAddCateg(!updateShowAddCateg);
		document.body.style.overflow = 'hidden';
		if (showAddCateg === true) {
			document.body.style.overflow = 'unset';
		}
	};

	console.log(updateCategories);

	return (
		<>
			<div className={'flex justify-between  px-5 py-6'}>
				<h1 className={'text-3xl font-bold text-gray-600 '}>Kategoriyalar</h1>
				<button
					onClick={() => showElement()}
					className={
						'addCateg flex items-center bg-blue-700 gap-2 px-5 py-2 text-white font-bold rounded-md '
					}
				>
					<FiPlusCircle /> Add Categories{' '}
				</button>
			</div>
			<CategoryData
				id={updateId}
				updateCategories={updateCategories}
				openUpdate={() => showElementUpdate()}
				setUpdateId={setUpdateId}
				setUpdateCategories={setUpdateCategories}
			/>
			{/* <CategoryDataTable /> */}
			<div className='grid  grid-cols-5 justify-items-center gap-3 p-6'>
				{categoriesMenu.map(item => {
					return (
						// eslint-disable-next-line react/jsx-key
						<Link
							key={item.id}
							href={`categories/${item.categoriesName.split(' ').join('-')}`}
						>
							<div
								className='relative flex w-full flex-none flex-col shadow-2xl p-4'
								id='1'
							>
								<div className='relative shadow-black/5 shadow-none rounded-large'>
									<div className='relative overflow-hidden rounded-inherit rounded-large'>
										<img
											src={item.icons}
											className='relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none object-cover transform transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large aspect-square w-full hover:scale-110'
											alt={item.categoriesName}
											data-loaded='true'
										/>
									</div>
									<img
										src={item.icons}
										className='absolute z-0 inset-0 w-full h-full object-cover filter blur-lg scale-105 saturate-150 opacity-30 translate-y-1 rounded-large'
										alt={item.categoriesName}
										aria-hidden='true'
										data-loaded='true'
									/>
								</div>
								<div className='mt-1 flex flex-col gap-2 px-1'>
									<div className='flex items-start justify-between gap-1'>
										<h3 className='text-1xl  font-bold text-default-700'>
											{item.categoriesName}
										</h3>
										<div className='flex items-center gap-1'></div>
									</div>
									<p className='text-small text-default-500'>
										{item.count} E&apos;lonlar bor
									</p>
								</div>
							</div>
						</Link>
					);
				})}
			</div>

			<div
				className={
					showAddCateg
						? 'w-full h-[100vh] bg-white shadow-2xl transition-transform translate-y-[0%] fixed bottom-0 left-0 z-[99]'
						: 'w-full h-[0vh] translate-y-[120%] transition-transform fixed bottom-0 left-0 z-[999988]'
				}
			>
				<div className='flex justify-end items-center p-3'>
					<MdClose
						className='text text-2xl cursor-pointer'
						onClick={showElement}
					/>
				</div>
				<AddCateg />
			</div>
			<div
				className={
					updateShowAddCateg
						? 'w-full h-[100vh] bg-white shadow-2xl transition-transform translate-y-[0%] fixed bottom-0 left-0 z-[99]'
						: 'w-full h-[0vh] translate-y-[120%] transition-transform fixed bottom-0 left-0 z-[999988]'
				}
			>
				<div className='flex justify-end items-center p-3'>
					<MdClose
						className='text text-2xl cursor-pointer'
						onClick={showElement}
					/>
				</div>
				<UpdateProperties id={updateId} updateCategories={updateCategories} />
			</div>
		</>
	);
}
