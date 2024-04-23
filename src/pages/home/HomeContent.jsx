import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import ProfileCard from "./ProfileCard";

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
                <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="card bg-primary text-primary-content hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title">Total House</h2>
                            <p>{house.length}</p>
                            <div className="card-actions justify-end">
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-primary text-primary-content hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-primary text-primary-content hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-primary text-primary-content hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;