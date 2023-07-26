

import React, { useState } from 'react';


const AddTask2 = () => {
  const [propText, setPropText] = useState('');

  const handleButtonClick = () => {
    // Update the propText when the button is clicked
    setPropText('This is a paragraph prop passed from the parent component!');
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleButtonClick}>Show Prop in Child</button>
      {/* Pass the propText as a prop to the ChildComponent */}
  
    </div>
  );
};

export default AddTask2;
