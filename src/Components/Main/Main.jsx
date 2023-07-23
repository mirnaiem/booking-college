import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Main = () => {
 return (
  <div>
   <NavBar></NavBar>
  <div className="min-h-screen"> <Outlet></Outlet></div>
   <Footer></Footer>
  </div>
 );
};

export default Main;