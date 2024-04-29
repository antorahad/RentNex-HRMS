import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import ViewTeant from "./ViewTeant";

const ViewTeantLayout = () => {
    const {toggle, handleToggle} = useToogle();
    return (
        <div>
            <Navbar toggle={toggle} handleToggle={handleToggle}/>
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle}/>
                <ViewTeant/>
            </div>
        </div>
    );
};

export default ViewTeantLayout;