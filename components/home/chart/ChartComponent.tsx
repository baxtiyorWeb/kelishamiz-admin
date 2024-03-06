import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});

const ChartComponent = () => {
	const OptionsChartLine = {
		xaxis: {
			categories: [
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
			],
		},
		yaxis: {
			title: {
				text: '$ (thousands)',
			},
		},
	};

	const SeriesChartLine = [
		{
			name: 'Net Profit',
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
		},
		{
			name: 'Revenue',
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
		},
		{
			name: 'Free Cash Flow',
			data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
		},
	];
	return (
		<div className='bg-white mb-3 mt-3'>
			<Chart
				width={'98%'}
				height={500}
				options={OptionsChartLine}
				series={SeriesChartLine}
			/>
		</div>
	);
};

export default ChartComponent;
