import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/Slices/authSlice';

const Header = () => {
    const {user} = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  },[user, navigate]);

  const handleLogout = ()=>{
    dispatch(logout());
    navigate("/");
  }
    
  return (
    <>
    <div className='bg-orange-400 py-3 w-full'>
        <div className='container p-2 mx-auto flex justify-between'>
        <h1 className='text-1.5xl font-semibold'>Assignment</h1> 
        <div className='flex items-center gap-3'>
        {user && user.role === "admin" && ( <Link to="/admin" className='block bg-black px-2 rounded text-sm text-white'>Admin</Link>)}
           <button onClick={handleLogout} className='bg-black px-3 py-2 text-white rounded-md font-semibold'>Logout</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Header