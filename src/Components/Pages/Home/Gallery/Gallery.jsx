import { useEffect, useState } from "react";

const Gallery = () => {
 const [images,setImages]=useState([])
 useEffect(()=>{
  fetch('https://college-booking-server-pi.vercel.app/gallery')
  .then(res=>res.json())
  .then(data=>setImages(data))
 })
 return (
  <div className="grid md:grid-cols-4 w-[95%] mx-auto gap-4">
   {images.map(img=><div key={img._id} className="relative">
    <img src={img.graduatePicture}  className="w-full h-60 "></img>
    <p className="absolute bottom-2 left-2 text-gray-200 text-xl font-bold">{img.collegeName}</p>
   </div>
   
   )}
  </div>
 );
};

export default Gallery;