import React from 'react';

const UserItem = (props) => {
  const { id, login, html_url, avatar_url } = props.user;
  return (
    <div className='card text-center' key={id}>
      <img
        src={avatar_url}
        alt={props.login}
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;