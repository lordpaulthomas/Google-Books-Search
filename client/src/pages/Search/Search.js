import React, { Component } from "react";

import NavBar from './../../components/NavBar';
import SearchBar from './../../components/SearchBar';
import Footer from './../../components/Footer';
import BookCards from './../../components/BookCards';

class Search extends Component {
  render() {
    return (
      <div className="bg-warning">
        <NavBar />
        <SearchBar />
        <Footer />
      </div>
    )
  }
}

export default Search