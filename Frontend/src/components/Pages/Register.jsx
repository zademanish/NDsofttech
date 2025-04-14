import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/Slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const {user, loading} = useSelector((state)=>state.auth);
    

    useEffect(()=>{
        if(user){
                navigate("/home")
            }
        }
    ,[user, navigate, dispatch])

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(registerUser({name,email,password}))
    }
  return (
    <div className='flex'>
        <div className='w-full mt-20 flex flex-col justify-center items-center p-8 md:p-12'>
        <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
            <div className='flex justify-center mb-6'>
                <h2 className='text-xl font-medium'>ND<span className='text-orange-700'>SOFTTECH</span></h2>
            </div>
            <h2 className='text-2xl font-bold mb-6 text-center'>ASSIGNMENT! 👋🏻 </h2>
            <p className='text-center mb-6'>
                Enter your username and password to Login
            </p>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2'>Name</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='w-full p-2 border rounded' placeholder='Enter your Name' />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2'>Email</label>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full p-2 border rounded' placeholder='Enter your email address' />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2'>Password</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full p-2 border rounded' placeholder='Enter your password' />
            </div>
        <button type='submit' className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition '>{loading ? "loading..." : "Sign Up"}</button>
            <p className='mt-6 text-center text-sm'>
                Don't have an account?{" "}
                <Link to="/" className='text-blue-500'>Login</Link>
            </p>
        </form>
        </div>
    </div>
  )
}

export default Register
