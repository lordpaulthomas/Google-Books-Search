import React, { Component } from "react"
import API from "../../utils/API"

class SavedBooks extends Component {
  state = {
    details: "collapse.show"
  }

  showDetails(details){
    if(details === "collapse.show"){
      this.setState({ details: "collapse"})
    }
    else{
      this.setState({details: "collapse.show"})
    }
  }


  deleteSavedArticle = id => {
    API.deleteSavedBooks(id)
      .then(res => this.props.loadArticles())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <div className="card m-3 p-3 shadow border-warning z-index-2" style={{ width: '55vw', height: "20rem" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props.thumbnail} style={{ width: "16rem", height: "16rem" }} className="card-img mt-3" alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body ml-5">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text"><small className="text-muted">{this.props.authors}</small></p>
                <a className="row card-text p-2" href={this.props.link}>Link to online book</a>
                <button onClick={() => this.deleteSavedArticle(this.props._id)} className="row btn btn-outline-danger">Remove</button>
                <p>
                  <button onClick={()=> this.showDetails()} className="row mt-2 p-2 btn btn-primary"
                    type="button"
                    data-toggle={this.state.details}
                    data-target="#bookDetails"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={this.bookDetails}>
                    Book Details
              </button>
                </p>
                <div className={this.state.details} id="bookDetails">
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

export default SavedBooks