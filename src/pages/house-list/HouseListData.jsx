import { Link } from "react-router-dom";

const HouseListData = ({item, handleDeleteHouse}) => {
    const {_id, name, contact, house, area, floor, unit, address} = item;
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r">{name}</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{contact}</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{house}</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{area} SFT</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{floor} Floor</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{unit} Unit</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{address}</td>
            <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                <Link to={`/updatehouse/${_id}`} className="text-warning">Edit</Link>
                <Link onClick={() => handleDeleteHouse(_id)} className="text-error">Delete</Link>
            </td>
        </tr>
    );
};

export default HouseListData;