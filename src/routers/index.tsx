import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { router } from './auth.router';
import { onbrouter } from './onboard.router';

const Router = (): JSX.Element => {
	
	const { authenticated } = useContext(AuthContext);

	if(authenticated)
		return (
			<RouterProvider router={router} />
		);

	return (
		<RouterProvider router={onbrouter} />
	);

};

export default Router;