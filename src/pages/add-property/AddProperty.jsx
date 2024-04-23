import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import AddPropertyForm from "./AddPropertyForm";

const AddProperty = () => {
    const { toggle, handleToggle } = useToogle();
    return (
        <div>
            <Navbar handleToggle={handleToggle} toggle={toggle} />
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle} />
                <AddPropertyForm/>
            </div>
        </div>
    );
};

export default AddProperty;