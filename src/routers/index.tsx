import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Root from './root';
import LoginPage from '../pages/LoginPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <HomePage />
			},
			{
				path: 'login',
				element: <LoginPage />
			},
		]
	}
]);