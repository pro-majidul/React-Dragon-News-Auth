import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Provider";

const Register = () => {
    const { CreateUser, updateuserprofile } = useContext(AuthContext)
    const [error, setError] = useState({});
    const [wrong, setWrong] = useState({});
    const navigate = useNavigate();
    const handelRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 5) {
            return setError({ ...error, name: 'name must be 6 charecter' })
        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        CreateUser(email, password)
            .then(result => {
                console.log(result);
                updateuserprofile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')

                    }).catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                setWrong({ ...wrong, password: error.code })
                return

            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-md p-10 shrink-0 shadow-2xl">
                <h2 className="text-3xl font-semibold text-center">Register Your Account</h2>
                <form onSubmit={handelRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    {
                        error.name && <label className="label">
                            <span className="label-text text-red-500">{error.name}</span>
                        </label>
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    {
                        error.signup && <label className="label">
                            <span className="label-text">Invalid UserName , Email or Password</span>
                        </label>
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    {
                        wrong.password && <label className="label">
                            <span className="label-text">{wrong.password}</span>
                        </label>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                    <p className="text-md font-normal">Allready Have An Account ?<Link className="text-red-500" to='/auth/login'> Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;