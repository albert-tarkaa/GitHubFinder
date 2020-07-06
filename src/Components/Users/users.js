import React, { useContext } from 'react';
import UserItem from './userItem';
import GithubContext from '../../Context/Github/GithubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  return (
    <div style={userStyle}>
      {loading
        ? 'Loading...'
        : users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
