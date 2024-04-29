import { useLoaderData } from "react-router-dom";

const ViewTeant = () => {
    const teantData = useLoaderData();
    const { name, contact, teantemail, photo, gender, religion, marital, nid, member, family, occupation, floor, unit, checkindate, checkoutdate, status, previousowner, ownercontact, address } = teantData;
    return (
        <div className="w-full px-5 py-10 max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | View Tenant</h1>
            </div>
            <div className="card bg-slate-50 shadow-lg rounded-md w-full">
                <div className="card-body">
                    <img src={photo} alt="Teant image" className="w-full md:w-64 h-64 rounded-lg object-cover object-center" />
                    <div className="flex flex-col md:flex-row flex-wrap items-center gap-5 mt-5 font-bold">
                            <p>Name: {name}</p>
                            <p>Email: {teantemail}</p>
                            <p>Contact No: {contact}</p>
                            <p>Gender: {gender}</p>
                            <p>Religion: {religion}</p>
                            <p>Marital Status: {marital}</p>
                            <p>NID No: {nid}</p>
                            <p>Permanent Address: {address}</p>
                            <p>Family Type: {family}</p>
                            <p>Member No: {member}</p>
                            <p>Occupation: {occupation}</p>
                            <p>Rented Floor No: {floor}</p>
                            <p>Rented Unit No: {unit}</p>
                            <p>Check In Date: {checkindate}</p>
                            <p>Check Out Date: {
                                checkoutdate 
                                ?
                                checkoutdate
                                :
                                'Continuing'
                            }</p>
                            <p>Tenant Status: {status}</p>
                            <p>Previous House Owner: {previousowner}</p>
                            <p>Owner Contact No: {ownercontact}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewTeant;