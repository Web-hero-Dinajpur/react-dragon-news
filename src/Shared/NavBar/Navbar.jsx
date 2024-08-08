import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
              <Link to="/">  I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default Navbar;