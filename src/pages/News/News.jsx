import { useParams } from "react-router-dom";
import Headers from "../../Shared/Headers/Headers";
import MainNavbar from "../../Shared/NavBar/MainNavbar";
import Rightsid from "../../Shared/Rightside/Rightsid";

const News = () => {
    const {id}= useParams();
    return (
        <div>
            <Headers></Headers>
            <MainNavbar></MainNavbar>
            <div className="grid md:grid-cols-4 mx-auto">
                <div className="cols-span-3">
                    <h2 className="text-5xl">News Detail</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <Rightsid></Rightsid>
                </div>
            </div>
        </div>
    );
};

export default News;