import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
 const {user,loading}=useContext(AuthContext);
 const location=useLocation()
 if(loading){
  return <div className='text-center mt-5'><progress className="progress w-56"></progress></div>}
  
  if(user){
   return children
  }
 return (
  <Navigate state={{from:location}} to='/login' replace></Navigate>
 );
};

export default PrivateRoute;