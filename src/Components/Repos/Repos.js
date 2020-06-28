import React from 'react';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
