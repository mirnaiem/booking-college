import {  useContext, useState } from "react";
import {  useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../../Social/SocialLogin";

const Login = () => {
const [error,setError]=useState('')
const {loginUser}=useContext(AuthContext);
const navigate=useNavigate()
const location=useLocation()
const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
   const email=data.email;
   const password=data.password;
   loginUser(email,password).then(result=>{
    const loggedUser=result.user;
    console.log(loggedUser);
    navigate(from, { replace: true })
    setError('')
   }).catch(err=>{
    console.log(err.message)
    setError(err.message)})
    
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-right">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-2/5   shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
              {errors.email && <span className='text-red-500'>Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <SocialLogin></SocialLogin>
            <p className="text-red-500">{error}</p>

            <p>Do not Have An Account? Please <Link to='/register' className="text-blue-400">Register</Link></p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;