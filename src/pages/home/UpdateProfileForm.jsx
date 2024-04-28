import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfileForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userData = useLoaderData();
    const { _id, name, email, address, contact, photo } = userData;

    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const contact = form.contact.value;
        const address = form.address.value;

        const updateUser = {
            name, email, photo, contact, address
        }
        console.log(updateUser);

        fetch(`http://localhost:3000/users/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated",
                        text: "Profile has been updated",
                        icon: "success"
                    });
                    form.reset();
                    navigate(location?.state ? location.state : '/home');
                }
            });
    }
    return (
        <div className="px-5 py-10 w-full max-w-7xl mx-auto">
            <div className="banner h-[250px] mt-16 mb-8 flex items-center justify-center rounded-2xl text-white font-bold text-xl md:text-2xl lg:text-4xl">
                <h1>Rent<span className="text-primeColor">Nex</span> | Update Profile</h1>
            </div>
            <form onSubmit={handleUpdateProfile} className="w-full lg:w-3/4 mx-auto bg-bodyColor bg-opacity-80 rounded-md p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                    <label className="label flex items-center gap-1">
                        <span className="label-text text-primeColor font-bold">Name*</span>
                    </label>
                    <input type="text" name="name" defaultValue={name} placeholder="Enter your name" className="input rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Email*</span>
                    </label>
                    <input type="email" name="email" defaultValue={email} placeholder="Enter your name" className="input rounded-md" readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Contact*</span>
                    </label>
                    <input type="text" name="contact" placeholder="Enter your contact" defaultValue={contact} className="input rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Photo URL*</span>
                    </label>
                    <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo url" className="input rounded-md" required />
                </div>
                <div className="form-control col-span-1 md:col-span-2">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Location*</span>
                    </label>
                    <textarea type="text" name="address" defaultValue={address} placeholder="Enter your location" className="textarea rounded-md h-24" required />
                </div>
                <input type="submit" className="btn btn-block col-span-1 md:col-span-2 outline-none border-none bg-primeColor hover:bg-primeColor focus:bg-primeColor text-white rounded-md" value="Update Profile" />
            </form>
        </div>
    );
};

export default UpdateProfileForm;