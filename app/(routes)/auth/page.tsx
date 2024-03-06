'use client';
import axios from 'axios';
import { useState } from 'react';
const Login = () => {
	const [login, setLogin] = useState({
		username: '',
		password: '',
	});
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
			}
		} catch (error: unknown) {
			// console.log(error.message);
		} finally {
		}
	};

	return (
		<div>
			<input
				type='text'
				placeholder='enter your name'
				onChange={e => setLogin({ ...login, username: e.target.value })}
			/>
			<input
				type='text'
				placeholder='enter your password'
				onChange={e => setLogin({ ...login, password: e.target.value })}
			/>
			<button onClick={() => loginNameAndPassword()}>yuborish</button>
		</div>
	);
};

export default Login;
