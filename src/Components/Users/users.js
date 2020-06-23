import React, { Component } from 'react';
import UserItem from './userItem';

const Users = (props) => (
  <div style={userStyle}>
    {props.users.map((user) => (
      <UserItem key={user.id} user={user} />
    ))}
  </div>
);

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
