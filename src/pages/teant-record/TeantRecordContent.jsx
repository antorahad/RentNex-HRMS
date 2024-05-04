import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import { MdPersonSearch } from "react-icons/md";
import TeantRecordData from "./TeantRecordData";
import Swal from "sweetalert2";

const TeantRecordContent = () => {
    const { user } = useAuth();
    const [teant, setTeant] = useState([]);
    const TeantURL = `http://localhost:3000/teants?email=${user?.email}`;
    useEffect(() => {
        fetch(TeantURL)
            .then(res => res.json())
            .then(data => setTeant(data))
    }, [TeantURL])

    const [search, setSearch] = useState('')
    const handleSearch = e => {
        setSearch(e.target.value);
    }

    const filterTeant = teant.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        item.teantemail.toLowerCase().includes(search.toLowerCase()) || item.contact.toLowerCase().includes(search.toLowerCase()) || item.nid.toLowerCase().includes(search.toLowerCase()) || item.checkindate.toLowerCase().includes(search.toLowerCase()) || item.status.toLowerCase().includes(search.toLowerCase()));

    const handleDeleteTeant = _id => {
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
                fetch(`http://localhost:3000/teants/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Tenant deleted successfully",
                                icon: "success",
                            });
                            setTeant(filterTeant.filter(item => item._id !== _id));
                        }
                    });
            }
        });
    }

    return (
        <div className="w-full px-5 py-10 max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | Tenant Record</h1>
            </div>
            <div className="w-full md:w-1/3 relative mb-8">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <MdPersonSearch className="h-5 w-5" />
                </span>
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search Tenant"
                    className="pl-10 pr-4 py-2 input input-bordered rounded-md w-full"
                />
            </div>
            {filterTeant.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Render tenant data */}
                    {filterTeant.map(item => (
                        <TeantRecordData key={item._id} item={item} handleDeleteTeant={handleDeleteTeant} />
                    ))}
                </div>
            ) : (
                // Render "No Tenant Added" message
                <div className="flex justify-center items-center h-48">
                    <p className="text-lg">No Tenant Added</p>
                </div>
            )}
        </div>
    );
};

export default TeantRecordContent;
