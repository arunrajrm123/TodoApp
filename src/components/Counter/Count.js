import React, { useState } from 'react'

const increament=(count,setCount)=>{
  setCount((prevCount)=>prevCount+1)
}
const decreament=(count,setCount)=>{
  setCount((prevCount)=>prevCount>0?1:prevCount-1)
}
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
    <button onClick={()=>increament(count,setCount)} >increament</button>
    <button onClick={()=>decreament(count,setCount)}>decreament</button>
    </div>
  );
}

export default Counter