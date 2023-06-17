import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Root from './root';
import LoginPage from '../pages/LoginPage';
import { RequireAuth } from './require.auth';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <RequireAuth><HomePage /></RequireAuth>
			},
			{
				path: '/home',
				element: <RequireAuth><HomePage /></RequireAuth>
			},
			{
				path: 'login',
				element: <LoginPage />
			},
		]
	}
]);