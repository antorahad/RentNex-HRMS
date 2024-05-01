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
import TeantRecordLayout from "../pages/teant-record/TeantRecordLayout";
import ViewTeantLayout from "../pages/teant-record/ViewTeantLayout";
import TeantUpdateLayout from "../pages/teant-record/TeantUpdateLayout";
import AddBillLayout from "../pages/add-bill/AddBillLayout";
import BillRecordLayout from "../pages/bill-record/BillRecordLayout";


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
                element: <PrivateProvider><AddTeantLayout/></PrivateProvider>,
            },
            {
                path: '/teantrecord',
                element: <PrivateProvider><TeantRecordLayout/></PrivateProvider>
            },
            {
                path: '/viewteant/:id',
                element: <PrivateProvider><ViewTeantLayout/></PrivateProvider>,
                loader: ({params}) => fetch(`http://localhost:3000/teants/${params.id}`)
            },
            {
                path: '/updateteant/:id',
                element: <PrivateProvider><TeantUpdateLayout/></PrivateProvider>,
                loader: ({params}) => fetch(`http://localhost:3000/teants/${params.id}`)
            },
            {
                path: '/addbill',
                element: <PrivateProvider><AddBillLayout/></PrivateProvider>
            },
            {
                path: '/billrecord',
                element: <PrivateProvider><BillRecordLayout/></PrivateProvider>
            }
        ]
    },
]);

export default router