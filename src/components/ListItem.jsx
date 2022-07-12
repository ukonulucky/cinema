import { PlayArrow, Add, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import { Link } from "react-router-dom"
import React, { useState } from 'react'
import "../styles/ListItem.css"
import movie from "../videos/movie.mp4"
function ListItem() {
    const [hovered, isHovered] = useState(false)
    console.log(hovered)
    return (
     <Link to="/movies"> 
      <div className="list"
      onMouseEnter={() => {
        isHovered(true)
          }}
          onMouseLeave={() => {
            isHovered(false)
          }}
      >
          <img src="data:image/jpeg;base64,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"
              alt="action movie" />
          {hovered && (<> <video autoPlay={ true } loop >
          
              <source src={ movie } type="video/mp4"/>
          </video>
          </>)}
          <div className="listInfo">
              <div className="listItem">
                  <PlayArrow className="icon" />
                  <Add  className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfo">
                  <span> 1 hour 14mins</span>
                  <span className="limit">+16</span>
                  <span> 1999</span>
              </div>
              <div className="desc">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, in! Perspiciatis, accusantium. Voluptatibus, laboriosam harum.
              </div>
              <div className="genre">
                <span>Action</span>
              </div>
         </div>
            </div>
            </Link>
  )
}

export default ListItem