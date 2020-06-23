import React, { Component } from 'react';

class Search extends Component {
  state = { text: '' };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.Alert('Please enter a search value', 'light');
    } else {
      this.props.SearchUsers(this.state.text);
      this.setState({ text: '' });
    }
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
        {this.props.loading ? (
          ''
        ) : (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
