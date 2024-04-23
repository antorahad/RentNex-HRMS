import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import HLayout from "../pages/home/HLayout";
import PrivateProvider from "../private/PrivateProvider";
import UpdateProfile from "../pages/home/UpdateProfile";
import AddProperty from "../pages/add-property/AddProperty";

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
                path: '/addproperty',
                element: <PrivateProvider><AddProperty/></PrivateProvider>
            }
        ]
    },
]);

export default router