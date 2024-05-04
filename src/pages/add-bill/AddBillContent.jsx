import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const AddBillContent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [teant, setTeant] = useState([]);
    const TeantURL = `https://hrms-server-snowy.vercel.app/teants?email=${user?.email}`;
    useEffect(() => {
        fetch(TeantURL)
            .then(res => res.json())
            .then(data => {
                const runningTeants = data.filter(item => item.status === 'Running');
                setTeant(runningTeants);
            })
    }, [TeantURL])
    
    const [billValues, setBillValues] = useState({
        houserent: 0,
        electricity: 0,
        water: 0,
        gas: 0,
        servicecharge: 0,
        total: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBillValues(prevState => {
            // Update the state with the new value
            const updatedState = { ...prevState, [name]: value };
            // Calculate total based on the updated state
            if (name !== "total") {
                const { houserent, electricity, water, gas, servicecharge } = updatedState;
                const total = parseFloat(houserent) + parseFloat(electricity) + parseFloat(water) + parseFloat(gas) + parseFloat(servicecharge);
                // Set the total with 2 decimal places
                updatedState.total = total.toFixed(2);
            }
            return updatedState;
        });
    };

    const handleAddBill = e => {
        e.preventDefault();
        const form = e.target;
        const billingmonth = form.billingmonth.value;
        const date = form.date.value;
        const name = form.name.value;
        const teantemail = form.teantemail.value;
        const contact = form.contact.value;
        const floor = form.floor.value;
        const unit = form.unit.value;
        const houserent = form.houserent.value;
        const electricity = form.electricity.value;
        const water = form.water.value;
        const gas = form.gas.value;
        const servicecharge = form.servicecharge.value;
        const total = form.total.value;
        const billstatus = form.billstatus.value;
        const billtype = form.billtype.value;
        const email = user.email

        const newBill = {
            billingmonth, date, name, teantemail, contact, floor, unit, houserent, electricity, water, gas, servicecharge, total, billstatus, billtype, email
        }
        
        fetch(`https://hrms-server-snowy.vercel.app/bills?email=${user?.email}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBill)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Bill added successfully",
                        icon: "success"
                    });
                    form.reset()
                    navigate(location?.state ? location.state : '/billrecord');
                }
            })

    }

    return (
        <div className="w-full px-5 py-10 max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | Add Bill</h1>
            </div>
            <form onSubmit={handleAddBill} className="w-full lg:w-3/4 mx-auto bg-bodyColor bg-opacity-80 rounded-md p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
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
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Issue Date*</span>
                    </label>
                    <input type="date" name="date" className="input rounded-md" />
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
                        {teant.map(item => (
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
                        {teant.map(item => (
                            <option key={item._id} value={item.teantemail}>{item.teantemail}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Tenant Contact*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="contact"
                    >
                        <option value="">
                            Select Tenant Contact
                        </option>
                        {teant.map(item => (
                            <option key={item._id} value={item.contact}>{item.contact}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Rented Floor*</span>
                    </label>
                    <input type="number" name="floor" placeholder="Enter rented floor" min={1} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Rented Unit*</span>
                    </label>
                    <input type="number" name="unit" placeholder="Enter rented unit" min={1} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">House Rent*</span>
                    </label>
                    <input type="text" name="houserent" placeholder="Enter house rent" className="input rounded-md" onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Electricity Bill*</span>
                    </label>
                    <input type="text" name="electricity" placeholder="Enter electricity bill" className="input rounded-md"onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Water Bill*</span>
                    </label>
                    <input type="text" name="water" placeholder="Enter water bill" className="input rounded-md" onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Gas Bill*</span>
                    </label>
                    <input type="text" name="gas" placeholder="Enter gas bill" className="input rounded-md" onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Service Charge*</span>
                    </label>
                    <input type="text" name="servicecharge" placeholder="Enter service charge" className="input rounded-md" onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Total Amount*</span>
                    </label>
                    <input type="text" name="total" value={billValues.total} className="input rounded-md" readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Bill Status*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="billstatus"
                    >
                        <option value="">
                            Select Bill Status
                        </option>
                        <option value="Pending">Pending</option>
                        <option value="Received">Received</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Bill Type*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="billtype"
                    >
                        <option value="">
                            Select Bill Type
                        </option>
                        <option value="Running">Running</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
                <input type="submit" className="btn btn-block col-span-1 md:col-span-3 outline-none border-none bg-primeColor hover:bg-primeColor focus:bg-primeColor text-white rounded-md" value="Add Bill" />
            </form>
        </div>
    );
};

export default AddBillContent;