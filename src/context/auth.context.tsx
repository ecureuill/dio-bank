import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { IUser } from '../utils/interfaces';
import data from '../services/users.json';

interface IAuthContext {
	authenticated: boolean
	loading: boolean,
	user: IUser | null,
	signIn: (email: string, password: string) => Promise<boolean>,
	signOut: () => void,
	updateUser: (arg: {[key: string]: any}) => void,
	error: any
}


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({children}: PropsWithChildren): JSX.Element => {
	const [user, setUser] = useState<IUser|null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() =>{
		const email = localStorage.getItem('@APP:user');
		
		if(email !== null){

			const user = data.users.find(user => user.email === email);
			if(user === undefined)
			{
				setError('Unexpected error');
				setLoading(false);
			}
			else {
				setUser(user);
				setLoading(false);
			
				setTimeout(() => {
					signOut();
				}, 120000);
			}
		}
		else
		{
			setLoading(false);
		}
	}, []);

	const signIn = async (email: string, password: string) => {
		
		setError('');

		const user = data.users.find(user => user.email === email);
		if(user === undefined)
		{
			setError('Wrong credentials');
			return false;
		}


		if(user.password === password)
		{
			localStorage.setItem('@APP:user', user.email );
			setUser(user);

			setTimeout(() => {
				signOut();
			}, 120000);
			
			return true;
		}
		else
		{
			setError('Wrong credentials');
			return false;
		}
	};

	const signOut = () => {
		// API.defaults.headers['Authorization'] = null;
		localStorage.removeItem('@APP:user');
		setUser(null);
	};

	const updateUser = (arg: {[key: string]: any}) => {
		setUser({...user!, ...arg});
	};
	
	return (
		<AuthContext.Provider value={{
			authenticated: !!user, updateUser, loading, user, signIn, signOut, error
		}}>
			{children}
		</AuthContext.Provider>
	);
};