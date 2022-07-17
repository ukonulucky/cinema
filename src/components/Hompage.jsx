import React, { useEffect } from 'react'
import "../styles/home.css"
import pic from "../images/software engineer3.jpg"
import Navbar from './Navbar'
import Features from './Features'
import MovieList from './MovieList'
import Movie from './Movies/Movie'
import MenuCollapsed from './MenuCollapsed'
function Hompage() {
  return (
    <div className="home">
       <div className="home_sidebar">
      <MenuCollapsed />
      </div>
      <div className="home_main">
        <div className="nav">
        <Navbar />
     </div>
       <Features type="movie" /> 
      <MovieList />
       <MovieList />
      <MovieList /> 
       <MovieList />
     </div>
    
    

    </div>
  )
}

export default Hompage