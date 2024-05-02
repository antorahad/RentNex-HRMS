import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import HouseListData from "./HouseListData";
import Swal from "sweetalert2";

const HouseListContent = () => {
    const { user } = useAuth();
    const [house, setHouse] = useState([]);
    const houseURL = `http://localhost:3000/houses?email=${user?.email}`;
    useEffect(() => {
        fetch(houseURL)
            .then(res => res.json())
            .then(data => setHouse(data))
    }, [houseURL])

    const handleDeleteHouse = _id => {
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
                fetch(`http://localhost:3000/houses/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "House deleted successfully",
                                icon: "success",
                            });
                            setHouse(house.filter(item => item._id !== _id));
                        }
                    });
            }
        });
    }    

    return (
        <div className="w-full px-5 py-10 max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | House Record</h1>
            </div>
            <div className="overflow-x-auto" style={{ scrollbarWidth: "thin" }}>
                <table className="table-auto min-w-full border divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Name</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Contact</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">House</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Area(SFT)</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Floor</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Unit</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Address</th>
                            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            house.map(item => <HouseListData key={item._id} item={item} handleDeleteHouse={handleDeleteHouse}></HouseListData>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default HouseListContent;