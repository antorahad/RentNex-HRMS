// import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import HomeContent from "./HomeContent";
import useToogle from "../../hook/useToogle";

const HLayout = () => {
    const { toggle, handleToggle } = useToogle();
    return (
        <div>
            <Navbar handleToggle={handleToggle} toggle={toggle} />
            <div className="flex min-h-screen">
                <Sidebar toggle={toggle} />
                <HomeContent />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default HLayout;