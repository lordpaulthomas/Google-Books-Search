import React, { Component } from "react";
import API from "./../../utils/API"
import NavBar from './../../components/NavBar';
import Footer from './../../components/Footer';
import SavedBooks from './../../components/SavedBooks';
class Saved extends Component {
  state = {
    savedBooks: []
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getSavedBooks()
      .then(res => {
        this.setState({ savedBooks: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="title" className="jumbotron bg-primary text-warning">
          Your Books
        </div>
        {
          this.state.savedBooks.map(book => {
            return (
              <SavedBooks
                _id={book._id}
                key={book._id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                thumbnail={book.image}
                link={book.link}
                loadArticles={this.loadArticles}
              />
            )
          })
        }
        <Footer />
      </div>
    )
  }
}

export default Saved