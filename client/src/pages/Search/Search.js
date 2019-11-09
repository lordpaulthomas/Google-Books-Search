import React, { Component } from "react";

import NavBar from './../../components/NavBar';
import SearchBar from './../../components/SearchBar';
import Footer from './../../components/Footer';


class Search extends Component {
  render() {
    return (
      <div className="bg-warning">
        <NavBar />
        <div className="text-center">
          <SearchBar />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Search