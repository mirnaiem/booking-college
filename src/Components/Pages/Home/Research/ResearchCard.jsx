import { Link } from "react-router-dom";

const ResearchCard = ({search}) => {
 const {researchPaper1Title,collegeName,researchPaper2Title,researchPaper1Link,researchPaper2Link}=search;
 return (
  <div className="card w-full bg-sky-500 shadow-xl text-black  ">
  <div className="card-body">
    <h2 className="card-title">{collegeName}</h2>
    <div className="flex justify-evenly text-xl"><p>Title: {researchPaper1Title}</p><Link to={researchPaper1Link} className=" btn-link no-underline ">Link</Link></div>
    <div className="flex justify-evenly text-xl"><p>Title: {researchPaper2Title}</p><Link to={researchPaper2Link} className=" btn-link no-underline">Link</Link></div>
  </div>
</div>
 );
};

export default ResearchCard;