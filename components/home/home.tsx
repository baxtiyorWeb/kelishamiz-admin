import CardsProudct from '../cards_view/card_product';
import CardProfit from '../cards_view/card_profit';
import CardUsers from '../cards_view/card_users';
import CardView from '../cards_view/card_view';
import HomeTableData from './homeDataTable';

type Props = {
	props: React.ReactNode;
};

const Home = (props: Props) => {
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
				<HomeTableData />
			</div>
		</div>
	);
};

export default Home;
