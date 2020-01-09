import React from "react";

const RepoListItem = ({ repos }) => {
  const listData = repos.map(repo => (
    <li className="collection-item" key={repo.id}>
      <h5 className="red-text">{repo.name}</h5>
    </li>
  ));
  return listData;
};

export default RepoListItem;
