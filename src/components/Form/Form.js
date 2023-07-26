import React, { useRef,useEffect, useState } from 'react'

const Form = () => {
  

   
      const [inputValue, setInputValue] = useState('');
    
      const handleChange = (e) => {
        setInputValue(e.target.value);
      };
    
      return (
        <input type="text" value={inputValue} onChange={handleChange} />
      );
 
     };
export default Form