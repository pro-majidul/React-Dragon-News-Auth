import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/Provider";
import { useContext } from "react";

const Navbar = () => {
  const { users, logOutUser } = useContext(AuthContext)

  return (
    <div className="flex justify-between items-center">
      <div className="font-medium">{users && users.displayName}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          {
            users && users?.email ? <div>
              <img className="w-12 rounded-full" src={users?.photoURL} alt="" />
            </div> : <img src={userIcon} alt="" />
          }
        </div>
        {
          users && users?.email ? <button onClick={logOutUser} className="btn btn-neutral rounded-none">Log-Out</button> : <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
        }

      </div>
    </div>
  );
};

export default Navbar;
