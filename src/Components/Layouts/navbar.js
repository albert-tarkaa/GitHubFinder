import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar bg-primary'>
        <h3>
          <Link to='/'>
            {' '}
            <i className='fab fa-github' /> GitHub Finder
          </Link>
        </h3>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
