import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import TeantRecordContent from "./TeantRecordContent";

const TeantRecordLayout = () => {
    const { toggle, handleToggle } = useToogle()
    return (
        <div>
            <Navbar toggle={toggle} handleToggle={handleToggle}/>
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle}/>
                <TeantRecordContent/>
            </div>
        </div>
    );
};

export default TeantRecordLayout;