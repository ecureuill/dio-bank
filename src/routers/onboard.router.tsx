import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import OnBoardPage from '../pages/OnBoardPage';
import SignUpPage from '../pages/SignUpPage';

export const onbrouter = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: 'login',
				element: <LoginPage />
			},
			{
				path: 'signup',
				element: <SignUpPage />
			},
			{
				path: '',
				element: <OnBoardPage />
			},
		]
	}
]);