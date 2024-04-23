import { Outlet } from "react-router-dom/dist";

const Layout = () => {
    return (
        <div className="text-bodyColor bg-white font-googleFont">
            <Outlet/>
        </div>
    );
};

export default Layout;