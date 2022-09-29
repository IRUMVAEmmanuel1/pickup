import React from 'react'
import logo from '../asset/huzamart logo.JPG'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import './Header.css'
function Header() {
  let navigate = useNavigate();
  return (
    <div className=''>
    <div className='cont bg-white shadow-md'>
        <div className=''>
        
        <img src={logo} alt="huzalogo" width="150px" /> 
        
        </div>
        <div className=''>
       <button onClick={()=>{navigate("../LandingPage/OrderNow.js");}} className='btn' style={{backgroundColor:'#1A7431',color:'white', fontSize:'13px'}}>Order Now</button>
            
        </div>
       
    </div>
    </div>
  )
}

export default Header