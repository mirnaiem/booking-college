

const CollegeCard = ({clg}) => {
 const {collegeImage, collegeName, admissionDates, events, researchHistory, sports }=clg;
 return (
  <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={collegeImage} className="w-full h-72" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{collegeName}</h2>
    <p> <span className=" font-semibold">Admission Dates: </span> {admissionDates}</p>
    <p><span className=" font-semibold">Events: </span>{events.map((ev,index)=><li key={index+1}>{ev}</li>)}</p>
    <p><span className=" font-semibold">Research: </span> {researchHistory}</p>
    <p><span className=" font-semibold">Sports: </span> {sports.map((ev,index)=><li key={index+1}>{ev}</li>)}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
 );
};

export default CollegeCard;