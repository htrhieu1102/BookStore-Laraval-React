import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Header } from './components/Header';
import { DefaultLayout } from './DefaultLayout';
import { Login } from './views/Login';
import { Register } from './views/Register';
import { Home } from './views/Home';
import { Detail } from './views/Detail';
import { User } from './views/User';
import { Category } from './views/Category';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout/>,
		children: 
		[
			{path: '/', element: <Home/>},
			{path: '/detail/:slug', element: <Detail/>},
			{path: '/login', element: <Login/>},
			{path: 'register', element: <Register/>},
			{ path: 'user', element: <User /> },
			{path: '/category/:slug', element: <Category/>}
		]
	}
])
export default router;