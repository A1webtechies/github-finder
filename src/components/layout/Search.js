import React, { Component } from "react";
import M from "../../../node_modules/materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
class Search extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };
  state = {
    term: ""
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.term.length === 0) {
      M.toast({ html: "Please Type something" });
    } else {
      this.props.onSearch(this.state.term);
    }
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
