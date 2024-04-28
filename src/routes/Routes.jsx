import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import HLayout from "../pages/home/HLayout";
import PrivateProvider from "../private/PrivateProvider";
import UpdateProfile from "../pages/home/UpdateProfile";
import AddProperty from "../pages/add-property/AddProperty";
import HouseListLayout from "../pages/house-list/HouseListLayout";
import UpdateHouse from "../pages/house-list/UpdateHouse";
import AddTeantLayout from "../pages/add-teant/AddTeantLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/home',
                element: <PrivateProvider><HLayout/></PrivateProvider>
            },
            {
                path: '/updateprofile/:id',
                element: <PrivateProvider><UpdateProfile/></PrivateProvider>,
                loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
            },
            {
                path: '/addhouse',
                element: <PrivateProvider><AddProperty/></PrivateProvider>
            },
            {
                path: '/houselist',
                element: <PrivateProvider><HouseListLayout/></PrivateProvider>
            },
            {
                path: '/updatehouse/:id',
                element: <PrivateProvider><UpdateHouse/></PrivateProvider>,
                loader: ({params}) => fetch(`http://localhost:3000/houses/${params.id}`)
            },
            {
                path: '/addteant',
                element: <AddTeantLayout/>,
            }
        ]
    },
]);

export default router