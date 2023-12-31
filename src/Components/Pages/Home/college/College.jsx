import { useState, useEffect } from "react";
import CollegeCard from "./CollegeCard";


const College = () => {
  const [colleges, setColleges] = useState([]); 

  useEffect(() => {
    fetch('https://college-booking-server-pi.vercel.app/colleges')
      .then((res) => res.json())
      .then(data => setColleges(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="grid md:grid-cols-3 gap-4 w-[95%] mx-auto my-16">
      {colleges.map(clg=><CollegeCard key={clg._id} clg={clg}></CollegeCard>)}
     
    </div>
  );
};

export default College;
