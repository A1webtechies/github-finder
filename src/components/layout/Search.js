import React, { Component } from "react";

class Search extends Component {
  state = {
    term: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  };
  onChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="row grey lighten-3 " style={{ marginTop: "15px" }}>
        <form onSubmit={this.onSubmit}>
          <div className="row ">
            <div className="input-field col s12 m12">
              <input
                type="text"
                placeholder="Search User"
                className=""
                name="term"
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="center-align">
              <button className="btn " type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
