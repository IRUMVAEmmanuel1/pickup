import React from 'react'
import logo from '../asset/huzamart logo.JPG'
import { Link } from 'react-router-dom'


import './Header.css'
function Header() {
  return (
    <div className=''>
    <div className='cont bg-white shadow-md'>
        <div className=''>
        
       <Link to={"/LandingPage"} ><img src={logo} alt="huzalogo" width="150px" /> </Link>
        
        </div>
        <div className=''>
      <Link to={"/OrderNow"}> <button  className='btn' style={{backgroundColor:'#1A7431',color:'white', fontSize:'13px'}}>Explore More</button></Link>
            
        </div>
       
    </div>
    </div>
  )
}

export default Header