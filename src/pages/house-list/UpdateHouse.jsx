import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import UpdateHouseForm from "./UpdateHouseForm";

const UpdateHouse = () => {
    const { toggle, handleToggle } = useToogle();
    return (
        <div>
            <Navbar handleToggle={handleToggle} toggle={toggle} />
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle} />
                <UpdateHouseForm/>
            </div>
        </div>
    );
};

export default UpdateHouse;