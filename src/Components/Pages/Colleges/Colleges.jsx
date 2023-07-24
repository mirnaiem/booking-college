import { useEffect, useState } from "react";
import Card from "./Card";

const Colleges = () => {
 const [colleges, setColleges] = useState([]); 

  useEffect(() => {
    fetch('https://college-booking-server-pi.vercel.app/home/colleges')
      .then((res) => res.json())
      .then(data => setColleges(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []); 
 return (
  <div className="grid md:grid-cols-3 gap-4 w-[95%] mx-auto my-16">
  {colleges.map(clg=><Card key={clg._id} clg={clg}></Card>)}
 
</div>
 );
};

export default Colleges;