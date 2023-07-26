import React from 'react'

const Dvis = ({m}) => {

  const arr=m.map(item=>(<div style={{ backgroundColor: 'blue', color: 'white', padding: '10px', margin: '10px' }} key={item.name}>
    <p1  style={{color:"white", fontSize: '34px',fontWeight:"bold"}}>{item.name}</p1>
    <br/>
    <p1>{item.email}</p1>
    </div>))
  return (
   
    <div>
       {arr}


    </div>
  )
}

export default Dvis