import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const{ logout} = UserAuth();

  const handleLogout = async () => {
    try {
     await logout();
    }catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='navbar  fixed bg-white text-neutral-content z-10'>
       <div className="containerWrap flex justify-between">
        <h1 className='text-xl font-black'>instantChat</h1>
       <button onClick={handleLogout} className="btn  btn-ghost text-5">Logout</button>
       
       </div>
    </div>
    
  )
}

export default Navbar


