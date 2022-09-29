import React from 'react'
import './OrderNow.css'
function Sample() {
  return (
    <div className='container'>
    <div className='holder rounded  '>
    <div className="mini_container center form-group">
    <div className='header_section'>
    <div> <input type='text' className="form-control" placeholder='Enter your product'/>  </div>
   <select className="btn">
          <option selected>Choose Store</option>
          <option value="1">SIMBA | Kimironko</option>
          <option value="2">SIMBA | Gishushu</option>
          <option value="3">SIMBA | Kicukiro</option>
          <option value="4">SAWA</option>
        </select>
        <span class="caret"></span>
         
    </div>
      
        <div>
        <table class="table">
  <thead>
    <tr>
    
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><input type="checkbox" checked/></th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
     
    <th><input type="checkbox" checked/></th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      
    <th><input type="checkbox" checked/></th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
    
    </div>
            
    </div>
  )
}

export default Sample