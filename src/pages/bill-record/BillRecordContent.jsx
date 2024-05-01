import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import BillRecordData from "./BillRecordData";
import { HiOutlineDocumentSearch } from "react-icons/hi";

const BillRecordContent = () => {
    const { user } = useAuth();
    const [bill, setBill] = useState([]);
    const billURL = `http://localhost:3000/bills?email=${user?.email}`;
    useEffect(() => {
        fetch(billURL)
            .then(res => res.json())
            .then(data => setBill(data))
    }, [billURL])

    const [search, setSearch] = useState('')
    const handleSearch = e => {
        setSearch(e.target.value);
    }

    const filterBill = bill.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        item.teantemail.toLowerCase().includes(search.toLowerCase()) || item.contact.toLowerCase().includes(search.toLowerCase()) || item.billingmonth.toLowerCase().includes(search.toLowerCase()) || item.date.toLowerCase().includes(search.toLowerCase()) || item.billstatus.toLowerCase().includes(search.toLowerCase()));
    return (
        <div className="w-full px-5 py-10 max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | Bill Record</h1>
            </div>
            <div className="w-full md:w-1/3 relative mb-8">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <HiOutlineDocumentSearch className="h-5 w-5" />
                </span>
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search Bill"
                    className="pl-10 pr-4 py-2 input input-bordered rounded-md w-full"
                />
            </div>
            <div className="overflow-x-auto" style={{ scrollbarWidth: "thin" }}>
                <table className="table-auto min-w-full border divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Bill Month</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Issue Date</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Name</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Contact</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Floor</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Total</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Status</th>
                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            filterBill.map(item => <BillRecordData key={item._id} item={item}></BillRecordData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BillRecordContent;