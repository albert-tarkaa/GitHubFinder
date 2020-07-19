import React, { useState, useContext } from 'react';
import GithubContext from '../../Context/Github/GithubContext';
import AlertContext from '../../Context/Alert/AlertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [Text, SetText] = useState('');
  const { loading, clearUsers, SearchUsers } = githubContext;
  const onChangeHandler = (e) => SetText(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Text === '') {
      setAlert('Please enter a search value', 'light');
    } else {
      SearchUsers(Text);
      SetText('');
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className='form'
        value={Text}
        onChange={onChangeHandler}
      >
        <input type='text' name='text' placeholder='Search Users...' />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {loading ? (
        ''
      ) : (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
