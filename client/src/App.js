import React, { Component } from 'react';
import axios from 'axios';

const APIkey = "AIzaSyC5MbQE-0lUqvgXhxVRhDCK05t0nvMrphM";




class App extends Component {

state = {
  title: "",
  authors: [],
  description: "",
  image: "",
  link: ""
}

  componentDidMount() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key='+ APIkey)
      .then(response => {
        this.setState({
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
      <div >
        <h1>{this.state.title}</h1>
        <h2>{this.state.authors.slice(" ")}</h2>
        <h3>{this.state.description}</h3>
        <img src={this.state.image} alt=""/>
        <a href={this.state.link}>Link to online book</a>
      </div>
    );
  }
}
export default App;
