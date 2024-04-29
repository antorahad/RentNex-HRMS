import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TeantUpdateForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const teantData = useLoaderData();
    const { _id, name, contact, teantemail, photo, gender, religion, marital, nid, member, family, occupation, floor, unit, checkindate, checkoutdate, status, previousowner, ownercontact, address } = teantData;

    const handleUpdateTeant = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const contact = form.contact.value;
        const teantemail = form.teantemail.value;
        const gender = form.gender.value;
        const religion = form.religion.value;
        const marital = form.marital.value;
        const nid = form.nid.value;
        const member = form.member.value;
        const family = form.family.value;
        const photo = form.photo.value;
        const occupation = form.occupation.value;
        const floor = form.floor.value;
        const unit = form.unit.value;
        const checkindate = form.checkindate.value;
        const checkoutdate = form.checkoutdate.value;
        const status = form.status.value;
        const previousowner = form.previousowner.value;
        const ownercontact = form.ownercontact.value;
        const address = form.address.value;

        const updateTeant = {
            name, teantemail, contact, gender, religion, marital, nid, member, family, photo, occupation, floor, unit, checkindate, checkoutdate, status, previousowner, ownercontact, address
        }

        fetch(`http://localhost:3000/teants/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTeant)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated",
                        text: "Tenant has been updated",
                        icon: "success"
                    });
                    form.reset();
                    navigate(location?.state ? location.state : '/teantrecord');
                }
            });
    }
    return (
        <div className="w-full px-5 py-10 max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | Update Tenant</h1>
            </div>
            <form onSubmit={handleUpdateTeant} className="w-full lg:w-3/4 mx-auto bg-bodyColor bg-opacity-80 rounded-md p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Name*</span>
                    </label>
                    <input type="text" name="name" defaultValue={name} placeholder="Enter tenant name" className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Contact No*</span>
                    </label>
                    <input type="text" name="contact" defaultValue={contact} placeholder="Enter contact no" className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label flex items-center gap-1">
                        <span className="label-text text-primeColor font-bold">Email*</span>
                    </label>
                    <input type="email" name="teantemail" defaultValue={teantemail} placeholder="Enter email address" className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Gender*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="gender" defaultValue={gender}
                    >
                        <option value="">
                            Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Religion*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="religion" defaultValue={religion}
                    >
                        <option value="">
                            Select Religion
                        </option>
                        <option value="Islam">Islam</option>
                        <option value="Hinduism">Hinduism</option>
                        <option value="Christianity">Christianity</option>
                        <option value="Buddhism"> Buddhism</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Marital Status*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="marital" defaultValue={marital}
                    >
                        <option value="">
                            Select Marital Status
                        </option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">NID No*</span>
                    </label>
                    <input type="text" name="nid" defaultValue={nid} placeholder="Enter nid number" className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Total Member*</span>
                    </label>
                    <input type="number" name="member" defaultValue={member} placeholder="Enter member number" min={1} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Family Type*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="family" defaultValue={family}
                    >
                        <option value="">
                            Select Family Type
                        </option>
                        <option value="Bachelor Family">Bachelor Family</option>
                        <option value="Nuclear Family">Nuclear Family</option>
                        <option value="Extended Family">Extended Family</option>
                        <option value="Joint Family">Joint Family</option>
                        <option value="Single-Parent Family">Single-Parent Family</option>
                        <option value="Blended Family">Blended Family</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Photo URL*</span>
                    </label>
                    <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo url" className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Occupation*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="occupation" defaultValue={occupation}
                    >
                        <option value="">
                            Select Occupation
                        </option>
                        <option value="Service">Service</option>
                        <option value="Business">Business</option>
                        <option value="Student">Student</option>
                        <option value="Homemaker">Homemaker</option>
                        <option value="Others">Others</option>
                    </select>
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
                        <span className="label-text text-primeColor font-bold">Check In Date*</span>
                    </label>
                    <input type="date" name="checkindate" defaultValue={checkindate} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Check Out Date*</span>
                    </label>
                    <input type="date" name="checkoutdate" defaultValue={checkoutdate} className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Tenant Status*</span>
                    </label>
                    <select
                        className="select rounded-md"
                        name="status" defaultValue={status}
                    >
                        <option value="">
                            Select Tenant Status
                        </option>
                        <option value="Running">Running</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Previous House Owner*</span>
                    </label>
                    <input type="text" name="previousowner" defaultValue={previousowner} placeholder="Enter owner name" className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Owner Contact No*</span>
                    </label>
                    <input type="text" name="ownercontact" defaultValue={ownercontact} placeholder="Enter owner contact no" className="input rounded-md" />
                </div>
                <div className="form-control col-span-1 md:col-span-3">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Permanent Address*</span>
                    </label>
                    <textarea type="text" name="address" defaultValue={address} placeholder="Enter tenant permanent address" className="textarea rounded-md h-24" />
                </div>
                <input type="submit" className="btn btn-block col-span-1 md:col-span-3 outline-none border-none bg-primeColor hover:bg-primeColor focus:bg-primeColor text-white rounded-md" value="Update Tenant" />
            </form>
        </div>
    );
};

export default TeantUpdateForm;