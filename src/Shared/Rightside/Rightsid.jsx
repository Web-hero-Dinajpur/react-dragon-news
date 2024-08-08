import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"

const Rightsid = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                    Button
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub />
                    Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a href="" className='flex p-4 text-lg items-center border rounded-t-lg'>
                    <FaFacebook className='mr-2'></FaFacebook>
                    Facebook
                </a>
                <a href="" className='flex p-4 text-lg items-center border-x'>
                    <FaTwitter className='mr-2'></FaTwitter>
                    Twitter
                </a>
                <a href="" className='flex p-4 text-lg items-center border rounded-b-lg'>
                    <FaInstagram className='mr-2'></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default Rightsid;