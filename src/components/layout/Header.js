import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    <div>
      <nav className="teal">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              {props.title}
            </Link>
            <a href="!#" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="!#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Side Nav */}
      <ul id="mobile-nav" className="sidenav">
        <li className="input-field  find">
          <input
            placeholder="Enter your Query Here"
            type="text"
            className="gery-text"
            id="search"
          />
        </li>
        <li>
          <button className="ml-3 white teal-text waves-effect waves-light btn">
            Search
          </button>
        </li>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <a href="!#">About</a>
        </li>
      </ul>
    </div>
  );
};

Header.defaultProps = {
  title: "Github"
};
Header.propTypes = {
  title: PropTypes.string.isRequired
};
export default Header;
