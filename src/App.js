import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layouts/navbar';
import Users from './Components/Users/users';
import User from './Components/Users/user';
import Axios from 'axios';
import Search from './Components/Layouts/search';
import Alert from './Components/Layouts/alert';
import About from './Components/Pages/about';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   const res = await Axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  const SearchUsers = async (text) => {
    const res = await Axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
    setAlert(null);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(true);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  //Get single User
  const getUser = async (text) => {
    const res = await Axios.get(
      `https://api.github.com/users/${text}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  //Get User Repo
  const getUserRepo = async (text) => {
    const res = await Axios.get(
      `https://api.github.com/users/${text}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar />

        <div className='container'>
          <Alert Alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Search
                    SearchUsers={SearchUsers}
                    clearUsers={clearUsers}
                    loading={loading}
                    Alert={showAlert}
                  />
                  {loading ? (
                    'Loading...'
                  ) : (
                    <Users loading={loading} users={users} />
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
                  getUser={getUser}
                  User={user}
                  loading={loading}
                  getUserRepo={getUserRepo}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
