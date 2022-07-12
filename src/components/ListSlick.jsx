import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ListItem from "../components/ListItem"

export default class ListSlick extends Component {

  render() {
    const settings = {
        infinite: true,
        speed: 500,
      
        responsive: [
            {
              breakpoint: 5000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true
              }
            },
            {
                breakpoint: 630,
                settings: {
                  slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
              }
          ]
    };
    return (
      <div >
            <Slider {...settings} >
        
           <ListItem />
         
         
          <ListItem />
        
          <div>
          <ListItem />
          </div>
          <div>
          <ListItem />
          </div>
          <div>
          <ListItem />
          </div>
          <div>
          <ListItem />
          </div>
          <div>
          <ListItem />
          </div>
        </Slider>
      </div>
    );
  }
}