import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AdmissionForm = () => {
 const {user}=useContext(AuthContext)
 const data=useLoaderData();
 
 const handleAdmission=event=>{
  event.preventDefault()
  const form=event.target;
 
  const subject=form.subject.value;
  const phone=form.number.value;
  const address=form.address.value;
  const date=form.date.value;
  const photo=form.photo.value;

  const information={
    subject,
    phone,
    address,
    date,
    photo,
    name:user.displayName,
    email:user.email,
    collegeInfo:data
  }

  fetch('http://localhost:3000/admission',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(information)
    
  })
  .then(res=>res.json())
  .then(data=>{console.log(data)
  if(data.insertedId){
    Swal.fire({
      title: 'success!',
      text: 'College has been Booking Successfully',
      icon: 'success',
      confirmButtonText: 'ok'
    })
    form.reset()
  }
  })
  
}
 return (
  <div>
    <form onSubmit={handleAdmission} className='w-full'>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-2 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Name</span>
          </label>
          <input type="text" name='name' defaultValue={user.displayName} placeholder="picture url of toy" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <select className="input input-bordered" name="subject" id="">
            <option value="English Literature">English Literature</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="International Relations">International Relations</option>
            <option value="Management">Management</option>
          </select>
         
          
        </div>
       </div>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-2 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" name="number"  className="input input-bordered" />
          
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
        
        
       </div>
       <div className='grid w-4/5 mx-auto gap-4 grid-cols-1 md:grid-cols-2 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" name='address'  placeholder='Address' className="input input-bordered" />
          
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input type="date" name='date'  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder='photo' className="input input-bordered" />
          
        </div>
      
       </div>
        <div className="form-control w-4/5 mx-auto mt-6">
          
          <input className="btn bg-cyan-600 text-xl text-white hover:text-black border-0 btn-block" type="submit" value="Submit" />
        </div>
      </form>
  </div>
 );
};

export default AdmissionForm;