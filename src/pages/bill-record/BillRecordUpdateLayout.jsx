import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import BillRecordUpdateForm from "./BillRecordUpdateForm";

const BillRecordUpdateLayout = () => {
    const {toggle, handleToggle} = useToogle();
    return (
        <div>
            <Navbar toggle={toggle} handleToggle={handleToggle}/>
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle}/>
                <BillRecordUpdateForm/>
            </div>
        </div>
    );
};

export default BillRecordUpdateLayout;