import Headers from "../../Shared/Headers/Headers";
import Navbar from "../../Shared/NavBar/Navbar";


const HomePages= () => {
    return (
        <div>
            <Headers></Headers>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins font-bold">this is home</h2>
        </div>
    );
};

export default HomePages;