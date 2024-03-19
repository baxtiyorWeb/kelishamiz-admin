'use client';
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Login = () => {
	const navigate = useRouter();
	const [login, setLogin] = useState({
		username: '',
		password: '',
	});
	// const {user} = useContext(UserContext)
	const loginNameAndPassword = async () => {
		try {
			const { data, status } = await axios.post(
				'http://95.130.227.131:8080/api/v1/authority/sign-in',
				{
					username: login.username,
					password: login.password,
				}
			);

			localStorage.setItem('accessToken', data.data.accessToken);
			localStorage.setItem('refreshToken', data.data.refreshToken);

			if (status === 200) {
				alert('login successfully');
				navigate.push('/');
			}
		} catch (error: unknown) {
			// console.log(error.message);
		} finally {
		}
	};

	return (
		<div>
			<div className='fixed w-full h-[100vh] top-0 left-0 bg-white z-[9999] flex justify-center items-center flex-col'>
				<div className='w-[60%] h-[60vh] border flex justify-center items-center flex-col'>
					<Input
						type='text'
						label='enter your name'
						className='w-[50%] mb-5'
						onChange={e => setLogin({ ...login, username: e.target.value })}
					/>
					<Input
						type='text'
						label='enter your password '
						className='w-[50%] mb-5'
						onChange={e => setLogin({ ...login, password: e.target.value })}
					/>
					<Button onClick={() => loginNameAndPassword()}>yuborish</Button>
				</div>
			</div>
		</div>
	);
};

export default Login;
