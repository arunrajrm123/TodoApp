import React from 'react'

import  { useState, useEffect } from 'react';
import axios from 'axios';

const CounterApp = () => {
  const [count,setCount]=useState(0)
  const [user,setUser]=useState("")
  useEffect(() => {
    // Fetch user information from the public API based on the count value
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [count]);
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count<1?0:count-1)
  }
  return (
    <div>
      
      {count}
      {user.name}
      {user.email}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterApp;
