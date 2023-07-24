import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Admission = () => {
 const [colleges, setColleges] = useState([]); 

  useEffect(() => {
    fetch('https://college-booking-server-pi.vercel.app/home/colleges')
      .then((res) => res.json())
      .then(data => setColleges(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []); 
 return (
  <div className=" md:w-[50%] mx-auto my-16">
  {colleges.map(clg=><div className="md:flex  justify-between p-8 shadow-xl font-bold text-2xl text-violet-500" key={clg._id}>
   <h2 className="">{clg.collegeName}</h2>
   <Link to={`/admission/${clg._id}`}  className="btn btn-primary">Take admission</Link>
  </div>)}
 
</div>
 );
};

export default Admission;