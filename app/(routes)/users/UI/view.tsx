import { useUser } from '@@/store/useUser';
import { User } from '@nextui-org/react';
import React, { Dispatch, SetStateAction } from 'react';
import { FaMobile, FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
type ContainerProps = {
	onClose: Dispatch<SetStateAction<boolean>>;
};

const ViewUser: React.FunctionComponent<ContainerProps> = ({ onClose }) => {
	const { user } = useUser(state => state.user);
	const [showPassword, setShowPassword] = React.useState(false);
	return (
		<div className={'h-full'}>
			<div className={'w-[1200px]  relative pt-5 mx-auto h-full '}>
				<div className={'w-full flex flex-col justify-center items-center'}>
					<User
						className={'text-3xl'}
						name={user.firstName + ' ' + user.lastName}
						description={user.addressForm.address}
						avatarProps={{
							src: '',
							className: 'w-[150px] h-[150px] text-2xl uppercase',
						}}
					/>
					<div className={'user_info_view grid grid-cols-2 p-4 gap-4 my-14'}>
						<h2 className={'p-2 w-[400px]'}>
							<FaUser />
							<span>Ismi: </span>
							{user.firstName}
						</h2>
						<h2 className={'p-2 w-[400px]'}>
							<FaUser /> <span>Familyasi: </span> {user.lastName}
						</h2>
						<h2 className={'p-2 w-[400px]'}>
							<FaUser />
							<span>UserName:</span> {user.username}
						</h2>
						<h2
							onMouseEnter={() => setShowPassword(!showPassword)}
							onMouseLeave={() => setShowPassword(!showPassword)}
							className={'p-2 w-[400px]'}
						>
							<RiLockPasswordFill />
							<span>Password:</span>{' '}
							{showPassword ? user.password : '**********'}
						</h2>
						<h2 className={'p-2 w-[400px]'}>
							<MdEmail />
							<span>Email:</span> {user.email}
						</h2>
						<h2 className={'p-2 w-[400px]'}>
							<FaMobile />
							<span>Email:</span> + {user.phone}
						</h2>
						<h2 className={'p-2 w-[400px]'}>
							<FaMapMarkerAlt />
							<span>Yashash manzili:</span> {user.addressForm.address}
						</h2>
					</div>
				</div>
				<div className={'absolute bottom-0 p-4 justify-end flex gap-3 w-full '}>
					<button className={'bg-yellow-300 p-2 rounded-lg  w-[150px]'}>
						Edit
					</button>
					<button
						className={
							'bg-red-500 text-white font-bold p-2 rounded-lg w-[150px]'
						}
						onClick={() => onClose(false)}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default ViewUser;
