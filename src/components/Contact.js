import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
const Conatact = () => {
  const [inc,InSet]=useState(0)
  const handle=()=>{
    InSet(inc+1)
  }
  return (
    <div className='bg-primary'>
      <h1>{inc}</h1>
       <button style={{width:20,height:20}} onClick={()=>handle(inc,InSet)}>
        </button></div>
   
  )

}

export default Conatact