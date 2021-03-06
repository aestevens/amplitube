import React, { Component } from 'react';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';
import Landing from './Landing';

class Header extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isSearching: false
    }
  }

  toggleHeaderBar = () => {
    this.setState({ isSearching: !this.state.isSearching });
  }

  render() {
    return (
      <div className='Header-container'>
        <nav>
          { this.state.isSearching ? <SearchBar toggleHeaderBar={this.toggleHeaderBar} toggleSearchResults={this.props.toggleSearchResults} /> : <MenuBar toggleHeaderBar={this.toggleHeaderBar} /> }
        </nav>
        { this.state.isSearching ? null : <Landing /> }
      </div>
    )
  }
}

export default Header