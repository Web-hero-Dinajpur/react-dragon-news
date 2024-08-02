import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-6xl max-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;