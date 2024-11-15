import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Provider";

const Login = () => {
    const { UserLogin ,forgetPassWord} = useContext(AuthContext);
    const location = useLocation();
    const emailRef = useRef()
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const handelLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password')
        UserLogin(email, password)
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setError({ ...error, login: err.code} );
                return
            })
    }

     const handelforgetpassword = () =>{
        const email = emailRef.current.value;
        if(!email){
            alert('please provide a email address')
        }else{
            forgetPassWord(email)
            .then(()=>{
               alert('passrod sent to your email , please check your email')
            }).catch(error =>{
                console.log(error.code);
            })
        }
     }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-md p-10 shrink-0 shadow-2xl">
                <h2 className="text-3xl font-semibold text-center">Login Your Account</h2>
                <form onSubmit={handelLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        {
                            error.login && <label className="label">
                            <span className="text-red-500 label-text">Invalid Email or password</span>
                        </label>
                        }
                        <label className="label">
                            <Link onClick={handelforgetpassword} className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                    <p className="text-md font-normal">Dont’t Have An Account ?<Link className="text-red-500" to='/auth/register'> Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;