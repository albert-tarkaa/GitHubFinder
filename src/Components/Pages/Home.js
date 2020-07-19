import React, { Fragment } from 'react';
import Search from '../Layouts/search';
import Users from '../Users/users';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
