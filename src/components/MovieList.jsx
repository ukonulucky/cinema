import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React from 'react'
import "../styles/MoviesList.css"
import ListItem from "../components/ListItem"
function MovieList() {
  return (

      <div className="MovieList">
          <div className="listTitle"> Continue to Watch</div>
          <div className="wrapper">
              <ArrowBackIosOutlined  className="sliderArrow left"/>
              <div className="listContainer">
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
                  <ListItem />
              </div>
              <ArrowForwardIosOutlined className="sliderArrow right" />
          </div>
    </div>
  )
}

export default MovieList