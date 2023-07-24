import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [colleges, setColleges] = useState([]);
  const [error, setError]=useState('')
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://college-booking-server-pi.vercel.app/home/colleges')
      .then((res) => res.json())
      .then(data => setColleges(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = event => {
    event.preventDefault();
    const searchQuery = event.target.college.value.toLowerCase();

   
   

    if (searchQuery !== "") {
     // Check if the search query matches any college name
     const matchingCollege = colleges.find(college =>
       college.collegeName.toLowerCase().includes(searchQuery)
     );
    if (matchingCollege) {
      navigate(`/details/${matchingCollege._id}`);
      setError('')
    } else {
      event.target.reset()
      setError("No colleges found.");
    }}
  };

  return (
    <div className="bg-sky-400 py-20 text-center">
      <form onSubmit={handleSearch} action="">
        <input type="search" name="college" id="" className="border w-2/5 px-2 py-4 rounded-2xl" placeholder="Search College" />
        <input type="submit" className="bg-purple-600 px-2 ms-1 hover:bg-white hover:text-black text-white rounded-xl py-4" value='Search' />
      </form>
      <p className="text-red-400">{error}</p>
    </div>
  );
};

export default Search;
