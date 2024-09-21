import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Header } from './components/Header';
import { DefaultLayout } from './DefaultLayout';
import { Login } from './views/Login';
import { Register } from './views/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout/>,
		children: 
		[
			{path: '/login', element: <Login/>},
			{path: 'register', element: <Register/>}
		]
	}
])
export default router;