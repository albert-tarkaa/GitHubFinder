import React, { Component } from 'react';

class Search extends Component {
  state = { text: '' };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.SearchUsers(e.target.value);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmitHandler}
          className='form'
          value={this.state.text}
          onChange={this.onChangeHandler}
        >
          <input type='text' name='text' placeholder='Search Users...' />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
