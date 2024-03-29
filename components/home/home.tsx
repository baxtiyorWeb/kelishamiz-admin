'use client';
import { message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import CardsProudct from '../cards_view/card_product';
import CardProfit from '../cards_view/card_profit';
import CardUsers from '../cards_view/card_users';
import CardView from '../cards_view/card_view';
import ChartComponent from './chart/ChartComponent';
import HomeTableData from './homeDataTable';
const Home = () => {
	const router = useRouter();
	const getUser = async () => {
		try {
			const response = await axios.get(
				'http://95.130.227.131:8080/api/v1/category/user/1',
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						'Content-Type': 'application/json',
					},
				}
			);
			if (response.status === 200) {
				message.success('logged in');
			} else {
				message.success('please login ');
			}
		} catch (error) {
			// router.push('/login');
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className='h-screen '>
			<div className='p-4 flex justify-evenly'>
				<div className='flex justify-center items-center w-full gap-4'>
					<CardView />
					<CardUsers />
					<CardsProudct />
					<CardProfit />
				</div>
			</div>
			<div className='table-data'>
				<ChartComponent />
				<HomeTableData />
			</div>
		</div>
	);
};

export default Home;
