import CardsProudct from '../cards_view/card_product';
import CardProfit from '../cards_view/card_profit';
import CardUsers from '../cards_view/card_users';
import CardView from '../cards_view/card_view';
import ChartComponent from './chart/ChartComponent';
import HomeTableData from './homeDataTable';
const Home = () => {
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
