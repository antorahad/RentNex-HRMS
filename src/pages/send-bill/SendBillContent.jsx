import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

const SendBillContent = () => {
    const { user } = useAuth();
    const [bill, setBill] = useState([]);
    const BillURL = `https://hrms-server-snowy.vercel.app/bills?email=${user?.email}`;
    useEffect(() => {
        fetch(BillURL)
            .then(res => res.json())
            .then(data => {
                const runningBills = data.filter(item => item.billstatus === 'Pending' && item.billtype === 'Running');
                setBill(runningBills);
            })
    }, [BillURL])

    const handleSendBill = e => {
        e.preventDefault();
        const form = e.target;
        const serviceId = "service_acftvoi";
        const templateId = "template_u9izxyh";
        const publicKey = "gAFD40vaoagWzAlFR";

        const name = form.name.value;
        const teantemail = form.teantemail.value;
        const billingmonth = form.billingmonth.value;
        const date = form.date.value;
        const houserent = form.houserent.value;
        const electricity = form.electricity.value;
        const water = form.water.value;
        const gas = form.gas.value;
        const servicecharge = form.servicecharge.value;
        const total = form.total.value;
        const email = user.email;

        const templateParams = {
            to_name: name,
            to_email: teantemail,
            from_email: email,
            from_name: 'RentNex',
            billingmonth: billingmonth,
            date: date,
            houserent: houserent,
            electricity: electricity,
            water: water,
            gas: gas,
            servicecharge: servicecharge,
            total: total,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', response);
                Swal.fire({
                    title: "Success",
                    text: "Email sent successfully",
                    icon: "success"
                });
                form.reset();
            })
            .catch((error) => {
                console.log('Error sending email', error);
                Swal.fire({
                    title: "Error",
                    text: "Oops!",
                    icon: "error"
                });
            });
    }
    return (
        <div className="w-full px-5 py-10 max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | Send Bill</h1>
            </div>
            <form onSubmit={handleSendBill} className="w-full lg:w-3/4 mx-auto bg-bodyColor bg-opacity-80 rounded-md p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Billing Month*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="billingmonth"
                    >
                        <option value="">
                            Select Billing Month
                        </option>
                        {bill.map(item => (
                            <option key={item._id} value={item.billingmonth}>{item.billingmonth}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Issue Date*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="date"
                    >
                        <option value="">
                            Select Issue Date
                        </option>
                        {bill.map(item => (
                            <option key={item._id} value={item.date}>{item.date}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Tenant Name*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="name"
                    >
                        <option value="">
                            Select Tenant Name
                        </option>
                        {bill.map(item => (
                            <option key={item._id} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Tenant Email*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="teantemail"
                    >
                        <option value="">
                            Select Tenant Email
                        </option>
                        {bill.map(item => (
                            <option key={item._id} value={item.teantemail}>{item.teantemail}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">House Rent*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="houserent"
                    >
                        <option value="">
                            Select House Rent
                        </option>
                        {bill.map(item => (
                            <option key={item._id} value={item.houserent}>{item.houserent}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Electricity Bill*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="electricity"
                    >
                        <option value="">
                            Select Electricity Bill
                        </option>
                        {bill.map(item => (
                            <option key={item._id} value={item.electricity}>{item.electricity}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Water Bill*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="water"
                    >
                        <option value="">
                            Select Water Bill
                        </option>
                        {bill.map(item => (
                            <option key={item._id} value={item.water}>{item.water}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Gas Bill*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="gas"
                    >
                        <option value="">
                            Select Gas Bill
                        </option>
                        {bill.map(item => (
                            <option key={item._id} value={item.gas}>{item.gas}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Service Charge*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="servicecharge"
                    >
                        <option value="">
                            Select Service Charge
                        </option>
                        {bill.map(item => (
                            <option key={item._id} value={item.servicecharge}>{item.servicecharge}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Total Amount*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="total"
                    >
                        <option value="">
                            Select Total Amount
                        </option>
                        {bill.map(item => (
                            <option key={item._id} value={item.total}>{item.total}</option>
                        ))}
                    </select>
                </div>
                <input type="submit" className="btn btn-block col-span-1 md:col-span-2 outline-none border-none bg-primeColor hover:bg-primeColor focus:bg-primeColor text-white rounded-md" value="Send Bill" />
            </form>
        </div>
    );
};

export default SendBillContent;