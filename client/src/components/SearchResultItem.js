import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchResultItem extends Component {

  render() {
    return (
      <div className='SearchResultItem-container' onClick={() => { this.props.playSelected(2) }}>
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

export default connect(null, actions)(SearchResultItem);