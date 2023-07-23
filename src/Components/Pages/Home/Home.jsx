import Gallery from "./Gallery/Gallery";
import Research from "./Research/Research";
import Search from "./Search/Search";
import College from "./college/College";

const Home = () => {
 return (
  <div>
   <Search></Search>
   <College></College>
   <Gallery></Gallery>
   <Research></Research>
  </div>
 );
};

export default Home;