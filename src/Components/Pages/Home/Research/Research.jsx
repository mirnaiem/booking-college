import { useEffect, useState } from "react";
import ResearchCard from "./ResearchCard";


const Research = () => {
 const [researches,setResearches]=useState([])
 useEffect(()=>{
  fetch('http://localhost:3000/research')
  .then(res=>res.json())
  .then(data=>setResearches(data))
 })
 return (
  <div className="my-16">
  <h1 className="text-center text-4xl my-3 font-bold"> Research Paper</h1>
  <div className="grid md:grid-cols-2 gap-3 w-[90%] mx-auto">
   {researches.map(search=><ResearchCard key={search._id} search={search}></ResearchCard>)}
  </div></div>
 );
};

export default Research;