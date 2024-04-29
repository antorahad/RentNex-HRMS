import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import TeantUpdateForm from "./TeantUpdateForm";

const TeantUpdateLayout = () => {
    const {toggle, handleToggle} = useToogle();
    return (
        <div>
            <Navbar toggle={toggle} handleToggle={handleToggle}/>
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle}/>
                <TeantUpdateForm/>
            </div>
        </div>
    );
};

export default TeantUpdateLayout;