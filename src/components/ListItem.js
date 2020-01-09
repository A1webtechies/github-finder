import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ListItem = props => {
  const { login, avatar_url } = props.user;
  return (
    <div>
      <div className="col s12 m4">
        <div className="card">
          <div className="center-align">
            <img className="circle" src={avatar_url} alt="" height="80px" />
          </div>
          <div className="card-content">
            <div className="center-align">
              <h5>{login}</h5>
              <Link to={`/users/${login}`} className="btn">
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ListItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default ListItem;
