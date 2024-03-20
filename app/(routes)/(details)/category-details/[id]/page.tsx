'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
	const params = useParams<{ id: string }>();
	const [getCategoryId, setGetCategoryId] = useState();

	const getCategoriesWithID = async () => {
		const response = await axios.get(
			`http://95.130.227.131:8080/api/v1/category/${params.id}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);

		const user = response.data;
		console.log(user);
		setGetCategoryId(user);
	};

	useEffect(() => {
		getCategoriesWithID();
	}, []);

	return (
		<div>
			<h1>detail ID: {params.id}</h1>

			<div>{getCategoryId?.data?.name}</div>
		</div>
	);
};

export default Page;
