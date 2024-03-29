'use client';
import Crud from '@@/components/advertising_CRUD/crud';
import AddProperties from '@@/components/properties-controller/addProperties';
import UpdateProperties from '@@/components/properties-controller/updateProperties';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';

const Properties = () => {
	const [showAddCateg, setShowAddCateg] = useState(false);

	const [showAddCategUpdate, setShowAddCategUpdate] = useState(false);
	const [updateProperties, setUpdateProperties] = useState();
	const [updateId, setUpdateId] = useState();
	const showElement = (): void => {
		setShowAddCateg(!showAddCateg);

		document.body.style.overflow = 'hidden';
		if (showAddCateg === true) {
			document.body.style.overflow = 'unset';
		}
	};
	const showElementUpdate = (): void => {
		setShowAddCategUpdate(!showAddCategUpdate);

		document.body.style.overflow = 'hidden';
		if (showAddCategUpdate === true) {
			document.body.style.overflow = 'unset';
		}
	};

	return (
		<div className='min-h-screen'>
			<h1 className={'text-3xl font-bold text-gray-600 '}>Xususiyatlar</h1>
			<Crud
				open={showElement}
				openUpdate={() => showElementUpdate()}
				setUpdateId={setUpdateId}
				setUpdateProperties={setUpdateProperties}
			/>
			<div
				className={
					showAddCateg
						? 'w-full h-[100vh] bg-white shadow-2xl transition-transform translate-y-[0%] fixed bottom-0 left-0 z-[130]'
						: 'w-full h-[0vh] translate-y-[120%] transition-transform fixed bottom-0 left-0 z-[130]'
				}
			>
				<div className='flex justify-end items-center p-3'>
					<MdClose
						className='text text-2xl cursor-pointer'
						onClick={showElement}
					/>
				</div>
				<AddProperties />
			</div>
			<div
				className={
					showAddCategUpdate
						? 'w-full h-[100vh] bg-white shadow-2xl transition-transform translate-y-[0%] fixed bottom-0 left-0 z-[130]'
						: 'w-full h-[0vh] translate-y-[120%] transition-transform fixed bottom-0 left-0 z-[130]'
				}
			>
				<div className='flex justify-end items-center p-3'>
					<MdClose
						className='text text-2xl cursor-pointer'
						onClick={showElementUpdate}
					/>
				</div>
				<UpdateProperties id={updateId} updateProperties={updateProperties} />
			</div>
		</div>
	);
};

export default Properties;
