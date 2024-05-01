import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import BillRecordContent from "./BillRecordContent";

const BillRecordLayout = () => {
    const {toggle, handleToggle} = useToogle();
    return (
        <div>
            <Navbar toggle={toggle} handleToggle={handleToggle}/>
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle}/>
                <BillRecordContent/>
            </div>
        </div>
    );
};

export default BillRecordLayout;