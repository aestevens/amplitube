import React, { Component } from 'react';
import Header from './Header';
import Landing from './Landing';
import SearchResults from './SearchResults';
import AudioPlaylist from './AudioPlaylist';

// Styles the jPlaylist to look nice
import '../../node_modules/react-jplaylist/dist/css/skins/sleek.css';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import '../../node_modules/react-jplaylist/dist/css/controls/iconControls.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showResults: false
    }
  }

  toggleSearchResults = (boolean) => {
    this.setState({ showResults: boolean });
  }

  render() {
    return (
      <div>
        <Header toggleSearchResults={this.toggleSearchResults} />
        { this.state.showResults ? <SearchResults /> : null }
        <AudioPlaylist />
      </div>
    );
  }
}

export default App;
