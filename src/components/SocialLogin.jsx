import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/Provider";
const SocialLogin = () => {
  const { googleLogin ,githubLogin } = useContext(AuthContext)
  const handelGoogleLogin = () => {
    googleLogin()
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error.code);
    })
  }

  const handelGithubLogin = () =>{
    githubLogin()
    .then(result => {
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error.code);
    })
  }


  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button onClick={handelGoogleLogin} className="btn ">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button onClick={handelGithubLogin} className="btn ">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
