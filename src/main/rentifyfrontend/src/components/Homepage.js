import React from 'react'
import Navbar from './Navbar'
import '../App.css';

import Login from './Login';
import BuyerPage from './BuyerPage';

const Homepage = () => {
  return (
    <div className='w-full h-[100vh]  flex flex-col p-3 items-center bgHome'>

        <Navbar/>
        <BuyerPage/>
        
       
    </div>
  )
}

export default Homepage