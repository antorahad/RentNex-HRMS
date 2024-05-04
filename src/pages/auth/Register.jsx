import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";

const Register = () => {
    const {register} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {
            name, email
        };
        register(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                title: "Congratulation",
                text: "Your account has been created",
                icon: "success"
            });
            navigate(location?.state ? location.state : '/');
            fetch('https://hrms-server-snowy.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
        }).catch(error => {
            Swal.fire({
                title: "Error",
                text: `${error.message}`,
                icon: "error"
            });
        })
    }
    return (
        <div className="bg-bodyColor min-h-screen px-5 py-10 flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-white font-bold text-4xl">
                    Welcome To Rent<span className="text-primeColor">Nex</span>
                </h1>
                <p className="text-white text-sm">Already RentNex user? <Link className="text-primeColor" to={'/'}>login</Link> now.</p>
            </div>
            <form onSubmit={handleRegister} className="w-full md:w-1/2 lg:w-1/4 mx-auto bg-white bg-opacity-10 p-5 rounded-md">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Name*</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Email*</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email" className="input rounded-md" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-primeColor font-bold">Password*</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter your password" className="input rounded-md" required />
                </div>
                <input type="submit" className="btn btn-block col-span-2 outline-none border-none bg-primeColor hover:bg-primeColor focus:bg-primeColor text-white rounded-md mt-5" value="Register"/>
            </form>
        </div>
    );
};

export default Register;