import React from 'react'
import './OrderNow.css'
import Header from './Header'
function OrderNow() {
  return (
    <div>
    <Header/>
    <div className='containerr'>

      <div className="outer" style={{width:'200px'}}>
          <div className="subContainer ">
            
           <div className='centered'>
           <fieldset class="scheduler-border">
           <div classname="holder mt-8">
           

           <input type="text" className='form-control col-12 mt-8 ml-6' placeholder='Type item name here'/>
           
            </div>
            </fieldset>
            <div className='mt-8 '> 
            <select className="btn ">
          <option selected>Choose Store</option>
          <option value="1">SIMBA | Kimironko</option>
          <option value="2">SIMBA | Gishushu</option>
          <option value="3">SIMBA | Kicukiro</option>
          <option value="4">SAWA</option>
        </select>
        <span class="caret"></span>
            </div>
            <div><button className='btn mt-8 p-22'  style={{backgroundColor:'#1A7431',color:'white', fontSize:'13px'}}>Add</button></div>
            
           
           </div>

           {/* Table */}


           <div className='my table mt-12 p-8 '>
                          <table className="table" style={{overflow:"scroll"}}>
                  {/* <thead>
                    <tr>
                    
                      
                      
                      <th scope="col">Products</th>
                    </tr>
                  </thead> */}
                  <tbody style={{height: "100%"}}>
                    <tr>
                      <th><input type="checkbox" checked="checked" /></th>
                      <td>Irish potatoes, sweet potatoes, cabbages, oil 1L, banana </td>
                      
                    </tr>
                    <tr>
                      <th><input type="checkbox" checked="checked" /></th>
                      <td>Irish potatoes, sweet potatoes, cabbages, oil 1L, banana </td>
                      
                    </tr>
                    <tr>
                      <th><input type="checkbox" checked="checked" /></th>
                      <td>Irish potatoes, sweet potatoes, cabbages, oil 1L, banana </td>
                      
                    </tr>
                    <tr>
                      <th><input type="checkbox" checked="checked" /></th>
                      <td>Irish potatoes, sweet potatoes, cabbages, oil 1L, banana </td>
                      
                    </tr>
                    
                    <tr>
                      
                    <th>
                    <input type="checkbox" style={{border:"2px dotted",MozAnimation:"#1A7431",display:"block" ,backgroundColor:"#1A7431", color:"#1A7431"}} />
                    

                    </th>
                      <td>Cassava flour and fresh juice</td>
                      
                    </tr>
                    <tr>
                      
                      <th>
                      <input type="checkbox" style={{border:"2px dotted",MozAnimation:"#1A7431",display:"block" ,backgroundColor:"#1A7431", color:"#1A7431"}} />
                      
  
                      </th>
                        <td>Cassava flour and fresh juice</td>
                        
                      </tr>
                      <tr>
                      
                      <th>
                      <input type="checkbox" style={{border:"2px dotted",MozAnimation:"#1A7431",display:"block" ,backgroundColor:"#1A7431", color:"#1A7431"}} />
                      
  
                      </th>
                        <td>Cassava flour and fresh juice</td>
                        
                      </tr>
                    
                  </tbody>
                  
                </table>
                <div className='service'>
                  <p>Service fee</p> <p>1000 RWF</p>
                </div>
                <div class="line-3">
                  <hr />
                </div>
                <div className='footer mt-6 ml-72 '>
                <div className='clear mt-2' style={{cursor:"pointer"}}>Clear All</div>
                <div className='confirm'><button className='btn' style={{backgroundColor:'#1A7431',color:'white', fontSize:'13px'}}>Confirm and Pay</button></div>

                </div>

            
            </div>
     

            </div>
            
            
          </div>
      </div>
      </div>
    
    
  )
}

export default OrderNow