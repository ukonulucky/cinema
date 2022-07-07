import React from 'react'
import "../styles/home.css"
import pic from "../images/software engineer3.jpg"
import Navbar from './Navbar'
import Features from './Features'
function Hompage() {
  return (
      <div className="home">
      <Navbar />
    <Features />
      
    </div>
  )
}

export default Hompage