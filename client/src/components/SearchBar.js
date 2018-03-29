import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchBar extends Component {

  constructor(props) {

    super(props);

    this.state = {
      searchValue: ''
    }
  }

  handleClearSearchValue = () => {
    this.setState({ searchValue: '' });
    this.searchInput.focus();
  }

  handleInputSubmit = event => {
    if (event.key === 'Enter' && this.state.searchValue) {
      event.preventDefault();
      this.props.toggleSearchResults();
      this.props.fetchSearchResults(this.state.searchValue);
    }
  }

  updateSearchValue = event => {
    this.setState({ searchValue: event.target.value });
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
    return (
      <nav className='SearchBar-container'>
        <div className='SearchBar-icon'>
          <i className='fa fa-arrow-left fa-xl' onClick={this.props.toggleHeaderBar}></i>
        </div>
        <div className='SearchBar-input'>
          <input
            ref={(input) => { this.searchInput = input; }}
            type='text'
            value={this.state.searchValue}
            placeholder='search AmpliTube'
            onChange={this.updateSearchValue}
            onKeyPress={this.handleInputSubmit}
          />
        </div>
        <div className='SearchBar-icon'>
          { this.state.searchValue ? <i className='fa fa-times fa-xl' onClick={this.handleClearSearchValue}></i> : null }
        </div>
      </nav>
    )
  }
}

export default connect(null, actions)(SearchBar);