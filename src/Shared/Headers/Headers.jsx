import logo from '../../assets/logo.png'
import moment from 'moment';
const Headers = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <div className="text-x1">{moment().format("dddd, MMMM D, YYYY")}</div>
        </div>
    );
};

export default Headers;