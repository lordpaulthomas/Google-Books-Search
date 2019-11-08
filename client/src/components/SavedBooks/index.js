import React, { Component } from "react"

class SavedBooks extends Component {
state = {
  details: "collapse"
}

  render() {
    return (
      <div className="card m-3 p-3 shadow border-warning z-index-2" style={{ width: '55vw', height: "20rem" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={this.props.thumbnail} style={{ width: "16rem", height: "16rem" }} className="card-img mt-3" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body ml-5">
              <h5 className="card-title">{this.props.title}</h5>
              {/* <p className="card-text"><small>{this.props.description}</small></p> */}
              <p className="card-text"><small class="text-muted">{this.props.authors}</small></p>
              <a className="row card-text p-2" href={this.props.link}>Link to online book</a>
              <button className="row btn btn-outline-secondary">Save Book</button>
              <p>
              <button className="row mt-2 p-2 btn btn-primary"
                type="button"
                data-toggle="collapse"
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
    )
  }
}

export default SavedBooks