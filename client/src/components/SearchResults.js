import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResultItem from './SearchResultItem';

class SearchResults extends Component {

  renderSearchResultItems = () => {
    return this.props.searchResults.map( result => {
      return <SearchResultItem {...result} key={result.key} />
    });
  }

  renderLoadingImage = () => (
    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/ab79a231234507.564a1d23814ef.gif' alt='Loading' />
  )

  render() {
    return (
      <div className='SearchResults-container'>
        { this.props.searchResults ? this.renderSearchResultItems() : this.renderLoadingImage() }  
      </div>
    )
  }
}

function mapStateToProps({ searchResults }) {
  return { searchResults };
}

export default connect(mapStateToProps)(SearchResults);