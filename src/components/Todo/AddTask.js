import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value,setValue]=useState("")
    const addItem=()=>{
        if (value === "") {
            alert("Please enter a task before clicking ADD.");
          } if(value === Number(value)) {
            alert("its a string");
            
          }
          else {
            addTask(value);
            setValue("");
          }
    }
    
  return (
    
        <div className="input-conatiner">
        <input className="input-div" type="text" placeholder="Addtask" value={value}
        onChange={(e)=>{setValue(e.target.value)}}/>
        
        <button onClick={addItem}>ADD</button>
        </div>
   
  )
}


export default AddTask