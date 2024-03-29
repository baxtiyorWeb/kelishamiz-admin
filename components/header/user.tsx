'use client';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	User,
} from '@nextui-org/react';
function UserPanel() {
	return (
		<div className='flex items center gap-4'>
			<Dropdown placement='bottom-end'>
				<DropdownTrigger>
					<User
						className='w-[300px] text-gray-600 cursor-pointer'
						name='Soatov Xurshid'
						description='admin'
						avatarProps={{
							src: '/icons/user.jpg',
						}}
					/>
				</DropdownTrigger>
				<DropdownMenu aria-label='Profile Actions' variant='flat'>
					<DropdownItem key='profile' className='h-14 gap-2'>
						<p className='font-semibold'>Signed in as</p>
						<p className='font-semibold'>zoey@example.com</p>
					</DropdownItem>
					<DropdownItem key='settings'>My Settings</DropdownItem>
					<DropdownItem key='team_settings'>Team Settings</DropdownItem>
					<DropdownItem key='analytics'>Analytics</DropdownItem>
					<DropdownItem key='system'>System</DropdownItem>
					<DropdownItem key='configurations'>Configurations</DropdownItem>
					<DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
					<DropdownItem key='logout' color='danger'>
						Log Out
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
}

export default UserPanel;
