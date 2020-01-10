import React from "react";
import PropTypes from "prop-types";
const RepoListItem = ({ repos }) => {
  const listData = repos.map(repo => (
    <li className="collection-item" key={repo.id}>
      <h5 className="red-text">{repo.name}</h5>
    </li>
  ));
  return listData;
};
RepoListItem.prototype = {
  repos: PropTypes.object.isRequired
};
export default RepoListItem;
