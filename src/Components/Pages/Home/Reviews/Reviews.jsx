import {Swiper,SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';


const Review = () => {
  const [reviews,setReviews]=useState([]);

  useEffect(()=>{
    fetch('https://college-booking-server-pi.vercel.app/reviews')
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[])
  
 return (
  <div className='my-10 '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         {reviews.map(review=><SwiperSlide className='  text-center' key={review._id}>

         <div className='flex   justify-center'>
         <img className='rounded-full' src={review.photo} alt="" />
         </div>
          <h1 className='bg-base-200 text-xl shadow-2xl mb-3 font-bold py-5 px-2 md:w-1/12 w-3/5 mx-auto'>{review.name}</h1>
          <Rating
                    readonly
                    placeholderRating={review.rating}
                    emptySymbol={<FaRegStar size={40} className='text-yellow-500'></FaRegStar>}
                    placeholderSymbol={<FaStar size={40} className=' text-yellow-500'></FaStar>}
                    fullSymbol={<FaStar size={40} className=' text-yellow-500'></FaStar>}
                  />

          <p >{review.details}</p>
          <h2 className='text-4xl font-medium mt-8'>{review.collegeName}</h2>

          
          </SwiperSlide>)}
        
         
      
       
       
      </Swiper>
    </div>
 );
};

export default Review;