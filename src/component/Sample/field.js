import React from 'react'
import './sample.css'
function field() {
  return (
    <div className='sample mt-8 ml-4 mr-4'>

<form action="#">
  <fieldset>
    <legend>Simple fieldset</legend>
    <input type="radio" id="radio" />
    <label for="radio">Spirit of radio</label>
  </fieldset>
</form>

    </div>
  )
}

export default field