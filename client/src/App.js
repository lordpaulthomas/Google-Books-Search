import React, { Component } from 'react';
import axios from 'axios';
import BookCards from "./components/BookCards"
const APIkey = "AIzaSyC5MbQE-0lUqvgXhxVRhDCK05t0nvMrphM";




class App extends Component {

  state = {
    books: [],
    title: "",
    authors: [],
    description: "",
    image: "",
    link: "",
    authorSearchTerm: "",
    titleSearchTerm: "red rising",
  }

  componentDidMount() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.titleSearchTerm}+inauthor:${this.state.authorSearchTerm}&key=` + APIkey)
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
    );
  }
}
export default App;
