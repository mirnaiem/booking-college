import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
 const {logWithGoogle,gitHubLogin}=useContext(AuthContext)
 const navigate=useNavigate()
 const location=useLocation()
 const from = location.state?.from?.pathname || '/';
 const handleGoogleLog=()=>{
  logWithGoogle().then(result=>{
   const googleUser=result.user;
   console.log(googleUser);
   navigate(from, { replace: true })
  })
 }
 const handleGitLog=()=>{
  gitHubLogin().then(result=>{
   const googleUser=result.user;
   console.log(googleUser);
   navigate(from, { replace: true })
  })
 }
 return (
  <div className="flex flex-col w-full">
  <div className="divider"></div>

  <div className="flex mt-4 w-full border gap-x-2">
    <button
      onClick={handleGoogleLog}
      type="button"
      className="flex items-center  justify-center w-full p-2 border border-cyan-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-cyan-700"
    >
      <FaGoogle className="w-5 me-4 h-5 fill-current text-cyan-600"></FaGoogle>Login With Google
    </button>
    <button
      onClick={handleGitLog}
      type="button"
      className="flex items-center  justify-center w-full p-2 border border-cyan-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-cyan-700"
    >
      <FaGithub className="w-5 me-4 h-5 fill-current text-cyan-600"></FaGithub>Login With GitHub
    </button>
  </div>
</div>
 );
};

export default SocialLogin;