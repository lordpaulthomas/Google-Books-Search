import React, { Component } from "react";

import NavBar from './../../components/NavBar';
import SearchBar from './../../components/SearchBar';
import Footer from './../../components/Footer';
import BookCards from './../../components/BookCards';

class Search extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Footer />
      </div>
    )
  }
}

export default Search