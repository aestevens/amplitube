import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {

    super(props);

    this.state = {
      searchValue: ''
    }
  }

  updateSearchValue = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  render() {
    return (
      <nav className='SearchBar-container'>
        <div>
          <input className='SearchBar-input' type='text' value='' placeholder='search YouTube' onChange={this.updateSearchValue} />
        </div>
        <div>
          <i className='fa fa-times'></i>
        </div>
      </nav>
    )
  }
}

export default SearchBar;