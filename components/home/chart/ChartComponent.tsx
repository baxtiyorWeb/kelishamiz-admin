'use client';
import {
	ArcElement,
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	PointElement,
	Tooltip,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Register ChartJS components using ChartJS.register
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	ArcElement,
	Legend,
	Tooltip
);
const ChartComponent = () => {
	const data = {
		labels: [
			'foydanalanuvchilar',
			'mahsulotlar',
			"ro'yxatdagilar",
			'sotilganlar',
			'foyda',
			'zarar',
		],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	};
	return (
		<div className=' h-[50vh] flex justify-between items-center'>
			<Bar
				width={750}
				height={400}
				data={{
					labels: [
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'Jun',
						'Jul',
						'Aug',
						'Sep',
						'Oct',
						'Nov',
						'Dec',
					],
					datasets: [
						{
							data: [30, 15, 34, 12, 35, 56, 87, 88, 98, 100, 10, 150],
							backgroundColor: '#5A7BFC',
							hoverBackgroundColor: '#ADBDFE',
							label: "ro'yxatdan o'tishlar",
						},
					],
				}}
			/>
			<Pie data={data} />
		</div>
	);
};

export default ChartComponent;
