import { useLoaderData } from "react-router-dom";

const Details = () => {
 const data=useLoaderData();
 const {collegeImage,collegeName, admissionProcess, events, researchWorks,sports}=data;
 return (
  <div className="mb-20">
   <img className="w-full md:h-[500px]" src={collegeImage} alt="" />
   <div className="w-[95%] mx-auto">
   <h1 className="text-5xl font-bold my-4">{collegeName}</h1>
   <h2 className="text-3xl font-semibold mt-16">Admission Process</h2>
   <p className="text-xl">{admissionProcess}</p>
   <h2 className="text-3xl font-semibold mt-10">Events</h2>
   <p className="flex flex-col md:flex-row gap-4">{events.map((event,index)=><div  key={index+1}>
    <h1 className="text-xl"><span className="font-medium">Event Name:</span> {event.eventName}</h1>
    <h1 className="text-xl"><span className="font-medium">Date:</span> {event.date}</h1>
    <h1 className="text-xl"><span className="font-medium">Description:</span> {event.description}</h1>
   </div>)}</p>
   <h2 className="text-3xl font-semibold mt-10">Research Works</h2>
   <p className="flex flex-col md:flex-row gap-4">{researchWorks.map((works,index)=><div  key={index+1}>
    <h1 className="text-xl"><span className="font-medium">Title:</span> {works.title}</h1>
    <h1 className="text-xl"><span className="font-medium">Author:</span> {works.faculty}</h1>
    <h1 className="text-xl"><span className="font-medium">Description:</span> {works.description}</h1>
   </div>)}</p>
   <h2 className="text-3xl font-semibold mt-10">Sports</h2>
  <div className="flex  gap-8">
  <div>
   <p className="font-medium text-xl">Team Sport</p>
   <p>{sports.teamSports.map((sprt,index)=><p key={index+1}>{sprt}</p>)}</p>
   </div>
   <div>
   <p className="font-medium text-xl">Individual Sport</p>
   <p>{sports.individualSports.map((sprt,index)=><p key={index+1}>{sprt}</p>)}</p>
   </div>
  </div>

   </div>
  </div>
 );
};

export default Details;