import React, { Component } from "react"
import API from "../../utils/API"

class BookCards extends Component {
  state = {
    details: "collapse"
  }

  saveBook = props => {
    const savedBook = {
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.thumbnail,
      link: props.link
    }

    API.saveBook(savedBook)
      .then(res => {
        console.log("Saved")
      })
      .catch(err => console.log(err));

    alert("Book Saved")
  }

  showDetails(details){
    if(details === "collapse.show"){
      this.setState({ details: "collapse"})
    }
    else{
      this.setState({details: "collapse.show"})
    }
  }

  render() {
    return (
      <div className="container">
        <div className="card m-3 p-3 shadow border-warning" style={{width: '55vw', height: "20rem" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props.thumbnail} style={{ width: "16rem", height: "16rem" }} className="card-img mt-3" alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body ml-5">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text"><small className="text-muted">{this.props.authors}</small></p>
                <a className="row card-text p-2 float-middle" href={this.props.link}>Link to online book</a>
                <button onClick={() => this.saveBook(this.props)} className="row btn btn-outline-secondary">Save Book</button>
                <p>
                  <button className="row mt-2 p-2 btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target="#bookDetails"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={() => this.showDetails(this.state.details)}>
                    Book Details
              </button>
                </p>
                <div style={{zIndex: '200'}} className={this.state.details} id="bookDetails">
                  <div className="card card-body">
                    <p className="card-text"><small>{this.props.description}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookCards