import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import ProfileCard from "./ProfileCard";
import { MdMapsHomeWork } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GrDocumentTime } from "react-icons/gr";

const HomeContent = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState([]);
    const userURL = `http://localhost:3000/users?email=${user?.email}`;
    useEffect(() => {
        fetch(userURL)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [userURL])

    const [house, setHouse] = useState([]);
    const houseURL = `http://localhost:3000/houses?email=${user?.email}`;
    useEffect(() => {
        fetch(houseURL)
            .then(res => res.json())
            .then(data => setHouse(data))
    }, [houseURL])

    const [teant, setTeant] = useState([]);
    const teantURL = `http://localhost:3000/teants?email=${user?.email}`;
    useEffect(() => {
        fetch(teantURL)
            .then(res => res.json())
            .then(data => setTeant(data))
    }, [teantURL])

    const runningTeantsCount = teant.filter(item => item.status === 'Running').length;

    const [bill, setBill] = useState([]);
    const billURL = `http://localhost:3000/bills?email=${user?.email}`;
    useEffect(() => {
        fetch(billURL)
            .then(res => res.json())
            .then(data => setBill(data))
    }, [billURL])

    const pendingBillsCount = bill.filter(item => item.billstatus === 'Pending').length;
    return (
        <div className="w-full px-5 py-10 max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | Home</h1>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-5">
                <div className="w-full lg:w-1/2">
                    {
                        userInfo.map(item => <ProfileCard key={item._id} item={item}></ProfileCard>)
                    }
                </div>
                <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="card bg-violet-600 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="card-body text-white">
                            <div className="w-[60px] h-[60px] bg-violet-400 text-white rounded-md flex items-center justify-center">
                                <MdMapsHomeWork size={25} />
                            </div>
                            <h2 className="text-2xl font-bold">Total House</h2>
                            <p className="text-xl font-bold">{house.length} House</p>
                        </div>
                    </div>
                    <div className="card bg-green-600 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="card-body text-white">
                            <div className="w-[60px] h-[60px] bg-green-400 text-white rounded-md flex items-center justify-center">
                                <FaUsers size={25} />
                            </div>
                            <h2 className="text-2xl font-bold">Current Tenant</h2>
                            <p className="text-xl font-bold">{runningTeantsCount} Tenant</p>
                        </div>
                    </div>
                    <div className="card bg-cyan-600 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="card-body text-white">
                            <div className="w-[60px] h-[60px] bg-cyan-400 text-white rounded-md flex items-center justify-center">
                            <GrDocumentTime size={25}/>
                            </div>
                            <h2 className="text-2xl font-bold">Pending Bill</h2>
                            <p className="text-xl font-bold">{pendingBillsCount} Bill</p>
                        </div>
                    </div>
                    <div className="card bg-orange-600 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="card-body text-white">
                            <div className="w-[60px] h-[60px] bg-orange-400 text-white rounded-md flex items-center justify-center">
                                <MdMapsHomeWork size={25} />
                            </div>
                            <h2 className="text-2xl font-bold">Total House</h2>
                            <p className="text-xl font-bold">{house.length}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeContent;