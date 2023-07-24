import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyCollege = () => {
 const [colleges, setColleges] = useState([]); 
 const {user}=useContext(AuthContext)
  useEffect(() => {
    fetch(`http://localhost:3000/admission?${user?.email}`)
      .then((res) => res.json())
      .then(data => setColleges(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []); 
  console.log(colleges);
 return (
  <div className=" w-[50%] mx-auto my-16">
   {colleges.map(clg=><div className="flex justify-between p-8 shadow-xl font-bold text-2xl text-violet-500" key={clg._id}>
   <h2 className="">{clg.collegeInfo.collegeName}</h2>
<div className="space-x-2">   
 <Link to={`/details/${clg.collegeInfo._id}`}  className="btn btn-primary">Details</Link>
 <Link to=''  className="btn btn-primary">Give Review</Link>
 </div>  
 </div>)}
 
</div>
 );
};

export default MyCollege;