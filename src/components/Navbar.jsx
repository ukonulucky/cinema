import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "../styles/Navbar.css"
import pic from "../images/software engineer3.jpg"

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = event => {
           setIsScrolled(window.scrollY > 100 ? true: false)
        };
    
        window.addEventListener('scroll', handleScroll);
     
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
      <div className={isScrolled === true  ? "navbar2" : "navbar" }>
          <div className="container">
              <div className="left">
                  <img src="data:image/png;base64,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" alt="netflix" />
                  <span>
                  <Link to="/" className="link" >
                      Homepage
                 </Link>
                 </span>
                  <span>
                  <Link to="series" className="link"  >
                      Series
                  </Link>
                 </span>
                  
                  <span>
                  <Link to="movies" className="link"  >
                      Movies
                  </Link>
                  </span>

                  <span>
                  <Link to="news" className="link"  > 
                  New and Popular
                  </Link>
                </span>
                  
                  <span>
                  <Link to="list" className="link"  >
                  My List</Link>
                 </span>



              </div>
              <div className="right">
                  <Search  className="icon"/>
                  <span>KID</span>
                  <Notifications className="icon" />
                  <img src={ pic } alt="averter" />
                  <div className="profile">
                      <ArrowDropDown className="icon" />
                      <div className="options">
                          <span>Settings</span>
                          <span>
                              <Link to="/signin">
                              Log out
                              </Link>
                          </span>
                      </div>
                </div>
              </div>
          </div>
     </div>
  )
}

export default Navbar
