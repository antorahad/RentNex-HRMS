import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import useToogle from "../../hook/useToogle";
import HouseListContent from "./HouseListContent";

const HouseListLayout = () => {
    const { toggle, handleToggle } = useToogle();
    return (
        <div>
            <Navbar handleToggle={handleToggle} toggle={toggle} />
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle} />
                <HouseListContent/>
            </div>
        </div>
    );
};

export default HouseListLayout;