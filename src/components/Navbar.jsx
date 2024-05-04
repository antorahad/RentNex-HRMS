import { Link } from "react-router-dom";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import useAuth from "../hook/useAuth";
import { useEffect, useState } from "react";

const Navbar = ({ handleToggle, toggle }) => {
    const { user, logOut } = useAuth();

    const [userInfo, setUserInfo] = useState([]);
    const userURL = `https://hrms-server-snowy.vercel.app/users?email=${user?.email}`;
    useEffect(() => {
        fetch(userURL)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [userURL])

    const handleLogOut = () => {
        logOut();
    };

    return (
        <div className="bg-white shadow-sm w-full fixed z-50">
            <div className="navbar px-5 py-3">
                <div className="navbar-start flex items-center gap-3">
                    <Link to="/home" className="flex items-center gap-2 text-2xl font-bold">
                        <IoHomeOutline />
                        <h1>Rent<span className="text-primeColor">Nex</span></h1>
                    </Link>
                    <button onClick={handleToggle} className="bg-bodyColor text-white py-2 px-3 rounded-lg flex items-center justify-center border-none outline-none">
                        {toggle ? <RiMenuUnfoldLine size={20} /> : <RiMenuFoldLine size={20} />}
                    </button>
                </div>
                <div className="navbar-end flex items-center gap-3">
                    <h1></h1>
                    <div className="avatar">
                        <div className="w-12 rounded-md">
                            {userInfo.map((item) => (
                                <img key={item._id} src={item.photo ? item.photo : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} alt="User Avatar" />
                            ))}
                        </div>
                    </div>
                    <button onClick={handleLogOut} className="btn btn-error text-white rounded-md">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
