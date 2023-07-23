import { Link } from "react-router-dom";


const CollegeCard = ({clg}) => {
 const {_id,collegeImage, collegeName, admissionDates, events, researchHistory,sports}=clg;

 return (
  <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={collegeImage} className="w-full h-72" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{collegeName}</h2>
    <p className="text-xl"> <span className="  font-bold">Admission Dates: </span> {admissionDates}</p>
    <p className="text-xl"><span className=" font-semibold">Events: </span>{events.map((ev,index)=><li key={index+1}>{ev.eventName}</li>)}</p>
    <p className="text-xl"><span className=" font-semibold">Research: </span> {researchHistory}</p>
    <p className="text-xl"><span className=" font-semibold">Sports:</span> {sports.teamSports.map((sport,index)=><li key={index+1}>{sport}</li>)}  
     
    </p>
    <div className="card-actions justify-end">
      <Link to={`details/${_id}`} className="btn btn-primary">Details</Link>
    </div>
  </div>
</div>
 );
};

export default CollegeCard;