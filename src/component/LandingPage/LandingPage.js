import React from 'react'
import { Link } from 'react-router-dom'
// import OrderNow from './OrderNow'
import './Land.css'
import pick from '../asset/glocery.JPG'
import Header from './Header'
function LandingPage() {
  return (
 <div> 
 <Header />
<div className="container">

  <div className="row">
    <div className="right col-6">
    <div className='order'>
    <p className='title text-7xl' > Order & Pick </p>
     <p className='title text-7xl' >up from <span style={{color: '#1A7431'}}> Store </span> </p>

     <div className='saybye'> 
        <p >Say bye to long queues on your favorite <br />shops. <b>Shop in style!</b></p>
     </div>
    </div>
    
    <div className='buttons'>
        <div>
             <button className='orderNow' style={{backgroundColor: '#1A7431', color:'white'}}><span style={{fontSize:'13px',fontWeight:'bold' }}><Link to="../LandingPage/OrderNow.js">Order Now</Link></span></button>
        </div>
        {/* <div style={{marginLeft: -20}}>
            <p className='contact' style={{ fontWeight:'bold',fontSize:'13px'}}>Contact Us</p>
        </div> */}
        
    </div>
    </div>
    <div className=" cont col-6">
      {/* <div className='bgPhoto' style={{backgroundColor:'#1A7431'}}>
      

      </div> */}
        <div className='worker'>
         <img src={pick} alt="Pick" width='1000px' />

        


        </div> 

    </div>
  </div>
</div>
</div>  
  )
}

export default LandingPage