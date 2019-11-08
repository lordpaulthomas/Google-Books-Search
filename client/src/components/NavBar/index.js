import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./style.css"



class NavBar extends Component {

  render() {
    return (
      <div id="nav" className="bg-warning">
        <ul className="nav nav-tabs">
          <h1  className="ml-3 mr-3 text-primary">Google Books</h1>
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
              Saved
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar