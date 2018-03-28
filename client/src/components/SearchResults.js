import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-jplaylist';
import SearchResultItem from './SearchResultItem';

class SearchResults extends Component {

  renderSearchResultItems = () => {
    for (let i = 0; i < 4; i++) {
      return (
        <SearchResultItem />
      )
    }
  }

  render() {
    return (
      <div className='SearchResults-container'>
        <SearchResultItem onClick={() => actions.play('AudioPlaylist', 0)} />
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </div>
    )
  }
}

export default connect(null, actions)(SearchResults);