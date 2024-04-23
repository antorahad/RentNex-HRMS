// import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import UpdateProfileForm from "./UpdateProfileForm";

const UpdateProfile = () => {
    const { toggle, handleToggle } = useToogle();
    return (
        <div>
            <Navbar handleToggle={handleToggle} toggle={toggle} />
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle} />
                <UpdateProfileForm/>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default UpdateProfile;