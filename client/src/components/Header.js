import React, { Component } from 'react';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';

class Header extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isSearching: true
    }
  }

  render() {
    return (
      <div className='Header-container'>
        <nav>
          { this.state.isSearching ? <SearchBar /> : <MenuBar /> }
        </nav>
      </div>
    )
  }
}

export default Header