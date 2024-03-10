'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { FaHome, FaUser } from 'react-icons/fa';
import { FaSackDollar } from 'react-icons/fa6';
import { HiSpeakerphone } from 'react-icons/hi';
import { IoSettings } from 'react-icons/io5';
import { MdNewspaper } from 'react-icons/md';
import { TfiLayoutSliderAlt } from 'react-icons/tfi';

type Props = {};

const Navbar = (props: Props) => {
	const pathname = usePathname();
	return (
		<div
			className={
				'navbar h-screen fixed top-0 left-0 flex flex-col bg-bgColor py-4 w-[300px] mt-[70px]'
			}
		>
			<Link
				className={
					pathname === '/'
						? 'p-4 font-bold text-white flex items-center bg-blue-500/100 text-[18px]'
						: 'p-4 font-bold text-white flex items-center  text-[18px]'
				}
				href={'/'}
			>
				{' '}
				<FaHome className='text-2xl mr-4' /> Bosh sahifa
			</Link>
			<Link
				className={
					pathname === '/users'
						? 'p-4 font-bold text-white flex items-center bg-blue-500/100 text-[18px]'
						: 'p-4 font-bold text-white flex items-center  text-[18px]'
				}
				href={'/users'}
			>
				{' '}
				<FaUser className='text-2xl mr-4' /> Foydalanuvchilar
			</Link>
			<Link
				className={
					pathname === '/announcements'
						? 'p-4 font-bold text-white flex items-center bg-blue-500/100 text-[18px]'
						: 'p-4 font-bold text-white flex items-center  text-[18px]'
				}
				href={'/announcements'}
			>
				{' '}
				<MdNewspaper className='text-2xl mr-4' />
				E&apos;lonlar
			</Link>
			<Link
				className={
					pathname === '/categories'
						? 'p-4 font-bold text-white flex items-center bg-blue-500/100 text-[18px]'
						: 'p-4 font-bold text-white flex items-center  text-[18px]'
				}
				href={'/categories'}
			>
				{' '}
				<BsMenuButtonWideFill className='text-2xl mr-4' />
				Kategorialar
			</Link>
			<Link
				className={
					pathname === '/properties'
						? 'p-4 font-bold text-white flex items-center bg-blue-500/100 text-[18px]'
						: 'p-4 font-bold text-white flex items-center  text-[18px]'
				}
				href={'/properties'}
			>
				{' '}
				<BsMenuButtonWideFill className='text-2xl mr-4' />
				xususiyatlar
			</Link>
			<Link
				className={
					pathname === '/payment'
						? 'p-4 font-bold text-white flex items-center bg-blue-500/100 text-[18px]'
						: 'p-4 font-bold text-white flex items-center  text-[18px]'
				}
				href={'/payment'}
			>
				{' '}
				<FaSackDollar className='text-2xl mr-4' />
				To&apos;lovlar
			</Link>
			<Link
				className={
					pathname === '/advertising'
						? 'p-4 font-bold text-white flex items-center bg-blue-500/100 text-[18px]'
						: 'p-4 font-bold text-white flex items-center  text-[18px]'
				}
				href={'/advertising'}
			>
				{' '}
				<HiSpeakerphone className='text-2xl mr-4' />
				Reklama
			</Link>
			<Link
				className={
					pathname === '/banner'
						? 'p-4 font-bold text-white flex items-center bg-blue-500/100 text-[18px]'
						: 'p-4 font-bold text-white flex items-center  text-[18px]'
				}
				href={'/banner'}
			>
				{' '}
				<TfiLayoutSliderAlt className='text-2xl mr-4' />
				Banerlar
			</Link>
			<Link
				className={
					pathname === '/settings'
						? 'p-4 font-bold text-white flex items-center bg-blue-500/100 text-[18px]'
						: 'p-4 font-bold text-white flex items-center  text-[18px]'
				}
				href={'/settings'}
			>
				<IoSettings className='text-2xl mr-4' />
				Sozlamalar
			</Link>
		</div>
	);
};

export default Navbar;
