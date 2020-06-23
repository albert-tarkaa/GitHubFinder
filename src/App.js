import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layouts/navbar';
import Users from './Components/Users/users';
import Axios from 'axios';
import Search from './Components/Layouts/search';
import Alert from './Components/Layouts/alert';

class App extends Component {
  state = {
    users: [],
    loading: true,
    Alert: null,
  };

  // async componentDidMount() {
  //   const res = await Axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  SearchUsers = async (text) => {
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false, Alert: null });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: true });
  };

  Alert = (msg, type) => {
    this.setState({ Alert: { msg, type } });
    setTimeout(() => {
      this.setState({ Alert: null });
    }, 5000);
  };

  render() {
    return (
      <div className='App'>
        <Navbar />

        <div className='container'>
          <Alert Alert={this.state.Alert} />
          <Search
            SearchUsers={this.SearchUsers}
            clearUsers={this.clearUsers}
            loading={this.state.loading}
            Alert={this.Alert}
          />
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
