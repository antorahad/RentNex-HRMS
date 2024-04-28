import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import AddTeantContent from "./AddTeantContent";

const AddTeantLayout = () => {
    const {toggle, handleToggle} = useToogle();
    return (
        <div>
            <Navbar toggle={toggle} handleToggle={handleToggle}></Navbar>
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle}/>
                <AddTeantContent/>
            </div>
        </div>
    );
};

export default AddTeantLayout;