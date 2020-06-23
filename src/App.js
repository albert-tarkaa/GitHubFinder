import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layouts/navbar';
import Users from './Components/Users/users';
import Axios from 'axios';
import Search from './Components/Layouts/search';

class App extends Component {
  state = {
    users: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await Axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  SearchUsers = () => {};

  render() {
    return (
      <div className='App'>
        <Navbar />

        <div className='container'>
          <Search SearchUsers={this.SearchUsers} />
          {this.state.loading ? (
            'Loading...'
          ) : (
            <Users loading={this.state.loading} users={this.state.users} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
