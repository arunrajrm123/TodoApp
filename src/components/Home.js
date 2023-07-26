import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const Home = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      {showMessage && <p>Hello, I am shown!</p>}
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>
    </div>
  );
};

export default Home