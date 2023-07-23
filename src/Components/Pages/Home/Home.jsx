import Gallery from "./Gallery/Gallery";
import Research from "./Research/Research";
import Review from "./Review/Review";
import Search from "./Search/Search";
import College from "./college/College";

const Home = () => {
 return (
  <div>
   <Search></Search>
   <College></College>
   <Gallery></Gallery>
   <Research></Research>
   <Review></Review>
  </div>
 );
};

export default Home;