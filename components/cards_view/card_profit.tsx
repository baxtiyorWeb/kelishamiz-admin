import Link from 'next/link';
import { CgDollar } from 'react-icons/cg';
type Props = {};

const CardProfit = (props: Props) => {
	return (
		<Link
			href={'payment'}
			className='hover:shadow-none transition-all duration-500 w-[346px] h-[172px] bg-white shadow-xl rounded-lg cursor-pointer'
		>
			<div>
				<span className='flex items-center m-5 justify-center w-14 h-14 rounded-full bg-[#eff2f7]'>
					<CgDollar className='text-2xl ' />
				</span>
				<div className='flex flex-col px-5'>
					<span className='text-2xl text-green-500'>45,00000 so&apos;m</span>
					<span className='text-[14px]'>Ko&apos;rilgan tovarlar</span>
				</div>
			</div>
		</Link>
	);
};

export default CardProfit;
