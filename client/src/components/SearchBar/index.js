import React, { Component } from "react"
import BookCards from "./../BookCards"
import axios from "axios"
import './style.css'
const APIkey = "AIzaSyC5MbQE-0lUqvgXhxVRhDCK05t0nvMrphM";


class SearchBar extends Component {
  state = {
    keyword: "",
    authorSearch: "",
    books: [],
    title: "",
    authors: [],
    description: "",
    image: "",
    link: "",
    authorSearchTerm: "",
    titleSearchTerm: "red rising",
  }

  handleKeywordInputChange = event => {
    const { name , value } = event.target;
    this.setState({
      keyword: value
    });
  };

  handleAuthorInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      authorSearch: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.searchForBook(this.state.keyword, this.state.authorSearchTerm)
    console.log(this.state.keyword, "--", this.state.authorSearch )
  }

  componentDidMount () {

  }

  searchForBook(search, author) {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+inauthor:${author}&key=` + APIkey)
      .then(response => {

        this.setState({
          books: response.data.items,
          title: response.data.items[1].volumeInfo.title,
          authors: response.data.items[1].volumeInfo.authors,
          description: response.data.items[1].volumeInfo.description,
          image: response.data.items[1].volumeInfo.imageLinks.thumbnail,
          link: response.data.items[1].accessInfo.webReaderLink
        })

        console.log(response.data)
        console.log("Title - ", response.data.items[0].volumeInfo.title)
        console.log("Author(s) - ", response.data.items[0].volumeInfo.authors)
        console.log("Description - ", response.data.items[0].volumeInfo.description)
        console.log("Image - ", response.data.items[0].volumeInfo.imageLinks.thumbnail)
        console.log("Link - ", response.data.items[0].accessInfo.webReaderLink)
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    return (

      <div id="box" className="container-fluid">
        <h1 id="title" className="jumbotron bg-primary text-center text-warning">Search for Books by Title, Author or Keywords</h1>
        <form className="jumbotron bg-primary">
          <div className="form-row">
            <div className="col">
              <input onChange={this.handleKeywordInputChange} type="text" className="form-control" placeholder="Title or Keyword" />
            </div>
            <div className="col">
              <input onChange={this.handleAuthorInputChange} type="text" className="form-control" placeholder="Author" />
            </div>
          </div>
          <div className="text-center">
            <button onClick={this.handleSubmit} className="btn btn-outline-warning mt-3 col-8">Submit</button>
          </div>
        </form>
        {
          this.state.books.map(book => {
            if (book.volumeInfo.imageLinks) {
              return (
                <div>
                  <BookCards title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail}
                    description={book.volumeInfo.description}
                    link={book.accessInfo.webReaderLink}
                  />
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default SearchBar