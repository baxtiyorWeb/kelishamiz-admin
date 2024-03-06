'use client';
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react';

export type User = { name: string; password: string };

export interface UserContextInterface {
	user: User;
	setUser: Dispatch<SetStateAction<User>>;
}

const defaultState = {
	user: {
		name: '',
		password: '',
	},
	setUser: (user: User) => {},
} as UserContextInterface;

export const UserContext = createContext(defaultState);

type UserProvideProps = {
	children: ReactNode;
};

function UserProvider({ children }: UserProvideProps) {
	const [user, setUser] = useState<User>({
		name: '',
		password: '',
	});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
export default UserProvider;
