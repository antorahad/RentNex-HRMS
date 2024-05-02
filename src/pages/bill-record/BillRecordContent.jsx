import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import BillRecordData from "./BillRecordData";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import Swal from "sweetalert2";

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

        const handleDeleteBill = _id => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/bills/${_id}`, {
                        method: "DELETE",
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Bill deleted successfully",
                                    icon: "success",
                                });
                                setBill(filterBill.filter(item => item._id !== _id));
                            }
                        });
                }
            });
        }    
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
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Billing Month</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Issue Date</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Name</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Email</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Contact</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Floor</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Unit</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Rent(TK)</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Electricity(TK)</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Water(TK)</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Gas(TK)</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Service Charge(TK)</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Total(TK)</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Bill Status</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Bill Type</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            filterBill.map(item => <BillRecordData key={item._id} item={item} handleDeleteBill={handleDeleteBill}></BillRecordData>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default BillRecordContent;