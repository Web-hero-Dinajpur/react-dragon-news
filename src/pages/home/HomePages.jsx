import { useLoaderData } from "react-router-dom";
import Headers from "../../Shared/Headers/Headers";
import Lefsid from "../../Shared/LeftSid/Lefsid";
import MainNavbar from "../../Shared/NavBar/MainNavbar";
import Navbar from "../../Shared/NavBar/Navbar";
import Rightsid from "../../Shared/Rightside/Rightsid";
import NewsCard from "./NewsCard/NewsCard";


const HomePages= () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Headers></Headers>
            <Navbar></Navbar>
            <MainNavbar></MainNavbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <Lefsid></Lefsid>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard 
                            key={aNews._id}
                            news={aNews}
                            ></NewsCard>)
                    }
                </div>
                <div>
                    <Rightsid
     
                    ></Rightsid>
                </div>
            </div>
        </div>
    );
};

export default HomePages;