import React, { Component } from 'react';

class MenuBar extends Component {

  render() {
    return (
      <nav className='Header-nav'>
        <div>
          <h3 className='Header-h2'>AmpliTube</h3>
        </div>
        <div className='Header-login'>
          <i className='fa fa-search fa-xl MenuBar-search-icon' onClick={this.props.toggleHeaderBar}></i>
        </div>
      </nav>
    )
  }
}

export default MenuBar;