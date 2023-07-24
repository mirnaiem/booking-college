import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
const {user,logOutUser}=useContext(AuthContext);
console.log(user);
const handleLogOut = () => {
  logOutUser()
}
 const menuOption=<>
 <li><Link to='/'>Home</Link></li>
 <li><Link to='/colleges'>Colleges</Link></li>
 <li><Link to='/admission'>Admission</Link></li>
 {user && <li><Link to='/myColleges'>My colleges</Link></li>}
 </>

 return (
  <div className="navbar bg-base-100 w-4/5 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-semibold">
      {menuOption}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-purple-600 text-3xl">EduHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
     {menuOption}
    </ul>
  </div>
  {
    user?  <>
    
    <div  className="navbar-end">
      {user.photoURL?<img title={user.displayName} className="rounded-full w-10 h-10 mr-2" src={user.photoURL} alt="" />: <p className="mr-2 text-xl font-bold">{user.displayName}</p>}
    <Link onClick={handleLogOut} className="btn">LogOut</Link>
  </div>
  
  </>
  
  :<button className="navbar-end">
    <Link to="login" className="btn">LogIn</Link>
  </button>
  }
  

</div>
 );
};

export default NavBar;