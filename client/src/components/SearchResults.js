import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResultItem from './SearchResultItem';
import loading from '../assets/loading.gif';

class SearchResults extends Component {

  renderSearchResultItems = () => {
    return this.props.searchResults.map( result => {
      return <SearchResultItem {...result} data key={result.id} />
    });
  }

  renderLoadingImage = () => (
    <div className='SearchResults-container'>
      <img src={loading} alt='Loading' />
    </div>
  )

  render() {
    if (!this.props.searchResults) {
      return (
        <div className='SearchResults-container'>
          <img src={loading} alt='Loading' />
        </div>
      )
    }
    return (
      <div className='SearchResults-container'>
        {this.renderSearchResultItems()}  
      </div>
    )
  }
}

function mapStateToProps({ searchResults }) {
  return { searchResults };
}

export default connect(mapStateToProps)(SearchResults);