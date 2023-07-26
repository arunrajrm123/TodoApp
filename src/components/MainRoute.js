import React from 'react'
import Home from "./Home"
import Contact from "./Contact"
import { Routes,Route,Link } from 'react-router-dom'
const MainRoute = () => {
  return (
    <div>
        <u1><li><Link to="/">Home</Link> </li>
        <li><Link to="/contact">contact</Link> </li>
        </u1>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  )
}

export default MainRoute