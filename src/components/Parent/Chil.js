import React, { useState } from 'react'

const Chil = ({p}) => {
  const [y, setYes] = useState('');

  const click = () => {
    setYes(p);
  };
  const hide = () => {
    setYes("");
  };

  return (
    <div>
      <button onClick={click}>Click Me</button>
      <button onClick={hide}>Hide me</button>
      <p>{y}</p>
    </div>
  );
}

export default Chil