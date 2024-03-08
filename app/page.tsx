'use client';
import Home from '@@/components/home/home';
import UserProvider from '@@/context/UserContext';
export default function page() {
	return (
		<>
			<UserProvider>
				<Home />
			</UserProvider>
		</>
	);
}
