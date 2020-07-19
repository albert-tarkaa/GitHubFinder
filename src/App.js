import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layouts/navbar';
import User from './Components/Users/user';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
import Alert from './Components/Layouts/alert';
import About from './Components/Pages/about';
import GithubState from './Context/Github/GithubState';
import AlertState from './Context/Alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
