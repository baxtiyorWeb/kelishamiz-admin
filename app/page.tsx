'use client';
import Home from '@@/components/home/home';
import UserProvider, { UserContext } from '@@/context/UserContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
export default function page() {
	const { user } = useContext(UserContext);
	const navigate = useRouter();
	useEffect(() => {
		try {
			const data = axios
				.get('http://kelishamiz.uz/api/v1/user/1', {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
					},
				})
				.then(res => console.log(res.data))
				.catch(error => {
					console.log(error);

					// navigate.push('/login');
				});
		} catch (error) {
			console.log(error);
		} finally {
		}
	}, []);

	return (
		<>
			<UserProvider>
				<Home />
			</UserProvider>
		</>
	);
}
