import { FiUser } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import { TbUserEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProfileCard = ({ item }) => {
    const {_id, photo, name, email, address, contact } = item;
    console.log(item)
    return (
        <div className="card bg-slate-50 shadow-lg rounded-lg">
            <div className="card-body text-sm font-bold text-bodyColor">
                <h1 className="text-2xl">Profile Card</h1>
                <div className="avatar">
                    <div className="w-28 rounded-lg">
                        <img src={photo ? photo : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                    </div>
                </div>
                <p className="flex items-center gap-1"><span className="flex items-center gap-1"><FiUser />Name:</span>{name}</p>
                <p className="flex items-center gap-1"><span className="flex items-center gap-1"><MdOutlineAlternateEmail />Email:</span>{email}</p>
                <p className="flex items-center gap-1"><span className="flex items-center gap-1"><PiPhoneCallBold />Contact:</span>{contact}</p>
                <p className="flex items-center gap-1"><span className="flex items-center gap-1"><HiOutlineLocationMarker />Location:</span>{address}</p>
                <Link to={`/updateprofile/${_id}`} className="flex items-center justify-end gap-1 hover:text-warning text-sm font-bold duration-300 ease-in-out">
                    <TbUserEdit /> Edit Profile
                </Link>
            </div>
        </div>
    );
};

export default ProfileCard;