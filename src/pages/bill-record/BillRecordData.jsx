import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BillRecordData = ({ item, handleDeleteBill }) => {
    const { _id, name, contact, billingmonth, date, floor, total, billstatus, teantemail, unit, houserent, electricity, water, gas, servicecharge, billtype } = item;
    return (
        <tr>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{billingmonth}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{date}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{name}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{teantemail}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{contact}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{floor}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{unit}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{houserent}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{electricity}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{water}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{gas}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{servicecharge}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{total}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{billstatus}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap border-r">{billtype}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap flex items-center gap-2">
                <Link to={`/updatebill/${_id}`} className="text-warning"><FaRegEdit /></Link>
                <Link onClick={() => handleDeleteBill(_id)} className="text-error"><FaRegTrashCan /></Link>
            </td>
        </tr>
    );
};

export default BillRecordData;