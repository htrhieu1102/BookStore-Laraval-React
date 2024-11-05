import {Admin, EditGuesser, ListGuesser, Menu, MenuItemLink, Resource, ShowGuesser} from "react-admin"
import {dataProvider} from './DataProvider'

export const AdminPage = () => {
    console.log(`${import.meta.env.VITE_API_BASE_URL}/api`);
    
    return (
        <Admin dataProvider={dataProvider} basename="/admin">
            <Resource name="articles" list={ListGuesser} />
        </Admin>
    )
}