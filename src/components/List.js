import React, { Component } from "react";
import ListItem from "./ListItem";
import axios, { API_PARAMS } from "../api";
import Spiner from "./layout/Spiner";
import Search from "./layout/Search";
class List extends Component {
  state = {
    users: [],
    showClear: false
  };
  async componentDidMount() {
    const { data } = await axios.get("/users", {
      params: {
        ...API_PARAMS
      }
    });
    this.setState({ users: data });
  }
  renderUserList = users => {
    if (users.length === 0 || !users) {
      return <Spiner />;
    }
    return users.map(user => <ListItem user={user} key={user.id} />);
  };
  renderClearButton = () => {
    const btn = (
      <div className="row mtb-0">
        <button
          type="submit"
          className="btn grey "
          style={{ width: "100%" }}
          onClick={this.onClear}
        >
          Clear
        </button>
      </div>
    );
    return this.state.showClear ? btn : "";
  };
  onSearch = async term => {
    this.setState({ showClear: true });
    this.setState({ users: [] });
    const { data } = await axios.get("/search/users", {
      params: {
        ...API_PARAMS,
        q: term
      }
    });
    this.setState({ users: data.items });
  };
  onClear = async e => {
    e.preventDefault();
    const { data } = await axios.get("/users", {
      params: {
        ...API_PARAMS
      }
    });
    this.setState({ users: data });
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <Search onSearch={this.onSearch} />
        {this.renderClearButton()}
        <div className="row">{this.renderUserList(users)}</div>
      </div>
    );
  }
}

export default List;
