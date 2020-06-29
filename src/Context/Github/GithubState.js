import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import { SEARCH_USERS } from './Types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
};
