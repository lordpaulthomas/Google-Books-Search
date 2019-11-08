import React, { Component } from "react";

import NavBar from './../../components/NavBar';
import Footer from './../../components/Footer';

class Saved extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="title" className="jumbotron bg-primary text-warning">
          Your Books
        </div>
        <Footer />
      </div>
    )
  }
}

export default Saved