import Image from 'next/image';

import Link from 'next/link';
import Search from './search';
import UserPanel from './user';
type Props = {};

const Header = (props: Props) => {
	return (
		<div className='flex justify-between items-center gap-6 z-50 h-[70px] fixed top-0 left-0 w-full bg-[#fff]'>
			<Link href='/'>
				<Image
					src={'/icons/logo.svg'}
					width={300}
					height={100}
					alt=''
					className='mr-28 px-5'
				/>
			</Link>
			<Search />

			<UserPanel />
		</div>
	);
};

export default Header;
