import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BillRecordUpdateForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const billData = useLoaderData();
    const {_id, billingmonth, date, name, teantemail, contact, floor, unit, houserent, electricity, water, gas, servicecharge, total, billstatus, billtype} = billData;

    const handleUpdateBill = e => {
        e.preventDefault();
        const form = e.target;
        const billingmonth = form.billingmonth.value;
        const date = form.date.value;
        const name = form.name.value;
        const teantemail = form.teantemail.value;
        const contact = form.contact.value;
        const floor = form.floor.value;
        const unit = form.unit.value;
        const billstatus = form.billstatus.value;
        const billtype = form.billtype.value;
        const updateBill = {
            billingmonth, date, name, teantemail, contact, floor, unit, billstatus, billtype
        }

        fetch(`https://hrms-server-snowy.vercel.app/bills/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBill)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated",
                        text: "Bill has been updated",
                        icon: "success"
                    });
                    form.reset();
                    navigate(location?.state ? location.state : '/billrecord');
                }
            });
    }

    return (
        <div className="w-full px-5 py-10 max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | Update Bill</h1>
            </div>
            <form onSubmit={handleUpdateBill} className="w-full lg:w-3/4 mx-auto bg-bodyColor bg-opacity-80 rounded-md p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Billing Month*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="billingmonth" defaultValue={billingmonth}
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
                    <input type="date" name="date" defaultValue={date} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Tenant Name*</span>
                    </label>
                    <input type="text" name="name" defaultValue={name} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Tenant Email*</span>
                    </label>
                    <input type="email" name="teantemail" defaultValue={teantemail} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Tenant Contact*</span>
                    </label>
                    <input type="text" name="contact" defaultValue={contact} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Rented Floor*</span>
                    </label>
                    <input type="number" name="floor" defaultValue={floor} placeholder="Enter rented floor" min={1} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Rented Unit*</span>
                    </label>
                    <input type="number" name="unit" defaultValue={unit} placeholder="Enter rented unit" min={1} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">House Rent*</span>
                    </label>
                    <input type="text" name="houserent" defaultValue={houserent} placeholder="Enter house rent" className="input rounded-md" disabled/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Electricity Bill*</span>
                    </label>
                    <input type="text" name="electricity" defaultValue={electricity} placeholder="Enter electricity bill" className="input rounded-md" disabled/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Water Bill*</span>
                    </label>
                    <input type="text" name="water" defaultValue={water} placeholder="Enter water bill" className="input rounded-md" disabled/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Gas Bill*</span>
                    </label>
                    <input type="text" name="gas" defaultValue={gas ? gas : '0'} placeholder="Enter gas bill" className="input rounded-md" disabled/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Service Charge*</span>
                    </label>
                    <input type="text" name="servicecharge" defaultValue={servicecharge} placeholder="Enter service charge" className="input rounded-md" disabled/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Total Amount*</span>
                    </label>
                    <input type="text" name="total" defaultValue={total} className="input rounded-md" disabled/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Bill Status*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="billstatus" defaultValue={billstatus}
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
                        name="billtype" defaultValue={billtype}
                    >
                        <option value="">
                            Select Bill Type
                        </option>
                        <option value="Running">Running</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
                <input type="submit" className="btn btn-block col-span-1 md:col-span-3 outline-none border-none bg-primeColor hover:bg-primeColor focus:bg-primeColor text-white rounded-md" value="Update Bill" />
            </form>
        </div>
    );
};

export default BillRecordUpdateForm;