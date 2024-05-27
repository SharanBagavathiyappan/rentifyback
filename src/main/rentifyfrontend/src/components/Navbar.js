import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate=useNavigate()
  const [count,setCount]=useState(0)
 
  return (
    <>
    <div className='w-[100%] h-[10vh] bg-[#4166af] flex items-center rounded-[15px] shadow-2xl shadow-slate-200 justify-around p-3 text-white text-[20px] font-bold'>
      <div className='w-[50%] flex items-center text-left cursor-pointer ' onClick={()=>navigate('/')}>Rentify</div>
      <div className='w-[50%] flex items-center justify-evenly cursor-pointer'> 
      <div>
      <span className='mr-2 cursor-pointer relative' ><i class="fa-solid fa-cart-shopping"></i></span>Cart</div>
      <div className='w-[20px] h-[20px] text-[15px] absolute rounded-[50%] flex items-center justify-center left-[59.5%] top-2 bg-red-800'>{count}</div>
      <div onClick={()=>navigate('/Login')}>
      <span className='mr-2 cursor-pointer' ><i class="fa-regular fa-user"></i></span>
      Login
        </div>
        {/* <div>Register</div> */}

      </div>
      
      
    
    </div>
    </>
  )
}

export default Navbar