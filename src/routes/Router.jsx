import {
 createBrowserRouter,
} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Details from "../Components/Pages/Home/college/Details";
import Colleges from "../Components/Pages/Colleges/Colleges";
import PrivateRoute from "./PrivateRoute";
import Admission from "../Components/Pages/Admission/Admission";
import AdmissionForm from "../Components/Pages/Admission/AdmissionForm";
import MyCollege from "../Components/Pages/MyCollege/MyCollege";
const router = createBrowserRouter([
 {
   path: "/",
   element: <Main></Main>,
   children:[
    {
     path:'/',
     element:<Home></Home>
    },
    {
     path:'login',
     element:<Login></Login>
    },
    {
     path: 'register',
     element:<Register></Register>
    },
    {
     path:'details/:id',
     element:<PrivateRoute><Details></Details></PrivateRoute>,
     loader:({params})=>fetch(`http://localhost:3000/college/${params.id}`)
    },
    {
     path:'admission/:id',
     element:<PrivateRoute><AdmissionForm></AdmissionForm></PrivateRoute>,
     loader:({params})=>fetch(`http://localhost:3000/college/${params.id}`)
    },
    {
     path:'colleges',
     element:<Colleges></Colleges>
    },
    {
      path:'admission',
      element:<Admission></Admission>
    },{
      path:'myColleges',
      element:<MyCollege></MyCollege>
    }
   ]
 },
]);

export default router;