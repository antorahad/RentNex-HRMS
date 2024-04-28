import { FiUserPlus } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdAttachEmail, MdOutlineAddHomeWork } from "react-icons/md";
import { RiUserSearchLine } from "react-icons/ri";
import { SlCalculator } from "react-icons/sl";
import { TbHomeSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle }) => {
    return (
        <div className={`bg-bodyColor text-white font-bold w-52 fixed z-10 min-h-screen overflow-y-auto ${toggle ? 'block' : 'hidden'}`} style={{ maxHeight: "calc(100vh - 4rem)", scrollbarWidth: "thin" }}>
            <ul className="p-3 mt-20">
                {/* Sidebar content */}
                <li className="py-1">
                    <Link to={'/home'} className="flex items-center gap-2 hover:bg-primeColor p-3 rounded-md">
                        <GoHome size={20} />
                        Home
                    </Link>
                </li>
                <li className="py-1">
                    <Link to={'/addhouse'} className="flex items-center gap-2 hover:bg-primeColor p-3 rounded-md">
                        <MdOutlineAddHomeWork size={20} />
                        Add House
                    </Link>
                </li>
                <li className="py-1">
                    <Link to={'/houselist'} className="flex items-center gap-2 hover:bg-primeColor p-3 rounded-md">
                        <TbHomeSearch size={20} />
                        House List
                    </Link>
                </li>
                <li className="py-1">
                    <Link to={'/addteant'} className="flex items-center gap-2 hover:bg-primeColor p-3 rounded-md">
                        <FiUserPlus size={20} />
                        Add Teant
                    </Link>
                </li>
                <li className="py-1">
                    <Link className="flex items-center gap-2 hover:bg-primeColor p-3 rounded-md">
                        <RiUserSearchLine size={20} />
                        Teant Record
                    </Link>
                </li>
                <li className="py-1">
                    <Link className="flex items-center gap-2 hover:bg-primeColor p-3 rounded-md">
                        <SlCalculator size={20} />
                        Bill Calculator
                    </Link>
                </li>
                <li className="py-1">
                    <Link className="flex items-center gap-2 hover:bg-primeColor p-3 rounded-md">
                        <IoDocumentAttachOutline size={20} />
                        Bill Record
                    </Link>
                </li>
                <li className="py-1">
                    <Link className="flex items-center gap-2 hover:bg-primeColor p-3 rounded-md">
                        <MdAttachEmail size={20} />
                        Send Bill
                    </Link>
                </li>
            </ul>

        </div>
    );
};

export default Sidebar;
