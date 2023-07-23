import { useState, useEffect } from "react";
import CollegeCard from "./CollegeCard";
// import CollegeCard from "./CollegeCard";

const College = () => {
  const [colleges, setColleges] = useState([]); // Provide an initial value as an empty array

  useEffect(() => {
    fetch('http://localhost:3000/colleges')
      .then((res) => res.json())
      .then(data => setColleges(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []); // Make sure to provide an empty dependency array, so the effect runs only once

  return (
    <div className="grid md:grid-cols-3 gap-4 w-[95%] mx-auto my-16">
      {colleges.map(clg=><CollegeCard key={clg._id} clg={clg}></CollegeCard>)}
     
    </div>
  );
};

export default College;
