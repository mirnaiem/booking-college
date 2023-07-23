const Search = () => {
 
 return (
  <div className="bg-sky-400 py-20 text-center">
   <form action="">
    <input type="search" name="college" id="" className="border w-2/5 px-2 py-4 rounded-2xl" placeholder="Search College" />
    <input type="submit" className="bg-purple-600 px-2 ms-1 hover:bg-white hover:text-black text-white rounded-xl  py-4" value='Search' />
   </form>
  </div>
 );
};

export default Search;