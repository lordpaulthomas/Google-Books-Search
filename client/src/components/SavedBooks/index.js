import React, { Component } from "react"
import { ModalFooter, Modal, ModalHeader, ModalBody } from 'reactstrap';
import API from "../../utils/API"
import './../SearchBar/style.css'

class SavedBooks extends Component {
  state = {
    details: "collapse",
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  showDetails(details) {
    if (details === "collapse.show") {
      this.setState({ details: "collapse" })
    }
    else {
      this.setState({ details: "collapse.show" })
    }
  }


  deleteSavedArticle = id => {
    API.deleteSavedBooks(id)
      .then(res => {
        this.props.loadArticles()
      })
      .catch(err => console.log(err))
    this.toggle()
  }

  render() {
  
    return (
      <div className="container">
        <div className="card m-3 p-3 shadow border-warning z-index-2" >
          <div className="row no-gutters">
            <div className="col-md-4 col-sm-4 col-lg-4">
              <img src={this.props.thumbnail} className="card-img" alt="" />
            </div>
            <div className="col-md-8 col-sm-8 col-lg-8">
              <div className="card-body ml-5">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text"><small className="text-muted">{this.props.authors}</small></p>
                <p><a className="card-text" href={this.props.link}>Link to online book</a></p>
                <button onClick={() => this.deleteSavedArticle(this.props._id)} className="row btn card-btn btn-outline-danger">Remove</button>
                <p>
                  <button onClick={() => this.showDetails(this.state.details)} className="row mt-2 p-2 btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target="#bookDetails"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    onClick={() => this.showDetails(this.state.details)}>
                    Book Details
              </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ zIndex: '200' }} className={this.state.details} id="bookDetails">
          <div className="card card-body">
            <p className="card-text"><small>{this.props.description}</small></p>
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody className="text-center"id="modal-body">
            <h1>Book Removed</h1>
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    )
  }
}

export default SavedBooks