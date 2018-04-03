import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchResultItem extends Component {

  getSelectedMedia = event => {
    return this.props.searchResults.find( result => result.id == event.target.dataset.index);
  }

  handlePlaySelected = event => {
    const selectedMedia = this.getSelectedMedia(event);
    this.props.setMedia(selectedMedia);
    this.props.playCurrentMedia();
  }

  handleAddToPlaylist = event => {
    console.log('clicked');
    const selectedMedia = this.getSelectedMedia(event);
    this.props.addMediaToPlaylist(selectedMedia);
  }

  render() {
    return (
      <div className='SearchResultItem-container' >
        <div className='SearchResultItem-image' data-index={this.props.id} style={{ backgroundImage: `url(${this.props.poster}`}} onClick={this.handlePlaySelected}>
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
            <div className='SearchResultItem-addToPlaylist' data-index={this.props.id} onClick={this.handleAddToPlaylist}>
              <i className='fa fa-plus'></i> add to playlist
            </div>
          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps({ searchResults }) {
  return { searchResults };
}

export default connect(mapStateToProps, actions)(SearchResultItem);