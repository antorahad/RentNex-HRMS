import { FaEye } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { PiPhoneCallBold } from "react-icons/pi";
import { TbUserEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

const TeantRecordData = ({ item, handleDeleteTeant }) => {

    const { _id, photo, name, contact } = item

    return (
        <div className="card card-compact bg-slate-50 shadow-lg rounded-lg">
            <figure><img src={photo} alt="Teant image" className="h-52 w-full object-cover object-center" /></figure>
            <div className="card-body space-y-2 text-sm">
                <p className="flex items-center gap-1 line-clamp-1"><span className="flex items-center gap-1"><FiUser />Name:</span>{name}</p>
                <p className="flex items-center gap-1"><span className="flex items-center gap-1"><PiPhoneCallBold />Contact:</span>{contact}</p>
                <div className="flex items-center gap-2">
                    <Link to={`/viewteant/${_id}`} className="text-success">
                        <FaEye />
                    </Link>
                    <Link to={`/updateteant/${_id}`} className="text-warning">
                        <TbUserEdit />
                    </Link>
                    <button onClick={() => handleDeleteTeant(_id)} className="text-error"><FaRegTrashCan /></button>
                </div>
            </div>
        </div>
    );
};

export default TeantRecordData;