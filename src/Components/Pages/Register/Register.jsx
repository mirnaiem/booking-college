import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../../../Social/SocialLogin";

const Register = () => {
 const [error,setError]=useState('');
 const [success,setSuccess]=useState('')
 const {registerUSer}=useContext(AuthContext)
 const navigate = useNavigate()
 const {
  register,
  handleSubmit,
 reset
 } = useForm();
 const onSubmit = (data) => {
  const name=data.name
  
  const email=data.email;
  const password=data.password;
  const photo=data.photo
  registerUSer(email, password)
  .then(result => {
      const createdUser = result.user
      updateProfile(result.user, {
          displayName: name,
          photoURL: photo
      })
      setError('')
      setSuccess('User has been created successfully')
      reset
      navigate('/')
      console.log(createdUser)
  })
  .catch(err => {
   console.log(err.message)
      setError(err.message)
      setSuccess('')
  })
  console.log(data)
 }
 return (
  <div className="hero min-h-screen bg-base-200">
   <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-right">
     <h1 className="text-5xl font-bold">Register now!</h1>
     <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-2/5   shadow-2xl bg-base-100">
     <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
       <label className="label">
        <span className="label-text">Name</span>
       </label>
       <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
      </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Email</span>
       </label>
       <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
      </div>
      <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo")} placeholder="photo url" className="input input-bordered" />

                        </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Password</span>
       </label>
       <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
      
      </div>
      <div className="form-control mt-6">
       <button className="btn btn-primary">Register</button>
      </div>
      <SocialLogin></SocialLogin>
      <p className="text-red-500">{error}</p>
      <p className="text-green-500">{success}</p>
      <p>Al-Ready Have An Account? Please <Link to='/login' className="text-blue-400">Login</Link></p>
     </form>
    </div>
   </div>
  </div>
 );
};

export default Register;