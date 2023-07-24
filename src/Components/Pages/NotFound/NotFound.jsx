
import { Link } from 'react-router-dom';


const NotFound = () => {
 
 return (
  <div className='  min-h-screen flex flex-col justify-center items-center'>
  <img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg&ga=GA1.2.1419972379.1680192737&semt=ais" alt="" className="mx-auto" />
  <h2 className='text-5xl '>Data not found!! <span className='text-xl'>Back to <Link className='text-red-600' to='/'>Home</Link></span></h2>
 </div>
 );
};

export default NotFound;