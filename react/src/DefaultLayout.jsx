import { Navigate, Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { useStateConText } from "./contexts/ContextProvider"

export const DefaultLayout = () => {
	const {user, token} = useStateConText()

	if(!token) {
		return <Navigate to={'/login'}/>
	}
	

	return (
		<>
			<Header/>
			<Outlet/>
		</>
	)
}