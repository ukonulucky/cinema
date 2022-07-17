import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef } from 'react'
import "../styles/MoviesList.css"
import ListSlick from "../components/ListSlick"


function MovieList() {
 const eleRef = useRef()


    // const handleClick = (direction) => {
    //     if (direction === "left") {
    //    const distance =   eleRef.current.getBoundingClientRect().x - 50
    //         eleRef.current.style.transform = `translateX(${(-233 + distance)}px)`
    //     }
    //     if (direction === "right") {
    //         const distance =   eleRef.current.getBoundingClientRect().x - 50
    //         eleRef.current.style.transform = `translateX(${(233 + distance)}px)`
    //     }
    // }
  return (
      <div className="MovieList">
          <div className="listTitle"> Continue to Watch</div>
          <div className="wrapper">
          <div className="listContainer">
                  <ListSlick />
              </div>
          </div>
    </div>
  )
}

export default MovieList