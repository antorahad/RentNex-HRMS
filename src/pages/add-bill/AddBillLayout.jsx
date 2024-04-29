import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import AddBillContent from "./AddBillContent";

const AddBillLayout = () => {
    const {toggle, handleToggle} = useToogle();
    return (
        <div>
            <Navbar toggle={toggle} handleToggle={handleToggle}/>
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle}/>
                <AddBillContent/>
            </div>
        </div>
    );
};

export default AddBillLayout;