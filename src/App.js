import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layouts/navbar';
import Users from './Components/Users/users';
import User from './Components/Users/user';
import Axios from 'axios';
import Search from './Components/Layouts/search';
import Alert from './Components/Layouts/alert';
import About from './Components/Pages/about';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
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

  //Get single User
  getUser = async (text) => {
    const res = await Axios.get(
      `https://api.github.com/users/${text}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  //Get User Repo
  getUserRepo = async (text) => {
    const res = await Axios.get(
      `https://api.github.com/users/${text}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />

          <div className='container'>
            <Alert Alert={this.state.Alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      SearchUsers={this.SearchUsers}
                      clearUsers={this.clearUsers}
                      loading={this.state.loading}
                      Alert={this.Alert}
                    />
                    {this.state.loading ? (
                      'Loading...'
                    ) : (
                      <Users
                        loading={this.state.loading}
                        users={this.state.users}
                      />
                    )}
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    User={this.state.user}
                    loading={this.state.loading}
                    getUserRepo={this.getUserRepo}
                    repos={this.state.repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
