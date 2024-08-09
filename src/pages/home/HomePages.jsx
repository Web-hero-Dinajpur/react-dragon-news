import Headers from "../../Shared/Headers/Headers";
import Lefsid from "../../Shared/LeftSid/Lefsid";
import MainNavbar from "../../Shared/NavBar/MainNavbar";
import Navbar from "../../Shared/NavBar/Navbar";
import Rightsid from "../../Shared/Rightside/Rightsid";


const HomePages= () => {
    return (
        <div className="">
            <Headers></Headers>
            <Navbar></Navbar>
            <MainNavbar></MainNavbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <Lefsid></Lefsid>
                </div>
                <div className="md:col-span-2 border">
                    <h4 className="text-4xl">coming soon</h4>
                </div>
                <div className="border">
                    <Rightsid></Rightsid>
                </div>
            </div>
        </div>
    );
};

export default HomePages;