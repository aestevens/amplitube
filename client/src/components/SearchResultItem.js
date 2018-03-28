import React, { Component } from 'react';

class SearchResultItem extends Component {

  render() {
    return (
      <div className='SearchResultItem-container'>
        <div className='SearchResultItem-image'>
          <span>4:00</span>
        </div>
        <div className='SearchResultItem-description-container'>
          <div className='SearchResultItem-description'>
            <div className='SearchResultItem-title'>
              Bootcamps are for Squares
            </div>
            <div className='SearchResultItem-channel'>
              Project Shift
            </div>
            <div className='SearchResultItem-viewcount'>
              2.0M views
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SearchResultItem;