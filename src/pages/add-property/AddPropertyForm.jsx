import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";

const AddPropertyForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const handleHouse = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const contact = form.contact.value;
        const house = form.house.value;
        const area = form.area.value;
        const floor = form.floor.value;
        const unit = form.unit.value;
        const address = form.address.value;
        const email = user.email;

        const newHouse = {
            name, contact, house, area, floor, unit, address, email
        }

        fetch(`http://localhost:3000/houses?email=${user?.email}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newHouse)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "House added successfully",
                        icon: "success"
                    });
                    form.reset()
                    navigate(location?.state ? location.state : '/home');
                }
            })

    }
    return (
        <div className="px-5 py-10 w-full max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | Add House</h1>
            </div>
            <form onSubmit={handleHouse} className="w-full lg:w-3/4 mx-auto bg-bodyColor bg-opacity-80 rounded-md p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">House Owner*</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter owner name" className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Contact No*</span>
                    </label>
                    <input type="text" name="contact" placeholder="Enter contact no" className="input rounded-md" />
                </div>
                <div className="form-control">
                    <label className="label flex items-center gap-1">
                        <span className="label-text text-primeColor font-bold">House Name*</span>
                    </label>
                    <input type="text" name="house" placeholder="Enter house name" className="input rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">House Area (Square Feet)*</span>
                    </label>
                    <input type="text" name="area" placeholder="Enter house area" className="input rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Floor No*</span>
                    </label>
                    <input type="number" name="floor" placeholder="Enter floor number" min={1} className="input rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Unit No*</span>
                    </label>
                    <input type="number" name="unit" placeholder="Enter unit number" min={1} className="input rounded-md" required />
                </div>
                <div className="form-control col-span-1 md:col-span-2">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">House Location*</span>
                    </label>
                    <textarea type="text" name="address" placeholder="Enter your location" className="textarea rounded-md h-24" required />
                </div>
                <input type="submit" className="btn btn-block col-span-1 md:col-span-2 outline-none border-none bg-primeColor hover:bg-primeColor focus:bg-primeColor text-white rounded-md" value="Add House" />
            </form>
        </div>
    );
};

export default AddPropertyForm;