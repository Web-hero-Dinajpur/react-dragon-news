import { Link } from "react-router-dom";
import MainNavbar from "../../../Shared/NavBar/MainNavbar";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);

  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signIn(email, password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error);
    })
    
  }  

  return (
    <div>
      <MainNavbar></MainNavbar>
      <div>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">Don't have an account? <b><Link to="/register">Register</Link></b></p>
      </div>
    </div>

  );
};

export default Login;