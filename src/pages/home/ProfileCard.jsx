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
        <div className="card shadow-md bg-gray-100">
            <div className="card-body text-base font-bold text-[#222831]">
                <h1 className="text-3xl">Profile Card</h1>
                <div className="avatar">
                    <div className="w-20 rounded-xl">
                        <img src={photo ? photo : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                    </div>
                </div>
                <p className="flex items-center gap-1"><span className="flex items-center gap-1 text-[#40A2E3]"><FiUser />Name:</span>{name}</p>
                <p className="flex items-center gap-1"><span className="flex items-center gap-1 text-[#40A2E3]"><MdOutlineAlternateEmail />Email:</span>{email}</p>
                <p className="flex items-center gap-1"><span className="flex items-center gap-1 text-[#40A2E3]"><PiPhoneCallBold />Contact:</span>{contact}</p>
                <p className="flex items-center gap-1"><span className="flex items-center gap-1 text-[#40A2E3]"><HiOutlineLocationMarker />Location:</span>{address}</p>
                <Link to={`/updateprofile/${_id}`} className="flex items-center justify-end gap-1 text-[#40A2E3] text-sm font-bold">
                    <TbUserEdit /> Edit Profile
                </Link>
            </div>
        </div>
    );
};

export default ProfileCard;