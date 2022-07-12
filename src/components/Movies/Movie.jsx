import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import movie from "../../videos/movie.mp4"
import "../../styles/movie.css"
import { Link } from "react-router-dom"
function Movie() {
  return (
      <div>
          <div className="watch">
              <div className="back">
                  <Link to="/">
                  <ArrowBackOutlined />
                  Home
                  </Link>
              </div>
              <video autoPlay={true}
                  className="video"
                  progress controls
                  src={ movie }></video>
          </div>
    </div>
  )
}

export default Movie