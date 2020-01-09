import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios, { API_PARAMS } from "../api";
import Spiner from "./layout/Spiner";
import RepoList from "./RepoList";
class UserDetails extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    axios
      .get(`/users/${this.props.match.params.user}`, {
        params: {
          ...API_PARAMS
        }
      })
      .then(res => this.setState({ user: res.data }));
  }
  renderDetails(user) {
    if (user === undefined || Object.keys(user).length === 0 || !user) {
      return (
        <div className="row " style={{ marginTop: "20%" }}>
          <Spiner />
        </div>
      );
    }
    const {
      avatar_url,
      hireable,
      name,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
      location,
      html_url,
      login,
      company,
      blog
    } = user;
    return (
      <div className="top-user-details">
        {/* Back Home button */}
        <Link to="/" className="btn grey mt-2">
          Back To Home
        </Link>
        {/* Hireable */}
        <div className="btn grey white ml-3 mt-2 ">
          <h5 className="hireable-text ">Hireable:</h5>
          {hireable ? (
            <i className="material-icons icon-done">done</i>
          ) : (
            <i className="material-icons icon-clear">clear</i>
          )}
        </div>
        {/* Bio img ect */}
        <div className="row card">
          <div className="col m6">
            <div className="center-align">
              <img
                src={avatar_url}
                alt="avatar"
                height="200px"
                className="circle "
                style={{ verticalAlign: "middle" }}
              />
            </div>
            <div className="card-content">
              <div className="center-align">
                <h5>{name}</h5>
                <>{location && <h6>{location}</h6>}</>
              </div>
            </div>
          </div>
          <div className="col m6">
            {bio && (
              <>
                <h5>Bio:</h5>
                <p>{bio}</p>
              </>
            )}
            <a className="btn black" href={html_url}>
              Vist Github Profile
            </a>
            <h6>Username: {login}</h6>
            <>{company && <h6>Company: {company}</h6>}</>
            <>{blog && <h6>Website: {blog}</h6>}</>
          </div>
        </div>
        <div className="row ">
          <div className="col m8 offset-m2 card">
            <div className="center-align">
              <div className="chip green">Public Gists {public_gists}</div>
              <div className="chip black">Public Repos {public_repos}</div>
              <div className="chip red">Follwers {followers}</div>
              <div className="chip orange">Following {following}</div>
            </div>
          </div>
        </div>
        <RepoList user={login} />
      </div>
    );
  }
  render() {
    const { user } = this.state;
    return <>{this.renderDetails(user)}</>;
  }
}

export default UserDetails;
