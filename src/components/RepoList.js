import React, { Component } from "react";
import RepoListItem from "./RepoListItem";
import axios, { API_PARAMS } from "../api";
import Spiner from "./layout/Spiner";
class RepoList extends Component {
  state = {
    repos: []
  };
  async componentDidMount() {
    const { user } = this.props;
    const { data } = await axios.get(`/users/${user}/repos`, {
      params: {
        ...API_PARAMS,
        per_page: 5,
        sort: "created"
      }
    });
    this.setState({ repos: data });
  }

  render() {
    const { repos } = this.state;
    return (
      <div className="row">
        <h4 className="center-align">Top Repos</h4>
        <ul className="collection">
          {repos.length === 0 ? <Spiner /> : <RepoListItem repos={repos} />}
        </ul>
      </div>
    );
  }
}

export default RepoList;
