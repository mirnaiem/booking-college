import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Review = () => {
 const {user}=useContext(AuthContext);
 const data=useLoaderData()
 
 const handleReview=event=>{
  event.preventDefault()
 const form=event.target;
 const rating=form.rating.value;
 const details=form.details.value;

 const reviewInfo={
  rating,
  details,
  name:user.displayName,
  photo:user.photoURL,
  collegeName:data.collegeName
 }

 fetch('https://college-booking-server-pi.vercel.app/reviews',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(reviewInfo)
    
  })
  .then(res=>res.json())
  .then(data=>{console.log(data)
  if(data.insertedId){
    Swal.fire({
      title: 'success!',
      text: 'Review has been added Successfully',
      icon: 'success',
      confirmButtonText: 'ok'
    })
    form.reset()
  }
  })


 }
 return (
  <div className="w-[70%] rounded-2xl p-3 md:p-10 mx-auto bg-purple-500">
   <form className="md:w-4/5 mx-auto" onSubmit={handleReview} action="">
    <label className="label text-xl font-medium">Rating</label>
    <input className=" w-4/5 p-3 rounded-xl " type="number" placeholder="rating"  name="rating" id="" />
    <label className="label text-xl font-medium">Opinion</label>
    <textarea className=" w-4/5 p-3 rounded-xl " placeholder="opinion" name="details" id="" cols="30" rows="5"></textarea> <br />
    <input type="submit" className="btn" value="Submit" />
   </form>
  </div>
 );
};

export default Review;