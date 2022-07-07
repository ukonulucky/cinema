import { Info, InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'
import cinema from "../images/cinema.jpg"
import action from "../images/action.jpeg"
import "../styles/features.css"
function Features() {
  return (
      <div className="features">
          <img src={cinema} alt="cinema" />
          <div className="info">
              <div className="details">
                  <img src={ action } alt="action" />
                  <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing
                      elit. Adipisci fuga
                      velit cum in harum nam nesciunt,
                      dolor ab provident iste.
                  </span>
              </div>
              <div className="button">
                  <button className="play">
                      <PlayArrow />
                      <span>Play</span>
                  </button>
                  <button className="more">
                      <InfoOutlined />
               <span> More </span>
                  </button>
              </div>
          </div>

    </div>
  )
}

export default Features