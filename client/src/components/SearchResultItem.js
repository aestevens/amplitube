import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchResultItem extends Component {

  render() {
    return (
      <div className='SearchResultItem-container' onClick={() => { this.props.playSelected(2) }}>
        <div className='SearchResultItem-image' style={{ backgroundImage: `url(${this.props.poster}`}}>
          <span>{this.props.duration}</span>
        </div>
        <div className='SearchResultItem-description-container'>
          <div className='SearchResultItem-description'>
            <div className='SearchResultItem-title'>
              <strong>{_.truncate(this.props.title, 12)}</strong>
            </div>
            <div className='SearchResultItem-channel'>
            {_.truncate(this.props.artist, 15)}
            </div>
            <div className='SearchResultItem-viewcount'>
              {this.props.viewCount} views
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(null, actions)(SearchResultItem);