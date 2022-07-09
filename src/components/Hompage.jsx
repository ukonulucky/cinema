import React, { useEffect } from 'react'
import "../styles/home.css"
import pic from "../images/software engineer3.jpg"
import Navbar from './Navbar'
import Features from './Features'
import MovieList from './MovieList'
function Hompage() {
 
  return (
      <div className="home">
      <Navbar />
      <Features type="movie" />
      <MovieList />
      <MovieList />
      <MovieList />
      
    </div>
  )
}

export default Hompage