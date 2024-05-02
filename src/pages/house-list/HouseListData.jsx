import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HouseListData = ({item, handleDeleteHouse}) => {
    const {_id, name, contact, house, area, floor, unit, address} = item;
    return (
        <tr>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{name}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{contact}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{house}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{area}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{floor}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{unit}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{address}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap flex items-center gap-2">
                <Link to={`/updatehouse/${_id}`} className="text-warning"><FaRegEdit /></Link>
                <Link onClick={() => handleDeleteHouse(_id)} className="text-error"><FaRegTrashCan /></Link>
            </td>
        </tr>
    );
};

export default HouseListData;