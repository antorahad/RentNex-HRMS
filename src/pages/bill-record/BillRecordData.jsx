import { FaEye, FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BillRecordData = ({ item }) => {
    const { _id, name, contact, billingmonth, date, floor, total, billstatus } = item;
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap border-r">{billingmonth}</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{date}</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{name}</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{contact}</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{floor} Floor</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{total} TK</td>
            <td className="px-6 py-4 whitespace-nowrap border-r">{billstatus}</td>
            <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                <Link to={`/viewbill/${_id}`} className="text-success"><FaEye /></Link>
                <Link to={`/updatebill/${_id}`} className="text-warning"><FaRegEdit /></Link>
                <Link className="text-error"><FaRegTrashCan /></Link>
            </td>
        </tr>
    );
};

export default BillRecordData;